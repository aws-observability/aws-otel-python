FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

RUN opentelemetry-bootstrap --action=install

ENV HOME=/

ENV OTEL_RESOURCE_ATTRIBUTES='service.name=aws-sample-auto-app'

CMD OTEL_PROPAGATORS=aws_xray opentelemetry-instrument --id-generator aws_xray python3 application.py
