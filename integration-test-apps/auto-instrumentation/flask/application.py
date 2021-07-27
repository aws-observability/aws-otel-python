# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# OTel Imports

from opentelemetry import propagate

# AWS X-Ray SDK Extension Components

from opentelemetry.sdk.extension.aws.trace.propagation.aws_xray_format import (
    AwsXRayFormat,
)

# Integration Test App

from create_flask_app import app, get_flask_app_run_args

# Setup AWS X-Ray Propagator

# Propagators can be set using environment variable: OTEL_PROPAGATORS = aws_xray
# propagate.set_global_textmap(AwsXRayFormat())

if __name__ == "__main__":
    app.run(**get_flask_app_run_args())
