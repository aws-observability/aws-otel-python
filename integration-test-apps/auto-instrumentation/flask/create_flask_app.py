# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

import os
import random
import time

import boto3
import requests
from flask import Flask, request, session
from opentelemetry import trace
from opentelemetry.sdk.extension.aws.trace.propagation.aws_xray_format import (
    TRACE_ID_DELIMITER,
    TRACE_ID_FIRST_PART_LENGTH,
    TRACE_ID_VERSION,
)

# NOTE: (NathanielRN) Metrics is on hold until 1.50 release
# See https://github.com/open-telemetry/opentelemetry-python/issues/1547#issuecomment-768592654
# from setup_metrics import apiBytesSentCounter, apiLatencyRecorder

# Constants

DIMENSION_API_NAME = "apiName"
DIMENSION_STATUS_CODE = "statusCode"
REQUEST_START_TIME = "requestStartTime"

# Setup Flask App

app = Flask(__name__)
app.secret_key = "aws-otel-python"


def convert_otel_trace_id_to_xray(otel_trace_id_decimal):
    otel_trace_id_hex = "{:032x}".format(otel_trace_id_decimal)
    x_ray_trace_id = TRACE_ID_DELIMITER.join(
        [
            TRACE_ID_VERSION,
            otel_trace_id_hex[:TRACE_ID_FIRST_PART_LENGTH],
            otel_trace_id_hex[TRACE_ID_FIRST_PART_LENGTH:],
        ]
    )
    return '{{"traceId": "{}"}}'.format(x_ray_trace_id)


@app.before_request
def before_request_func():
    session[REQUEST_START_TIME] = int(time.time() * 1_000)


def mimicPayloadSize():
    return random.randrange(1000)


@app.after_request
def after_request_func(response):
    # if request.path == "/outgoing-http-call":
    #     apiBytesSentCounter.add(
    #         response.calculate_content_length() + mimicPayloadSize(),
    #         {
    #             DIMENSION_API_NAME: request.path,
    #             DIMENSION_STATUS_CODE: response.status_code,
    #         },
    #     )

    #     apiLatencyRecorder.record(
    #         int(time.time() * 1_000) - session[REQUEST_START_TIME],
    #         {
    #             DIMENSION_API_NAME: request.path,
    #             DIMENSION_STATUS_CODE: response.status_code,
    #         },
    #     )

    return response


# Test HTTP instrumentation
@app.route("/outgoing-http-call")
def call_http():
    requests.get("https://aws.amazon.com/")

    return app.make_response(
        convert_otel_trace_id_to_xray(
            trace.get_current_span().get_span_context().trace_id
        )
    )


# Test AWS SDK instrumentation
@app.route("/aws-sdk-call")
def call_aws_sdk():
    client = boto3.client("s3")
    client.list_buckets()

    return app.make_response(
        convert_otel_trace_id_to_xray(
            trace.get_current_span().get_span_context().trace_id
        )
    )


# Test Root Endpoint
@app.route("/")
def root_endpoint():
    return "<h1>App running!</h1>"


def get_flask_app_run_args():
    host, port = os.environ["LISTEN_ADDRESS"].split(":")
    # NOTE: (NathanielRN) The auto-reloader of the Flask app in debug=True mode
    # will remove automatically-introduced instrumentation! Filing issue
    # upstream:
    # https://github.com/open-telemetry/opentelemetry-python-contrib/issues/546
    return {
        "host": host,
        "port": int(port),
        "debug": True,
        "use_reloader": False,
    }
