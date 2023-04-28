# AWS Distro for OpenTelemetry Python - Integration Testing App - None-instrumentation - Flask (DEPRECATED)

**WARNING:** This sample app is deprecated and is no longer maintained.  Please use the [new standardized sample apps](https://github.com/aws-observability/aws-otel-community/tree/master/sample-apps).

This application provides a baseline for performance testing. It has no instrumentation and so when compared against apps that do have instrumentation, it helps reveal the overhead that comes with instrumentation.

## Application interface

The application uses [Flask](https://flask.palletsprojects.com/en/1.1.x/) to expose the following routes:
1. `/`
    - Ensures the application is running.
2. `/outgoing-http-call`
    - Makes a HTTP request to `aws.amazon.com` using the popular `requests` Python library.
3. `/aws-sdk-call`
    - Makes a call to AWS S3 to list buckets for the account corresponding to the provided AWS credentials.

## Running the integration testing application:

Expects [the ADOT Collector](https://aws-otel.github.io/docs/getting-started/collector) to be running locally as a sidecar.

Use `python3` to run the application directly in your terminal: `LISTEN_ADDRESS=127.0.0.1:8080 python3 integration-test-apps/none-instrumentation/flask/application.py`
