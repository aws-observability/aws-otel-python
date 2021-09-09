import argparse
import logging
import sys
import time

import boto3
import docker

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__file__)

# AWS Client API Constants

PROCESS_COMMAND_LINE_DIMENSION_NAME = "process.command_line"
METRIC_DATA_STATISTIC = "Sum"

COMMON_ALARM_API_PARAMETERS = {
    "EvaluationPeriods": 5,
    "DatapointsToAlarm": 3,
    "ComparisonOperator": "GreaterThanOrEqualToThreshold",
    "TreatMissingData": "ignore",
}

CPU_LOAD_ALARM_NAME = "OTel Performance Test - CPU Load Percentage Spike - Python"
TOTAL_MEMORY_ALARM_NAME = (
    "OTel Performance Test - Virtual Memory Usage Spike - Python"
)

# Docker Client API Constants

LOAD_GENERATOR_CONTAINER_NAME = "docker-performance-tests_load-generator_1"
APP_CONTAINER_NAME = "docker-performance-tests_app_1"
COLLECTOR_CONTAINER_NAME = "docker-performance-tests_otel_1"


def parse_args():
    parser = argparse.ArgumentParser(
        description="""
        poll-during-performance-tests.py continuously polls the backend monitoring tool
        to see if an alarm has triggered because of a spike in the Performance Tests.
        """
    )

    parser.add_argument(
        "--metrics-period",
        required=True,
        type=int,
        help="""
        The interval at which performance metrics are collected. This is the
        period used for the metrics monitored by the alarms and is the interval
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
        "--logs-namespace",
        required=True,
        help="""
        The namespace of the logs that the alarm should poll.

        Examples:

            --logs-namespace=aws-observability/aws-otel-python/soak-tests
        """,
    )

    parser.add_argument(
        "--process-command-line-dimension-value",
        required=True,
        help="""
        The Cloudwatch metric dimension value which corresponds to the command
        line string used to run the sample app process. This sample app is the
        one being tested for performance. The alarms being polled in this script
        monitor metrics which contain this dimension value.

        Examples:

            --process-command-line-dimension-value='/usr/local/bin/python3 application.py'
        """,
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

    return parser.parse_args()


if __name__ == "__main__":
    logger.debug("Starting Alarm Polling Script.")

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
                            "Value": args.process_command_line_dimension_value,
                        }
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
                            "Value": args.process_command_line_dimension_value,
                        }
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
                            "Name": "process.command_line",
                            "Value": args.process_command_line_dimension_value,
                        }
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

    # Create Alarms

    aws_client.put_metric_alarm(
        **{
            **COMMON_ALARM_API_PARAMETERS,
            "AlarmName": CPU_LOAD_ALARM_NAME,
            "AlarmDescription": "Triggers when the CPU Load Percentage spikes above the allowed threshold DURING the Performance Test.",
            "Threshold": args.cpu_load_threshold,
            "Metrics": cpu_load_metric_data_queries,
        }
    )

    aws_client.put_metric_alarm(
        **{
            **COMMON_ALARM_API_PARAMETERS,
            "AlarmName": TOTAL_MEMORY_ALARM_NAME,
            "AlarmDescription": "Triggers when the Virtual Memory Usage spikes above the allowed threshold DURING the Performance Test.",
            "Threshold": args.total_memory_threshold,
            "Metrics": total_memory_metric_data_queries,
        }
    )

    # Poll Alarms

    docker_client = docker.from_env()
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
                AlarmNames=[CPU_LOAD_ALARM_NAME, TOTAL_MEMORY_ALARM_NAME]
            )["MetricAlarms"]:
                if alarm["StateValue"] == "ALARM":
                    logger.error(
                        "Triggered alarm %s with reason: %s",
                        alarm["AlarmName"],
                        alarm["StateReason"],
                    )
                    did_tests_fail_during_execution = True
                logger.info(
                    "Alarm %s was %s", alarm["AlarmName"], alarm["StateValue"]
                )
            time_of_last_alarm_poll = time.time()

        time.sleep(3)

    for container_name in [APP_CONTAINER_NAME, COLLECTOR_CONTAINER_NAME]:
        docker_client.containers.get(container_name).stop()

    # Delete Alarms

    aws_client.delete_alarms(
        AlarmNames=[CPU_LOAD_ALARM_NAME, TOTAL_MEMORY_ALARM_NAME]
    )

    # End the Polling

    if did_tests_fail_during_execution:
        logger.error(
            "Failing because of alarms triggered during Performance Test."
        )
        sys.exit(2)

    logger.info("Done polling Performance Test alarms.")
