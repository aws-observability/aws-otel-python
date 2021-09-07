FROM golang:1.16

WORKDIR $GOPATH/main

ARG GOPROXY=direct

ENV GOPROXY=direct

RUN curl https://hey-release.s3.us-east-2.amazonaws.com/hey_linux_amd64 -o /usr/local/bin/hey && chmod +x /usr/local/bin/hey

CMD hey -z "$TEST_DURATION_MINUTES"m http://app:8080/outgoing-http-call
