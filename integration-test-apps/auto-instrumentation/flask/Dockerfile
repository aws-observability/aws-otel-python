FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

RUN opentelemetry-bootstrap --action=install

ENV HOME=/

ENV OTEL_RESOURCE_ATTRIBUTES='service.name=aws-sample-auto-app'

CMD opentelemetry-instrument --trace-exporter otlp --id-generator aws_xray python3 application.py
