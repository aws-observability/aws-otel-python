# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

import os
import random
import time

import boto3
import requests
from flask import Flask, request, session
# Setup AWS X-Ray Propagator
# OTel imports
from opentelemetry import metrics, propagators, trace
from opentelemetry.exporter.otlp.metrics_exporter import OTLPMetricsExporter
from opentelemetry.exporter.otlp.trace_exporter import OTLPSpanExporter
# Instrument Libraries
from opentelemetry.instrumentation.botocore import BotocoreInstrumentor
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from opentelemetry.sdk.extension.aws.trace import AwsXRayIdsGenerator
from opentelemetry.sdk.extension.aws.trace.propagation.aws_xray_format import (
    TRACE_ID_DELIMITER, TRACE_ID_FIRST_PART_LENGTH, TRACE_ID_VERSION,
    AwsXRayFormat)
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchExportSpanProcessor

propagators.set_global_textmap(AwsXRayFormat())

# Setup Tracer
otlp_exporter = OTLPSpanExporter(insecure=True)
span_processor = BatchExportSpanProcessor(otlp_exporter)
trace.set_tracer_provider(
    TracerProvider(
        active_span_processor=span_processor, ids_generator=AwsXRayIdsGenerator()
    )
)

tracer = trace.get_tracer(__name__)

# Setup Global Metric Provider

# Sets up the Global MeterProvider instance
metrics.set_meter_provider(MeterProvider())

meter = metrics.get_meter("aws-otel", "1.0")

# Setup Metric Components

apiBytesSentMetricName = "apiBytesSent"
latencyMetricName = "latency"

if "INSTANCE_ID" in os.environ:
    instanceId = os.environ["INSTANCE_ID"]
    if not instanceId.strip() == "":
        latencyMetricName += "_" + instanceId
        apiBytesSentMetricName += "_" + instanceId

apiBytesSentCounter = meter.create_counter(
    apiBytesSentMetricName, "API request load sent in bytes", "one", int
)

apiLatencyRecorder = meter.create_valuerecorder(
    latencyMetricName, "API latency time", "ms", int
)

# Start Metric Pipeline

# Exporter to export metrics to the console
exporter = OTLPMetricsExporter(insecure=True)

# start_pipeline will notify the MeterProvider to begin collecting/exporting
# metrics with the given meter, exporter and interval in seconds
metrics.get_meter_provider().start_pipeline(meter, exporter, 5)

# Setup Flask App

app = Flask(__name__)
app.secret_key = "aws-otel-python"

BotocoreInstrumentor().instrument()
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument()


# Constants

DIMENSION_API_NAME = "apiName"
DIMENSION_STATUS_CODE = "statusCode"
REQUEST_START_TIME = "requestStartTime"


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
    if request.path == "/outgoing-http-call":
        apiBytesSentCounter.add(
            response.calculate_content_length() + mimicPayloadSize(),
            {
                DIMENSION_API_NAME: request.path,
                DIMENSION_STATUS_CODE: response.status_code,
            },
        )

        apiLatencyRecorder.record(
            int(time.time() * 1_000) - session[REQUEST_START_TIME],
            {
                DIMENSION_API_NAME: request.path,
                DIMENSION_STATUS_CODE: response.status_code,
            },
        )

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


if __name__ == "__main__":
    host, port = os.environ["LISTEN_ADDRESS"].split(":")
    app.run(host=host, port=int(port), debug=True)
