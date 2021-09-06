import argparse
import logging
import sys
import time

import boto3
import docker

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__file__)

LOAD_GENERATOR_CONTAINER_NAME = "docker-soak-tests_load-generator_1"
APP_CONTAINER_NAME = "docker-soak-tests_app_1"
COLLECTOR_CONTAINER_NAME = "docker-soak-tests_otel_1"
SOAK_TESTS_STARTED_TIMEOUT = 10


def parse_args():
    parser = argparse.ArgumentParser(
        description="""
        poll-during-soak-tests.py continuously polls the backend monitoring tool
        to see if an alarm has triggered because of a spike in the Soak Tests.
        """
    )

    parser.add_argument(
        "--polling-interval",
        required=True,
        type=int,
        help="""
        The interval with which the script polls the Soak Test alarms.
        In seconds.

        Examples:

            --polling-interval=600
        """,
    )

    return parser.parse_args()


if __name__ == "__main__":
    logger.debug("Starting Alarm Polling Script.")

    args = parse_args()

    aws_client = boto3.client("cloudwatch")
    docker_client = docker.from_env()

    did_soak_test_fail_during = False

    time_of_last_alarm_poll = time.time()

    logger.info("Begin polling alarms. Continue until Load Generator no longer running.")
    while (
        docker_client.containers.get(LOAD_GENERATOR_CONTAINER_NAME).attrs[
            "State"
        ]["Status"]
        == "running"
    ):
        if time.time() - time_of_last_alarm_poll > args.polling_interval:
            logger.info("Polling alarms now.")
            for alarm in aws_client.describe_alarms(
                AlarmNamePrefix="OTel Python Soak Tests - "
            )["MetricAlarms"]:
                if alarm["StateValue"] == "ALARM":
                    logger.error(
                        "Triggered alarm %s with reason: %s",
                        alarm["AlarmName"],
                        alarm["StateReason"],
                    )
                    did_soak_test_fail_during = True
                logger.info(
                    "Alarm %s was %s", alarm["AlarmName"], alarm["StateValue"]
                )
            time_of_last_alarm_poll = time.time()

        time.sleep(3)

    for container_name in [APP_CONTAINER_NAME, COLLECTOR_CONTAINER_NAME]:
        docker_client.containers.get(container_name).stop()

    if did_soak_test_fail_during:
        logger.error("Failing because of alarms triggered during Soak Test.")
        sys.exit(2)

    logger.info("Done polling Soak Test alarms.")
