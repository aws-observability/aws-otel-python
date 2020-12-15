# AWS Distro for OpenTelemetry Python

AWS Distro for OpenTelemetry Python SDK (ADOT Python SDK) is a distribution of [OpenTelemetry Python](https://github.com/open-telemetry/opentelemetry-python) with components to trace applications in a format compatible with the AWS X-Ray service. This enables all the features of the OpenTelemetry project and configures its components to create traces that can be viewed in the AWS X-Ray console and allow propagation of those contexts across multiple downstream AWS services.

## How it works

OpenTelemetry is a project maintained by the Cloud Native Computing Foundation which provides open source APIs, libraries, and agents to collect distributed traces and metrics for application monitoring.

OpenTelemetry generates telemetry data, such as metrics and traces, for requests to the application. In addition, OpenTelemetry Python provides automatic tracing for many popular Python packages. These traces record parameters used, results, exceptions, and more in span attributes as it completes the traced task. Read more about standardized attributes on the OpenTelemetry Specification [Semantic Conventions for traces](https://github.com/open-telemetry/opentelemetry-specification/tree/master/specification/trace/semantic_conventions).

[OpenTelemetry Python](https://github.com/open-telemetry/opentelemetry-python) provides entry points for configuration through its [API](https://github.com/open-telemetry/opentelemetry-python/tree/master/opentelemetry-api). This can be used to configure the [ids_generator](https://github.com/open-telemetry/opentelemetry-python/blob/master/opentelemetry-api/src/opentelemetry/trace/ids_generator.py) needed to support the X-Ray trace ID format. It also allows the use of a custom propagator, passed into the tracer provider, to generate and propagate the AWS X-Ray trace header. 

After traces have been generated, they can be sent to a back-end service like AWS X-Ray to display the traces in a user-friendly interactive console packed with features to help you visualize and understand what happened during traced calls. Learn more about AWS X-Ray in the [developer guide](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html).

An easy way for a traced application to send traces to AWS X-Ray is by using the ADOT Collector. The traced application configures OpenTelemetry for Python to export traces in the OpenTelemetry Format, and subsequently directs the traces to a Docker Container running the ADOT Collector. The ADOT Collector is configured with [AWS credentials for the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html), an AWS Region, and which trace attributes to index so that it can send the traces to the AWS X-Ray console. Read more about the [AWS X-Ray Tracing Exporter for OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/master/exporter/awsxrayexporter).


## Getting Started

Check out the links below for information on getting started with ADOT Python SDK:
- [Tracing with Automatic Instrumentation](https://aws-otel.github.io/docs/getting-started/python-sdk/trace-auto-instr)
- [Tracing with Manual Instrumentation](https://aws-otel.github.io/docs/getting-started/python-sdk/trace-manual-instr)



### Sample application - Auto instrumentation

See the [automatic sample app README.md](sample-apps/auto-instrumentation/flask/README.md) for setup instructions.


### Sample application - Manual instrumentation

See the [manual sample app README.md](sample-apps/manual-instrumentation/flask/README.md) for setup instructions.


## Requirements

Python 3.5+ is required to use OpenTelemetry Python. Check your currently installed Python version using `python3 -V`.
For more information about supported Python versions, see the [OpenTelemetry Python package on PyPi](https://pypi.org/project/opentelemetry-api/).

## Useful Links

Find out more about AWS X-Ray Tracing with Opentelemetry Python at the
following links.

- [OpenTelemetry Python Core GitHub](https://github.com/open-telemetry/opentelemetry-python)
- [OpenTelemetry Python Contrib GitHub](https://github.com/open-telemetry/opentelemetry-python-contrib)
- [AWS OpenTelemetry Python SDK Extension Package](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/master/sdk-extension/opentelemetry-sdk-extension-aws)
- [AWS Distro for OpenTelemetry](https://aws-otel.github.io/)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.
