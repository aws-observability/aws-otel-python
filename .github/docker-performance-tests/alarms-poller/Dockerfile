FROM python:3.9

COPY . .

RUN pip install docker boto3

CMD python ./poll-during-performance-tests.py --cpu-load-threshold $CPU_LOAD_THRESHOLD \
                                              --logs-namespace $LOGS_NAMESPACE \
                                              --metrics-period $HOSTMETRICS_INTERVAL_SECS \
                                              --num-of-cpus $NUM_OF_CPUS \
                                              --app-process-command-line-dimension-value "$APP_PROCESS_COMMAND_LINE_DIMENSION_VALUE" \
                                              --total-memory-threshold $TOTAL_MEMORY_THRESHOLD \
                                              --target-sha $TARGET_SHA \
                                              --github-run-id $GITHUB_RUN_ID \
                                              --image-suffix $IMAGE_SUFFIX
