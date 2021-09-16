# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# OTel Imports

from opentelemetry import propagate, trace
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import (
    OTLPSpanExporter,
)

# Instrumentation Libraries

from opentelemetry.instrumentation.botocore import BotocoreInstrumentor
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor

# OpenTelemetry SDK Components

from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

# AWS X-Ray SDK Extension Components

from opentelemetry.sdk.extension.aws.trace import AwsXRayIdGenerator
from opentelemetry.sdk.extension.aws.trace.propagation.aws_xray_format import (
    AwsXRayFormat,
)
# from opentelemetry.sdk.resources import get_aggregated_resources
# from opentelemetry.sdk.extension.aws.resource.ec2 import (
#     AwsEc2ResourceDetector,
# )

# Integration Test App

from create_flask_app import app, get_flask_app_run_args

# Setup AWS X-Ray Propagator

# Propagators can be set using environment variable: OTEL_PROPAGATORS = xray
propagate.set_global_textmap(AwsXRayFormat())

# Setup Tracer

# OTLP Exporter is configured through environment variables:
# - OTEL_EXPORTER_OTLP_ENDPOINT
# - OTEL_EXPORTER_OTLP_CERTIFICATE
otlp_exporter = OTLPSpanExporter()
span_processor = BatchSpanProcessor(otlp_exporter)
trace.set_tracer_provider(
    TracerProvider(
        active_span_processor=span_processor,
        id_generator=AwsXRayIdGenerator(),
        # resource=get_aggregated_resources(
        #     [
        #         AwsEc2ResourceDetector(),
        #     ]
        # ),
    )
)

# Instrument Packages

BotocoreInstrumentor().instrument()
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument()

if __name__ == "__main__":
    app.run(**get_flask_app_run_args())
