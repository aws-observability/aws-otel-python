# AWS Distro for OpenTelemetry Python - Sample app - Manual instrumentation - Flask

This application validates the continual integration of manual instrumentation with the AWS Distro for OpenTelemetry Python and the AWS X-Ray back-end service. Validation is done using the [AWS Test Framework for OpenTelemetry](https://github.com/aws-observability/aws-otel-test-framework).

## Application interface

The application uses [Flask](https://flask.palletsprojects.com/en/1.1.x/) to expose the following routes:
1. `/`
    - Ensures the application is running.
2. `/outgoing-http-call`
    - Makes a HTTP request to `aws.amazon.com` using the popular `requests` Python library.
3. `/aws-sdk-call`
    - Makes a call to AWS S3 to list buckets for the account corresponding to the provided AWS credentials.

## Running the sample application:

For more information on running a python application using manual instrumentation, please refer to the [ADOT Python Manual Instrumentation Documentation](https://aws-otel.github.io/docs/getting-started/python-sdk/trace-manual-instr).

Option 1: Use the utility shell script to run the application in a local docker container `sample-apps/run_sample.sh flask manual`

Option 2: Use python CLI to run the application directly in your terminal configured with OpenTelemetry parameters `LISTEN_ADDRESS=127.0.0.1:8080 OTEL_EXPORTER_OTLP_ENDPOINT=127.0.0.1:55680 OTEL_EXPORTER_OTLP_INSECURE=True python sample-apps/manual-instrumentation/flask/application.py`

Sending metrics to Amazon CloudWatch is not validated due to [pending updates](https://github.com/open-telemetry/opentelemetry-python/issues/1167) to metric collection logic in ADOT Python.
