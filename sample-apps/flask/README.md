## OpenTelemetry for Python - Sample App - Flask
This application is used to validate the continual correct integration of OpenTelemetry for Python and the AWS X-Ray backend service. Validation is done using [the AWS OTel test framework](https://github.com/aws-observability/aws-otel-test-framework).

The application uses a Flask Backend to exposes the following 3 paths:
1. /
    - A simple health check to know the application is running.
2. /outgoing-http-call
    - Makes a simple HTTP request to `aws.amazon.com` using the popular `requests` Python library.
3. /aws-sdk-call
    - Makes a call to AWS S3 to list buckets for the account corresponding to the provided AWS credentials.

As of OTel for Python version `0.16b1` integration for sending traces to AWS X-Ray is validated to work correctly.

Because of pending updates to metric collection logic in OTel for Python, sending metrics to AWS X-Ray is **NOT** yet validated.
