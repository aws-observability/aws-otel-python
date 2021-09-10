---
title: Performance Threshold breached AFTER Soak Tests completed for the ({{ env.APP_PLATFORM }}, {{ env.INSTRUMENTATION_TYPE }}) Sample App
# assignees: open-telemetry/opentelemetry-<LANGUAGE>-approvers
labels: bug, enhancement
---
# Description

After the Soak Tests completed, a performance degradation was revealed for commit {{ sha }} of the `{{ ref }}` branch for the ({{ env.APP_PLATFORM }}, {{ env.INSTRUMENTATION_TYPE }}) Sample App. Check out the Action Logs from the `{{ workflow }}` [workflow run on GitHub]({{ env.GITHUB_SERVER_URL }}/{{ env.GITHUB_REPOSITORY }}/actions/runs/{{ env.GITHUB_RUN_ID }}) to view the threshold violation.

# Useful Links

Snapshots of the Soak Test run are available [on the gh-pages branch](https://github.com/NathanielRN/aws-otel-python-soaking-tests-demo/tree/gh-pages/soak-tests/snapshots). These are the snapshots for the violating commit:

![CPU Load Soak Test SnapShot Image](https://github.com/NathanielRN/aws-otel-python-soaking-tests-demo/blob/gh-pages/soak-tests/snapshots/{{ sha }}/{{ env.APP_PLATFORM }}-{{ env.INSTRUMENTATION_TYPE }}-cpu-load-soak-{{ env.GITHUB_RUN_ID }}.png?raw=true)
![Total Memory Soak Test SnapShot Image](https://github.com/NathanielRN/aws-otel-python-soaking-tests-demo/blob/gh-pages/soak-tests/snapshots/{{ sha }}/{{ env.APP_PLATFORM }}-{{ env.INSTRUMENTATION_TYPE }}-total-memory-soak-{{ env.GITHUB_RUN_ID }}.png?raw=true)

The threshold violation should also be noticeable on [our graph of Soak Test average results per commit](https://{{ payload.repository.owner.login }}.github.io/{{ payload.repository.name }}/soak-tests/per-commit-overall-results/index.html).
