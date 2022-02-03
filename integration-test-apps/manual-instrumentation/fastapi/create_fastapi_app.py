# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

import os
import random
import time

import boto3
import requests
from fastapi import FastAPI
import logging
from pydantic import BaseModel
from opentelemetry import trace
from opentelemetry.propagators.aws.aws_xray_propagator import (
    TRACE_ID_DELIMITER,
    TRACE_ID_FIRST_PART_LENGTH,
    TRACE_ID_VERSION,
)

if os.environ.get('SAMPLE_APP_LOG_LEVEL') == 'ERROR':
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)

# NOTE: (NathanielRN) Metrics is on hold.
# See https://github.com/open-telemetry/opentelemetry-python/issues/1835
# from setup_metrics import apiBytesSentCounter, apiLatencyRecorder

# Constants

DIMENSION_API_NAME = 'apiName'
DIMENSION_STATUS_CODE = 'statusCode'
REQUEST_START_TIME = 'requestStartTime'

# Setup Flask App

app = FastAPI()

# Setup Response Model

class trace_response(BaseModel):
    traceId: str


def convert_otel_trace_id_to_xray(otel_trace_id_decimal):
    otel_trace_id_hex = '{:032x}'.format(otel_trace_id_decimal)
    x_ray_trace_id = TRACE_ID_DELIMITER.join(
        [
            TRACE_ID_VERSION,
            otel_trace_id_hex[:TRACE_ID_FIRST_PART_LENGTH],
            otel_trace_id_hex[TRACE_ID_FIRST_PART_LENGTH:],
        ]
    )
    return {'traceId': '{}'.format(x_ray_trace_id)}


def mimicPayloadSize():
    return random.randrange(1000)


# Test HTTP instrumentation
@app.get('/outgoing-http-call', response_model=trace_response, status_code=200)
def call_http():
    requests.get('https://aws.amazon.com/')

    return convert_otel_trace_id_to_xray(
        trace.get_current_span().get_span_context().trace_id
    )


# Test AWS SDK instrumentation
@app.get('/aws-sdk-call', response_model=trace_response, status_code=200)
def call_aws_sdk():
    client = boto3.client('s3')
    client.list_buckets()

    return convert_otel_trace_id_to_xray(
        trace.get_current_span().get_span_context().trace_id
    )


# Test Root Endpoint
@app.get('/', status_code=200)
def root_endpoint():
    return '<h1>App running!</h1>'


def get_fastapi_app_run_args():
    host, port = os.environ['LISTEN_ADDRESS'].split(':')
    return {
        'host': host,
        'port': int(port),
        'debug': True,
        'reload': False
    }
