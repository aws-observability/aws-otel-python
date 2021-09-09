FROM python:3.9

WORKDIR /app

COPY . .

RUN git clone https://github.com/open-telemetry/opentelemetry-python.git opentelemetry-python-core

RUN git clone https://github.com/open-telemetry/opentelemetry-python-contrib.git opentelemetry-python-contrib

RUN pip install -r requirements.txt

ENV HOME=/

ENV OTEL_RESOURCE_ATTRIBUTES='service.name=aws-sample-manual-app'

CMD python application.py
