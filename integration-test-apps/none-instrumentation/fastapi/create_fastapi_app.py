# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

import os
import random

import boto3
import requests
from fastapi import FastAPI
import logging
from pydantic import BaseModel

if os.environ.get('SAMPLE_APP_LOG_LEVEL') == 'ERROR':
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)


# Constants
DUMMY_TRACE_ID = 0x01234567890123456789012345678901
REQUEST_START_TIME = 'requestStartTime'


# Setup FastAPI App
app = FastAPI()


# Setup Response Model
class trace_response(BaseModel):
    traceId: str


def convert_otel_trace_id_to_xray(otel_trace_id_decimal):
    otel_trace_id_hex = '{:032x}'.format(otel_trace_id_decimal)
    x_ray_trace_id = '-'.join(
        [
            '1',
            otel_trace_id_hex[:8],
            otel_trace_id_hex[8:],
        ]
    )
    return {'traceId': '{}'.format(x_ray_trace_id)}


# @app.before_request
# def before_request_func():
#     session[REQUEST_START_TIME] = int(time.time() * 1_000)


def mimicPayloadSize():
    return random.randrange(1000)


# @app.after_request
# def after_request_func(response):
#     return response


@app.get('/outgoing-http-call', response_model=trace_response, status_code=200)
def call_http():
    requests.get('https://aws.amazon.com/')

    return convert_otel_trace_id_to_xray(
        DUMMY_TRACE_ID
    )


@app.get('/aws-sdk-call', response_model=trace_response, status_code=200)
def call_aws_sdk():
    client = boto3.client('s3')
    client.list_buckets()

    return convert_otel_trace_id_to_xray(
        DUMMY_TRACE_ID
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
