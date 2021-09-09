FROM python:3.9

COPY . .

RUN pip install docker boto3

CMD python ./poll-during-performance-tests.py --metrics-period $HOSTMETRICS_INTERVAL_SECS \
                                              --num-of-cpus $NUM_OF_CPUS \
                                              --logs-namespace $LOGS_NAMESPACE \
                                              --process-command-line-dimension-value "$PROCESS_COMMAND_LINE_DIMENSION_VALUE" \
                                              --cpu-load-threshold $CPU_LOAD_THRESHOLD \
                                              --total-memory-threshold $TOTAL_MEMORY_THRESHOLD
