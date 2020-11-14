# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# OTel Imports

from opentelemetry import propagators, trace
from opentelemetry.exporter.otlp.trace_exporter import OTLPSpanExporter

# Instrumentation Libraries

from opentelemetry.instrumentation.botocore import BotocoreInstrumentor
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor

# OpenTelemetry SDK Components

from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchExportSpanProcessor

# AWS X-Ray SDK Extension Components

from opentelemetry.sdk.extension.aws.trace import AwsXRayIdsGenerator
from opentelemetry.sdk.extension.aws.trace.propagation.aws_xray_format import (
    AwsXRayFormat,
)

# Sample App

from create_flask_app import app, get_flask_app_run_args

# Setup AWS X-Ray Propagator

# Propagators can be set using environment variable: OTEL_PROPAGATORS = aws_xray
propagators.set_global_textmap(AwsXRayFormat())

# Setup Tracer

# OTLP Exporter is configured through environment variables:
# - OTEL_EXPORTER_OTLP_ENDPOINT
# - OTEL_EXPORTER_OTLP_INSECURE
otlp_exporter = OTLPSpanExporter()
span_processor = BatchExportSpanProcessor(otlp_exporter)
trace.set_tracer_provider(
    TracerProvider(
        active_span_processor=span_processor, ids_generator=AwsXRayIdsGenerator()
    )
)

# Instrument Packages

BotocoreInstrumentor().instrument()
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument()


if __name__ == "__main__":
    app.run(**get_flask_app_run_args())
