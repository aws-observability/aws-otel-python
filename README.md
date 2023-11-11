# AWS Distro for OpenTelemetry Python Language

This repo hosts documentation and sample apps for the ADOT Python library which provides the AWS service integrations for traces and metrics for the [OpenTelemetry Python](https://github.com/open-telemetry/opentelemetry-python) library. The library can be configured to support trace applications with the AWS X-Ray service. This enables all the features of the OpenTelemetry project and configures its components to create traces that can be viewed in the AWS X-Ray console and allow propagation of those contexts across multiple downstream AWS services.

ADOT is also now generally available for Python metrics. 

## How it works

OpenTelemetry is a project maintained by the Cloud Native Computing Foundation which provides open source APIs, libraries, and agents to collect distributed traces and metrics for application monitoring.

OpenTelemetry generates telemetry data, such as metrics and traces, for requests to the application. In addition, OpenTelemetry Python provides automatic tracing for many popular Python packages. These traces record parameters used, results, exceptions, and more in span attributes as it completes the traced task. Read more about standardized attributes on the OpenTelemetry Specification [Semantic Conventions for traces](https://github.com/open-telemetry/opentelemetry-specification/tree/main/specification/trace/semantic_conventions).

[OpenTelemetry Python](https://github.com/open-telemetry/opentelemetry-python) provides entry points for configuration through its [API](https://github.com/open-telemetry/opentelemetry-python/tree/main/opentelemetry-api). This can be used to configure the [ids_generator](https://github.com/open-telemetry/opentelemetry-python/blob/65528f7534f1f5f2e8adc7520b6e696a84569c7d/opentelemetry-sdk/src/opentelemetry/sdk/trace/id_generator.py#L19) needed to support the X-Ray trace ID format. It also allows the use of a custom propagator, passed into the tracer provider, to generate and propagate the AWS X-Ray trace header.

After traces have been generated, they can be sent to a back-end service like AWS X-Ray to display the traces in a user-friendly interactive console packed with features to help you visualize and understand what happened during traced calls. Learn more about AWS X-Ray in the [developer guide](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html).

An easy way for a traced application to send traces to AWS X-Ray is by using the ADOT Collector. The traced application configures OpenTelemetry for Python to export traces in the OpenTelemetry Format, and subsequently directs the traces to a Docker Container running the ADOT Collector. The ADOT Collector is configured with [AWS credentials for the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html), an AWS Region, and which trace attributes to index so that it can send the traces to the AWS X-Ray console. Read more about the [AWS X-Ray Tracing Exporter for OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/awsxrayexporter).


## Getting Started

Check out the links below for information on getting started with ADOT in Python:
- [Tracing with Automatic Instrumentation](https://aws-otel.github.io/docs/getting-started/python-sdk/trace-auto-instr)
- [Tracing with Manual Instrumentation](https://aws-otel.github.io/docs/getting-started/python-sdk/trace-manual-instr)



### Applications for integration testing - Auto-instrumentation (DEPRECATED)

**WARNING:** This sample app is deprecated and is no longer maintained.  Please use the [new standardized sample apps](https://github.com/aws-observability/aws-otel-community/tree/master/sample-apps).

See an app used for [integration testing with automatic instrumentation README.md](integration-test-apps/auto-instrumentation/flask/README.md) for setup instructions.


### Applications for integration testing - Manual instrumentation (DEPRECATED)

**WARNING:** This sample app is deprecated and is no longer maintained.  Please use the [new standardized sample apps](https://github.com/aws-observability/aws-otel-community/tree/master/sample-apps).

See an app used for [integration testing with manual instrumentation README.md](integration-test-apps/manual-instrumentation/flask/README.md) for setup instructions.


## Requirements

Python 3.5+ is required to use OpenTelemetry Python. Check your currently installed Python version using `python3 -V`.
For more information about supported Python versions, see the [OpenTelemetry Python package on PyPi](https://pypi.org/project/opentelemetry-api/).

## Useful Links

Find out more about AWS X-Ray Tracing with Opentelemetry Python at the
following links.

- [OpenTelemetry Python Core GitHub](https://github.com/open-telemetry/opentelemetry-python)
- [OpenTelemetry Python Contrib GitHub](https://github.com/open-telemetry/opentelemetry-python-contrib)
- [AWS OpenTelemetry Python SDK Extension Package](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/sdk-extension/opentelemetry-sdk-extension-aws)
- [AWS OpenTelemetry Python X-Ray Propagator Package](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/propagator/opentelemetry-propagator-aws-xray)
- [AWS Distro for OpenTelemetry](https://aws-otel.github.io/)

## Security issue notifications
If you discover a potential security issue in this project we ask that you notify AWS/Amazon Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public github issue.

## License

This project is licensed under the Apache-2.0 License.
