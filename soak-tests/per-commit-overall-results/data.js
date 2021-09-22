window.BENCHMARK_DATA = {
  "lastUpdate": 1632287173780,
  "repoUrl": "https://github.com/aws-observability/aws-otel-python",
  "entries": {
    "Soak Test Results - sample-app-flask-none": [
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "10330dcb573509b76e53555c7b52e35f2d92bd8d",
          "message": "Updates to Soak Tests 2 (#24)\n\n* Fix performance tests not publishing to graph if `data.js` file does not exist\r\n* Make the `LISTEN_ADDRESS_PORT` configurable by the Soak Tests, not the whole `LISTEN_ADDRESS`\r\n* Add a comment to anticipate metrics `otlp` receiver (not available in Python yet)",
          "timestamp": "2021-09-21T19:17:59Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/10330dcb573509b76e53555c7b52e35f2d92bd8d"
        },
        "date": 1632287173388,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.49543103448276,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1362.783203125,
            "unit": "Megabytes"
          }
        ]
      }
    ]
  }
}