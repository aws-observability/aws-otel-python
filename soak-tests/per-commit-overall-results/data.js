window.BENCHMARK_DATA = {
  "lastUpdate": 1632946260763,
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
      },
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
          "id": "653f11725c03366afda26004b7323dba1ac7deae",
          "message": "Do not publish snapshots on Soak Tests (#26)",
          "timestamp": "2021-09-22T10:44:46Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/653f11725c03366afda26004b7323dba1ac7deae"
        },
        "date": 1632341235706,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.6757183908046,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1210.4498697916667,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "352d98f86d7f82b7f6cd0152e09e2d24bf5c0c8f",
          "message": "Updates to Soak Tests 4 (#27)\n\n* More directories to separate performance snapshots\r\n* Set CPU Threshold to 75\r\n* Set Memory Threshold to 2.5 GiB",
          "timestamp": "2021-09-22T20:30:13Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/352d98f86d7f82b7f6cd0152e09e2d24bf5c0c8f"
        },
        "date": 1632427580499,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 71.886408045977,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1159.2579427083333,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "dc12d14a5f6f4538226e4cee2772b478b6edb18c",
          "message": "Edits for compatability with aws-otel-collector v13 (#31)",
          "timestamp": "2021-09-23T20:10:11Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/dc12d14a5f6f4538226e4cee2772b478b6edb18c"
        },
        "date": 1632513971781,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.38836206896552,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1254.946875,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "8073340af581a0cddd8dbec9dc17e4cdcd9ce9a5",
          "message": "Small edits to the Soak Tests (#32)\n\n* Delete oldest snapshots by commit SHA and by run ID\r\n\r\n* Use upstream create-an-issue because maintainer plans to release fix for repo values",
          "timestamp": "2021-09-28T17:48:37Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/8073340af581a0cddd8dbec9dc17e4cdcd9ce9a5"
        },
        "date": 1632859833353,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 71.26252976190476,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1205.0867456896551,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "4c365a07477e4bc9f0a0794358580a1a01e8880a",
          "message": "Fix gh-pages link for auto Soak Test links (#34)",
          "timestamp": "2021-09-29T03:28:34Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/4c365a07477e4bc9f0a0794358580a1a01e8880a"
        },
        "date": 1632946260347,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.92238095238096,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1207.295797413793,
            "unit": "Megabytes"
          }
        ]
      }
    ],
    "Soak Test Results - sample-app-flask-manual": [
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
        "date": 1632287202777,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.15068452380952,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1747.8286637931035,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "653f11725c03366afda26004b7323dba1ac7deae",
          "message": "Do not publish snapshots on Soak Tests (#26)",
          "timestamp": "2021-09-22T10:44:46Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/653f11725c03366afda26004b7323dba1ac7deae"
        },
        "date": 1632341225437,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.84551724137931,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1757.1515625,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "352d98f86d7f82b7f6cd0152e09e2d24bf5c0c8f",
          "message": "Updates to Soak Tests 4 (#27)\n\n* More directories to separate performance snapshots\r\n* Set CPU Threshold to 75\r\n* Set Memory Threshold to 2.5 GiB",
          "timestamp": "2021-09-22T20:30:13Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/352d98f86d7f82b7f6cd0152e09e2d24bf5c0c8f"
        },
        "date": 1632427666686,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.49803571428572,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1803.985452586207,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "dc12d14a5f6f4538226e4cee2772b478b6edb18c",
          "message": "Edits for compatability with aws-otel-collector v13 (#31)",
          "timestamp": "2021-09-23T20:10:11Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/dc12d14a5f6f4538226e4cee2772b478b6edb18c"
        },
        "date": 1632513998087,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.96392857142858,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1791.224676724138,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "8073340af581a0cddd8dbec9dc17e4cdcd9ce9a5",
          "message": "Small edits to the Soak Tests (#32)\n\n* Delete oldest snapshots by commit SHA and by run ID\r\n\r\n* Use upstream create-an-issue because maintainer plans to release fix for repo values",
          "timestamp": "2021-09-28T17:48:37Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/8073340af581a0cddd8dbec9dc17e4cdcd9ce9a5"
        },
        "date": 1632859837993,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.78130952380953,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1734.0747575431035,
            "unit": "Megabytes"
          }
        ]
      }
    ],
    "Soak Test Results - sample-app-flask-auto": [
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
          "id": "653f11725c03366afda26004b7323dba1ac7deae",
          "message": "Do not publish snapshots on Soak Tests (#26)",
          "timestamp": "2021-09-22T10:44:46Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/653f11725c03366afda26004b7323dba1ac7deae"
        },
        "date": 1632341273382,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.64169642857144,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 2031.3151939655172,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "352d98f86d7f82b7f6cd0152e09e2d24bf5c0c8f",
          "message": "Updates to Soak Tests 4 (#27)\n\n* More directories to separate performance snapshots\r\n* Set CPU Threshold to 75\r\n* Set Memory Threshold to 2.5 GiB",
          "timestamp": "2021-09-22T20:30:13Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/352d98f86d7f82b7f6cd0152e09e2d24bf5c0c8f"
        },
        "date": 1632427673511,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.34669642857142,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1812.212823275862,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "dc12d14a5f6f4538226e4cee2772b478b6edb18c",
          "message": "Edits for compatability with aws-otel-collector v13 (#31)",
          "timestamp": "2021-09-23T20:10:11Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/dc12d14a5f6f4538226e4cee2772b478b6edb18c"
        },
        "date": 1632514008866,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.95616071428572,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1900.1262122844828,
            "unit": "Megabytes"
          }
        ]
      },
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
          "id": "8073340af581a0cddd8dbec9dc17e4cdcd9ce9a5",
          "message": "Small edits to the Soak Tests (#32)\n\n* Delete oldest snapshots by commit SHA and by run ID\r\n\r\n* Use upstream create-an-issue because maintainer plans to release fix for repo values",
          "timestamp": "2021-09-28T17:48:37Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/8073340af581a0cddd8dbec9dc17e4cdcd9ce9a5"
        },
        "date": 1632859861167,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.24836206896552,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1769.852734375,
            "unit": "Megabytes"
          }
        ]
      }
    ]
  }
}