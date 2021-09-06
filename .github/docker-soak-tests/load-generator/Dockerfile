FROM golang:1.16

WORKDIR $GOPATH/main

ARG GOPROXY=direct

ENV GOPROXY=direct

RUN go get github.com/rakyll/hey

CMD hey -z "$SOAK_TEST_DURATION_IN_MINUTES"m http://app:8080/outgoing-http-call
