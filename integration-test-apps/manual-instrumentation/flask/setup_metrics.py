# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

import logging
import os

from opentelemetry import metrics
from opentelemetry.exporter.otlp.metrics_exporter import OTLPMetricsExporter
from opentelemetry.sdk.metrics import MeterProvider

logger = logging.getLogger(__name__)

# Setup Global Metric Provider

# Sets up the Global MeterProvider instance
# TODO: Once https://github.com/open-telemetry/opentelemetry-python/issues/1444
# is resolved, move this line to only exist in `manual-instrumentation` apps.
metrics.set_meter_provider(MeterProvider())

meter = metrics.get_meter("aws-otel", "1.0")

# Setup Metric Components

latencyMetricName = "latency"
apiBytesSentMetricName = "apiBytesSent"
totalApiBytesSentMetricName = "totalApiBytesSent"
lastLatencyMetricName = "lastLatency"
queueSizeChangeMetricName = "queueSizeChange"
actualQueueSizeMetricName = "actualQueueSize"

if "INSTANCE_ID" in os.environ:
    instanceId = os.environ["INSTANCE_ID"]
    if not instanceId.strip() == "":
        latencyMetricName += "_" + instanceId
        apiBytesSentMetricName += "_" + instanceId
        totalApiBytesSentMetricName += "_" + instanceId
        lastLatencyMetricName += "_" + instanceId
        queueSizeChangeMetricName += "_" + instanceId
        actualQueueSizeMetricName += "_" + instanceId

apiBytesSentCounter = meter.create_counter(
    apiBytesSentMetricName, "API request load sent in bytes", "one", int
)

apiLatencyRecorder = meter.create_histogram(
    latencyMetricName, "API latency time", "ms", int
)

apiqueueSizeChangeMetric = meter.create_up_down_counter(
    queueSizeChangeMetricName, "Queue Size change", "one", int
)

apitotalApiBytesSentMetric = meter.create_observable_gauge(
    totalApiBytesSentMetricName, "Total API request load sent in bytes", "one", int
)

apilastLatencyMetric = meter.create_observable_gauge(
    lastLatencyMetricName, "The last API latency observed at collection interval", "ms", int
)

apiactualQueueSizeMetric = meter.create_observable_gauge(
    actualQueueSizeMetricName, "The actual queue size observed at collection interval", "one", int
)
# Start Metric Pipeline

# Exporter to export metrics to the console
exporter = OTLPMetricsExporter()

# start_pipeline will notify the MeterProvider to begin collecting/exporting
# metrics with the given meter, exporter and interval in seconds
# TODO: Auto-Instrumentation will instantiate the MeterProvider before this
# file has a chance to instantiate it. Once https://github.com/open-telemetry/opentelemetry-python/issues/1444
# is resolved, this try except block can be removed.
try:
    metrics.get_meter_provider().start_pipeline(meter, exporter, 5)
except:
    logger.warning("Metrics Pipeline was not started.")
    pass
