# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# Script Usage Validation

if [[ $# -lt 2 ]]; then
    echo 'USAGE: ./run_sample <APP_PLATFORM> <INSTRUMENTATION_TYPE>'
    exit -1
fi

if [[ $AWS_ACCESS_KEY_ID && $AWS_SECRET_ACCESS_KEY ]]; then
    echo 'AWS credentials found in environment variables.'
elif [ -d "$HOME/.aws/" ]; then
    echo 'AWS credentials NOT found in environment variables. Will attempt to mount ~/.aws instead.'
    DOCKER_MOUNT_AWS_CREDS_OPTION="-v $HOME/.aws:/.aws"
else
    echo 'AWS credentials NOT found in either environment variables or home directory. AWS calls will not work.'
fi

# Script Configuration

if [[ $APP_ENDPOINT ]]; then
    IFS=':'
    APP_ENDPOINT_ARRAY=($APP_ENDPOINT)
    unset IFS
    if [[ ${#APP_ENDPOINT_ARRAY[@]} -lt 2 ]]; then
        echo "App Endpoint $APP_ENDPOINT is not valid! Expected: <APP_HOST_NAME>:<APP_PORT>"
        exit -1
    fi
    APP_HOST_NAME=${APP_ENDPOINT_ARRAY[0]}
    APP_PORT=${APP_ENDPOINT_ARRAY[1]}
else
    APP_HOST_NAME=0.0.0.0
    APP_PORT=8080
fi

LISTEN_ADDRESS=$APP_HOST_NAME:$APP_PORT

OTEL_EXPORTER_ENV_VARS_CONFIG=''

if [[ $OTEL_EXPORTER_OTLP_ENDPOINT ]]; then
    OTEL_EXPORTER_ENV_VARS_CONFIG="$OTEL_EXPORTER_ENV_VARS_CONFIG -e $OTEL_EXPORTER_OTLP_ENDPOINT"
fi


if [[ $OTEL_EXPORTER_OTLP_INSECURE ]]; then
    OTEL_EXPORTER_ENV_VARS_CONFIG="$OTEL_EXPORTER_ENV_VARS_CONFIG -e $OTEL_EXPORTER_OTLP_INSECURE"
fi

if [[ $OTEL_EXPORTER_OTLP_CERTIFICATE ]]; then
    OTEL_EXPORTER_ENV_VARS_CONFIG="$OTEL_EXPORTER_ENV_VARS_CONFIG -e $OTEL_EXPORTER_OTLP_CERTIFICATE"
fi

# Script Arguments Validation

# - App Platform
APP_PLATFORM="$1"
APP_PLATFORMS="flask"

if ! [[ $APP_PLATFORMS =~ (^|[[:space:]])"$APP_PLATFORM"($|[[:space:]]) ]]; then
    echo "<APP_PLATFORM> '$APP_PLATFORM' is not valid! Select from: $APP_PLATFORMS"
    exit -1
fi

# - Instrumentation Type
INSTRUMENTATION_TYPE="$2"
INSTRUMENTATION_TYPES="auto manual"

if ! [[ $INSTRUMENTATION_TYPES =~ (^|[[:space:]])"$INSTRUMENTATION_TYPE"($|[[:space:]]) ]]; then
    echo "<INSTRUMENTATION_TYPE> '$INSTRUMENTATION_TYPE' is not valid! Select from: $INSTRUMENTATION_TYPES"
    exit -1
fi

SCRIPT_PATH=$(dirname $0)
APP_PATH=$SCRIPT_PATH/$INSTRUMENTATION_TYPE-instrumentation/$APP_PLATFORM/

# AWS OTel Python Specific Commands

if [[ $INSTRUMENTATION_TYPE = 'manual' ]]; then
    if [ -d $APP_PATH/opentelemetry-python-core ]; then
        rm -rf $APP_PATH/opentelemetry-python-core
    fi
    git clone git@github.com:open-telemetry/opentelemetry-python.git $APP_PATH/opentelemetry-python-core

    if [ -d $APP_PATH/opentelemetry-python-contrib ]; then
        rm -rf $APP_PATH/opentelemetry-python-contrib
    fi
    git clone git@github.com:open-telemetry/opentelemetry-python-contrib.git $APP_PATH/opentelemetry-python-contrib
fi

# Build & Run Docker Image

IMAGE_NAME="aws-observability/$INSTRUMENTATION_TYPE-instrumentation/$APP_PLATFORM/sample-app"
CONTAINER_NAME="aws_otel_$INSTRUMENTATION_TYPE-$APP_PLATFORM-app"
OLD_IMAGE_IDS=$(docker images -q $IMAGE_NAME)

if [[ $OLD_IMAGE_IDS ]]; then
    docker rmi --force $OLD_IMAGE_IDS >/dev/null
    echo "Images with IDs $OLD_IMAGE_IDS removed."
fi

docker build --tag $IMAGE_NAME $APP_PATH

docker run $DOCKER_MOUNT_AWS_CREDS_OPTION \
    -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
    -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
    -e LISTEN_ADDRESS=$LISTEN_ADDRESS \
    $OTEL_EXPORTER_ENV_VARS_CONFIG \
    --publish $APP_PORT:$APP_PORT \
    --name $CONTAINER_NAME \
    $IMAGE_NAME &

# Cleanup

captureInterruptFunc() {
    echo
    echo "run_sample.sh: Interrupt detected, removing created docker containers."

    CONTAINER_IDS=$(docker ps --filter "name=$CONTAINER_NAME" --format "{{.ID}}")

    if [ $CONTAINER_IDS ]; then
        docker kill $CONTAINER_IDS >/dev/null 2>&1
        docker rm $CONTAINER_IDS >/dev/null 2>&1
        echo "Containers with IDs $CONTAINER_IDS removed."
    else
        echo "No Containers were removed."
    fi

    exit
}

# - Capture interrupt signal to do cleanup

trap "captureInterruptFunc" INT

# Wait for User Termination

echo "Started sample app ($INSTRUMENTATION_TYPE-instrumentation, $APP_PLATFORM)."
echo "Stop at anytime with ^C."
while :; do
    sleep 5
done
