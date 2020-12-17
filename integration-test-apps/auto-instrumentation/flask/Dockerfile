FROM python:3.6

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

RUN opentelemetry-bootstrap --action=install

ENV HOME=/

CMD opentelemetry-instrument -e otlp --ids-generator aws_xray python application.py
