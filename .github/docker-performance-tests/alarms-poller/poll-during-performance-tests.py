import argparse
import logging
import sys
import time

import boto3
import docker

logging.basicConfig(
    format="%(asctime)s %(levelname)-8s %(message)s",
    level=logging.INFO,
    datefmt="%FT%TZ",
)

logger = logging.getLogger(__file__)

# AWS Client API Constants

COMMIT_SHA_DIMENSION_NAME = "commit_sha"
GITHUB_RUN_ID_DIMENSION_NAME = "github_run_id"
PROCESS_COMMAND_LINE_DIMENSION_NAME = "process.command_line"

METRIC_DATA_STATISTIC = "Sum"

COMMON_ALARM_API_PARAMETERS = {
    "EvaluationPeriods": 4,
    "DatapointsToAlarm": 3,
    "ComparisonOperator": "GreaterThanOrEqualToThreshold",
    "TreatMissingData": "ignore",
}

CPU_LOAD_ALARM_NAME_PREFIX = (
    "OTel Performance Test - CPU Load Percentage Spike"
)
TOTAL_MEMORY_ALARM_NAME_PREFIX = (
    "OTel Performance Test - Virtual Memory Usage Spike"
)

# Docker Client API Constants

APP_CONTAINER_NAME = "docker-performance-tests_app_1"
COLLECTOR_CONTAINER_NAME = "docker-performance-tests_otel_1"
LOAD_GENERATOR_CONTAINER_NAME = "docker-performance-tests_load-generator_1"


def parse_args():
    parser = argparse.ArgumentParser(
        description="""
        poll-during-performance-tests.py continuously polls the backend monitoring tool
        to see if an alarm has triggered because of a spike in the Performance Tests.
        """
    )

    parser.add_argument(
        "--cpu-load-threshold",
        required=True,
        type=int,
        help="""
        The threshold the CPU Load (as a percentage) must stay under to not
        trigger the alarm.

        Examples:

            --cpu-load-threshold=75
        """,
    )

    parser.add_argument(
        "--total-memory-threshold",
        required=True,
        type=int,
        help="""
        The threshold the Total Memory (in bytes) must stay under to not trigger
        the alarm.

        Examples:

            --total-memory-threshold=$(echo 1.5 \* 2^30 | bc)
        """,
    )

    parser.add_argument(
        "--logs-namespace",
        required=True,
        help="""
        The namespace of the logs that the alarm should poll.

        Examples:

            --logs-namespace=aws-observability/aws-otel-python/soak-tests
        """,
    )

    parser.add_argument(
        "--metrics-period",
        required=True,
        type=int,
        help="""
        The interval at which performance metrics are collected. This is the
        period used by the metrics that the alarms monitor and is the interval
        with which the script polls the Performance Test alarms (in seconds).

        Examples:

            --metrics-period=600
        """,
    )

    parser.add_argument(
        "--num-of-cpus",
        required=True,
        type=int,
        help="""
        The number of CPUs used when running the performance tests.

        Examples:

            --num-of-cpus=2
        """,
    )

    parser.add_argument(
        "--app-process-command-line-dimension-value",
        required=True,
        help="""
        The Cloudwatch metric dimension value which corresponds to the command
        line string used to run the sample app process. This sample app is the
        one being tested for performance. The alarms being polled in this script
        monitor metrics which contain this dimension value.

        Examples:

            --app-process-command-line-dimension-value='/usr/local/bin/python3 application.py'
        """,
    )

    parser.add_argument(
        "--target-sha",
        required=True,
        help="""
        The SHA of the commit for the current GitHub workflow run. Used to
        query Cloudwatch by metric dimension value so metrics returned
        correspond to the app that was performance tested.

        Examples:

            --target-sha=${{ github.sha }}
        """,
    )

    parser.add_argument(
        "--github-run-id",
        required=True,
        help="""
        The Id for the current GitHub workflow run. Used to create a unique
        name for the Performance Test Alarms.

        Examples:

            --github-run-id=$GITHUB_RUN_ID
        """,
    )

    parser.add_argument(
        "--image-suffix",
        required=True,
        help="""
        The image suffix which uniquely defines this Sample app by its platform
        used, its instrumentation type, and the commit SHA from which it was
        built. Used to create a unique name for the Performance Test Alarms.

        Examples:

            --image-suffix=flask-auto-12345abcdef38e38678a59da0911c9abcde12345
        """,
    )

    return parser.parse_args()


if __name__ == "__main__":
    logger.debug("Starting Alarm Polling Script.")

    docker_client = docker.from_env()

    if (
        docker_client.containers.get(APP_CONTAINER_NAME).attrs["State"][
            "Status"
        ]
        != "running"
    ):
        logger.error("Failing because Sample App was not running.")
        sys.exit(1)

    if (
        docker_client.containers.get(COLLECTOR_CONTAINER_NAME).attrs["State"][
            "Status"
        ]
        != "running"
    ):
        logger.error("Failing because Collector was not running.")
        sys.exit(1)

    if (
        docker_client.containers.get(LOAD_GENERATOR_CONTAINER_NAME).attrs[
            "State"
        ]["Status"]
        != "running"
    ):
        logger.error("Failing because Load Generator was not running.")
        sys.exit(1)

    args = parse_args()

    cpu_load_metric_data_queries = [
        {
            "Id": "cpu_time_raw",
            "MetricStat": {
                "Metric": {
                    "Namespace": args.logs_namespace,
                    "MetricName": "process.cpu.time",
                    "Dimensions": [
                        {
                            "Name": PROCESS_COMMAND_LINE_DIMENSION_NAME,
                            "Value": args.app_process_command_line_dimension_value,
                        },
                        {
                            "Name": COMMIT_SHA_DIMENSION_NAME,
                            "Value": args.target_sha,
                        },
                        {
                            "Name": GITHUB_RUN_ID_DIMENSION_NAME,
                            "Value": args.github_run_id,
                        },
                    ],
                },
                "Stat": METRIC_DATA_STATISTIC,
                "Period": args.metrics_period,
            },
            "Label": "CPU Time Raw",
            "ReturnData": False,
        },
        {
            "Id": "cpu_load_expr",
            "Expression": f"cpu_time_raw/PERIOD(cpu_time_raw)/{args.num_of_cpus}*100",
            "Label": f"CPU Load Percentage for {args.num_of_cpus} CPUs",
            "ReturnData": True,
            "Period": args.metrics_period,
        },
    ]

    total_memory_metric_data_queries = [
        {
            "Id": "virtual_memory_raw",
            "MetricStat": {
                "Metric": {
                    "Namespace": args.logs_namespace,
                    "MetricName": "process.memory.virtual_usage",
                    "Dimensions": [
                        {
                            "Name": PROCESS_COMMAND_LINE_DIMENSION_NAME,
                            "Value": args.app_process_command_line_dimension_value,
                        },
                        {
                            "Name": COMMIT_SHA_DIMENSION_NAME,
                            "Value": args.target_sha,
                        },
                        {
                            "Name": GITHUB_RUN_ID_DIMENSION_NAME,
                            "Value": args.github_run_id,
                        },
                    ],
                },
                "Stat": METRIC_DATA_STATISTIC,
                "Period": args.metrics_period,
            },
            "Label": "Virtual Memory",
            "ReturnData": False,
        },
        {
            "Id": "physical_memory_raw",
            "MetricStat": {
                "Metric": {
                    "Namespace": args.logs_namespace,
                    "MetricName": "process.memory.physical_usage",
                    "Dimensions": [
                        {
                            "Name": PROCESS_COMMAND_LINE_DIMENSION_NAME,
                            "Value": args.app_process_command_line_dimension_value,
                        },
                        {
                            "Name": COMMIT_SHA_DIMENSION_NAME,
                            "Value": args.target_sha,
                        },
                        {
                            "Name": GITHUB_RUN_ID_DIMENSION_NAME,
                            "Value": args.github_run_id,
                        },
                    ],
                },
                "Stat": METRIC_DATA_STATISTIC,
                "Period": args.metrics_period,
            },
            "Label": "Physical Memory",
            "ReturnData": False,
        },
        {
            "Id": "total_memory_expr",
            "Expression": "SUM([virtual_memory_raw])",
            "Label": "Total Memory",
            "ReturnData": True,
            "Period": args.metrics_period,
        },
    ]

    aws_client = boto3.client("cloudwatch")

    unique_alarm_name_component = f"{args.image_suffix}-{args.github_run_id}"

    cpu_load_alarm_name = f"{CPU_LOAD_ALARM_NAME_PREFIX} ({unique_alarm_name_component}) Sample App"
    total_memory_alarm_name = f"{TOTAL_MEMORY_ALARM_NAME_PREFIX} ({unique_alarm_name_component}) Sample App"

    # Delete Alarms

    aws_client.delete_alarms(
        AlarmNames=[cpu_load_alarm_name, total_memory_alarm_name]
    )

    # Create Alarms

    aws_client.put_metric_alarm(
        **{
            **COMMON_ALARM_API_PARAMETERS,
            "AlarmName": cpu_load_alarm_name,
            "AlarmDescription": "Triggers when the CPU Load Percentage spikes above the allowed threshold DURING the ({unique_alarm_name_component}) Sample App Performance Test.",
            "Threshold": args.cpu_load_threshold,
            "Metrics": cpu_load_metric_data_queries,
        }
    )

    aws_client.put_metric_alarm(
        **{
            **COMMON_ALARM_API_PARAMETERS,
            "AlarmName": total_memory_alarm_name,
            "AlarmDescription": "Triggers when the Virtual Memory Usage spikes above the allowed threshold DURING the ({unique_alarm_name_component}) Sample App Performance Test.",
            "Threshold": args.total_memory_threshold,
            "Metrics": total_memory_metric_data_queries,
        }
    )

    # Poll Alarms

    did_tests_fail_during_execution = False
    time_of_last_alarm_poll = time.time()

    logger.info(
        "Begin polling alarms. Continue until Load Generator completes."
    )

    while (
        docker_client.containers.get(LOAD_GENERATOR_CONTAINER_NAME).attrs[
            "State"
        ]["Status"]
        == "running"
    ):
        if time.time() - time_of_last_alarm_poll > args.metrics_period:
            logger.info("Polling alarms now.")
            for alarm in aws_client.describe_alarms(
                AlarmNames=[
                    cpu_load_alarm_name,
                    total_memory_alarm_name,
                ]
            )["MetricAlarms"]:
                alarm_desc = (
                    f"Alarm {alarm['AlarmName']} was {alarm['StateValue']} with reason: {alarm['StateReason']}.",
                )
                if alarm["StateValue"] == "ALARM":
                    logger.error(alarm_desc)
                    did_tests_fail_during_execution = True
                else:
                    logger.info(alarm_desc)
            time_of_last_alarm_poll = time.time()

        time.sleep(3)

    for container_name in [APP_CONTAINER_NAME, COLLECTOR_CONTAINER_NAME]:
        docker_client.containers.get(container_name).stop()

    # Delete Alarms

    aws_client.delete_alarms(
        AlarmNames=[cpu_load_alarm_name, total_memory_alarm_name]
    )

    # End the Polling

    if did_tests_fail_during_execution:
        logger.error(
            "Failing because of alarms triggered during Performance Test."
        )
        sys.exit(2)

    logger.info("Done polling Performance Test alarms.")
