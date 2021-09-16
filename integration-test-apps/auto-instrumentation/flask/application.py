# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# Configuration with auto-instrumentation is done using environment variables.
# See the following variables:
# - OTEL_PROPAGATORS=xray
# - OTEL_PYTHON_ID_GENERATOR=xray
# - OTEL_RESOURCE_ATTRIBUTES='service.name=aws-sample-auto-app'
# (These are the default values if using `opentelemetry-distro[otlp]`)
# - OTEL_TRACES_EXPORTER=otlp
# - OTEL_EXPORTER_OTLP_ENDPOINT=127.0.0.1:4317

# Integration Test App

from create_flask_app import app, get_flask_app_run_args

# NOTE: Resource Detectors cannot be set using auto-instrumentation, they
# require manually configuring a TracerProvider. See the manual instrumentation
# Sample App for more information.

# trace.set_tracer_provider(
#     TracerProvider(
#         active_span_processor=span_processor,
#         id_generator=AwsXRayIdGenerator(),
#         # resource=get_aggregated_resources(
#         #     [
#         #         AwsEc2ResourceDetector(),
#         #     ]
#         # ),
#     )
# )

if __name__ == "__main__":
    app.run(**get_flask_app_run_args())
