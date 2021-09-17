---
title: Performance Threshold breached DURING Soak Tests execution on {{ date | date('dddd, MMMM Do') }}
# assignees: open-telemetry/opentelemetry-<LANGUAGE>-approvers
labels: bug, enhancement
---
# Description

During Soak Tests execution, a performance degradation was revealed for commit {{ sha }} of the `{{ ref }}` branch. Check out the Action Logs from the `{{ workflow }}` [workflow run on GitHub]({{ env.GITHUB_SERVER_URL }}/{{ env.GITHUB_REPOSITORY }}/actions/runs/{{ env.GITHUB_RUN_ID }}) to view the threshold violation.

# Useful Links

Snapshots of the Soak Test run are available [on the gh-pages branch](https://github.com/NathanielRN/aws-otel-python-soaking-tests-demo/tree/gh-pages/soak-tests/snapshots). These are the snapshots for the violating commit:

![CPU Load Soak Test SnapShot Image](https://github.com/NathanielRN/aws-otel-python-soaking-tests-demo/blob/gh-pages/soak-tests/snapshots/{{ sha }}/flask-auto-cpu-load-results-{{ env.GITHUB_RUN_ID }}.png?raw=true)
![Total Memory Soak Test SnapShot Image](https://github.com/NathanielRN/aws-otel-python-soaking-tests-demo/blob/gh-pages/soak-tests/snapshots/{{ sha }}/flask-auto-total-memory-results-{{ env.GITHUB_RUN_ID }}.png?raw=true)
