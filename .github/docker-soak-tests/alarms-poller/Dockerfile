FROM python:3.9

COPY . .

RUN pip install docker boto3

CMD python ./poll-during-soak-tests.py --polling-interval $HOSTMETRICS_INTERVAL_SECS;
