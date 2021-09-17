# AWS Distro for OpenTelemetry Python - Integration Testing App - Manual instrumentation - Flask

This application validates the continual integration of manual instrumentation with the AWS Distro for OpenTelemetry Python and the AWS X-Ray back-end service. Validation is done using the [AWS Test Framework for OpenTelemetry](https://github.com/aws-observability/aws-otel-test-framework).

## Application interface

The application uses [Flask](https://flask.palletsprojects.com/en/1.1.x/) to expose the following routes:
1. `/`
    - Ensures the application is running.
2. `/outgoing-http-call`
    - Makes a HTTP request to `aws.amazon.com` using the popular `requests` Python library.
3. `/aws-sdk-call`
    - Makes a call to AWS S3 to list buckets for the account corresponding to the provided AWS credentials.

## Running the integration testing application:

For more information on running a python application using manual instrumentation, please refer to the [ADOT Python Manual Instrumentation Documentation](https://aws-otel.github.io/docs/getting-started/python-sdk/trace-manual-instr). In this context, the ADOT Collector is being run locally as a sidecar.

Option 1: Use the utility shell script to run the application in a local docker container `integration-test-apps/run_integration_test_app.sh flask manual`

Option 2: Use `python3` to run the application directly in your terminal configured with OpenTelemetry parameters `LISTEN_ADDRESS=127.0.0.1:8080 OTEL_EXPORTER_OTLP_ENDPOINT=127.0.0.1:4317 python3 integration-test-apps/manual-instrumentation/flask/application.py`

Sending metrics to Amazon CloudWatch is not validated due to [pending updates](https://github.com/open-telemetry/opentelemetry-python/issues/1835) to metric collection logic in ADOT Python.
