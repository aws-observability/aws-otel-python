window.BENCHMARK_DATA = {
  "lastUpdate": 1644351094048,
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
          "id": "3d0cccd0aac2b8aa3c425b650f480e099cb023e3",
          "message": "Fix broken links in the README (#35)",
          "timestamp": "2021-10-08T20:25:17Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/3d0cccd0aac2b8aa3c425b650f480e099cb023e3"
        },
        "date": 1633809997251,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.00657738095238,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1284.9185075431035,
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
          "id": "f7374acf02756253467af2fdefe9b17b54ef077e",
          "message": "Increase points to alarm for memory usage poll (#36)",
          "timestamp": "2021-10-11T02:51:33Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/f7374acf02756253467af2fdefe9b17b54ef077e"
        },
        "date": 1633982755693,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.81163690476191,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1213.9490840517242,
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
          "id": "98e92fa128e29709b4f13156427ebe924b04d4b9",
          "message": "Fix X-Ray propagators import in manual app (#39)",
          "timestamp": "2021-10-12T23:31:24Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/98e92fa128e29709b4f13156427ebe924b04d4b9"
        },
        "date": 1634155842792,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.89300595238095,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1220.49609375,
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
          "id": "1ff73d15374f16793ed91c0cbc8ec209d05b87a3",
          "message": "Update auto integ test app for new propagator pkg (#40)",
          "timestamp": "2021-10-15T04:24:56Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/1ff73d15374f16793ed91c0cbc8ec209d05b87a3"
        },
        "date": 1634328370313,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.98068965517243,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1207.856640625,
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
          "id": "01c4956bf58b6dcb5207fd1506f914029fa3027a",
          "message": "Update manual app because OTel SDK no dep on OTel instrumentation pkg (#41)",
          "timestamp": "2021-10-18T17:27:24Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/01c4956bf58b6dcb5207fd1506f914029fa3027a"
        },
        "date": 1634674047943,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.86306547619047,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1205.4427532327586,
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
          "id": "3e4d43fe6d16ebd3f790fd60e29c1bb03cea219e",
          "message": "Use upstream benchmark action + update issues when names match (#42)",
          "timestamp": "2021-11-02T17:16:14Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/3e4d43fe6d16ebd3f790fd60e29c1bb03cea219e"
        },
        "date": 1635970253310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 71.74979166666667,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1161.65625,
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
          "id": "e872febdfa0c476d3710060ae3c6501c71754d44",
          "message": "GitHub OIDC token for AWS Creds in all workflows (#48)",
          "timestamp": "2021-12-22T02:37:16Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/e872febdfa0c476d3710060ae3c6501c71754d44"
        },
        "date": 1640203576509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 72.23163793103448,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1206.88359375,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "nathanielruiz98@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b2199839010c1e1be867b689e3e3f58f6826e8e0",
          "message": "Better Soak Test Naming and Env Variables (#50)",
          "timestamp": "2022-02-07T19:49:12Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/b2199839010c1e1be867b689e3e3f58f6826e8e0"
        },
        "date": 1644351093289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 71.58202380952382,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1186.2241379310344,
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
        "date": 1632946280655,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.09985632183908,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1832.0971354166666,
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
          "id": "3d0cccd0aac2b8aa3c425b650f480e099cb023e3",
          "message": "Fix broken links in the README (#35)",
          "timestamp": "2021-10-08T20:25:17Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/3d0cccd0aac2b8aa3c425b650f480e099cb023e3"
        },
        "date": 1633810020431,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.36729166666666,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1719.4256465517242,
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
          "id": "f7374acf02756253467af2fdefe9b17b54ef077e",
          "message": "Increase points to alarm for memory usage poll (#36)",
          "timestamp": "2021-10-11T02:51:33Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/f7374acf02756253467af2fdefe9b17b54ef077e"
        },
        "date": 1633982771213,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.22330459770116,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1720.8391927083333,
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
          "id": "98e92fa128e29709b4f13156427ebe924b04d4b9",
          "message": "Fix X-Ray propagators import in manual app (#39)",
          "timestamp": "2021-10-12T23:31:24Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/98e92fa128e29709b4f13156427ebe924b04d4b9"
        },
        "date": 1634155853181,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.98327380952381,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1690.2394935344828,
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
          "id": "01c4956bf58b6dcb5207fd1506f914029fa3027a",
          "message": "Update manual app because OTel SDK no dep on OTel instrumentation pkg (#41)",
          "timestamp": "2021-10-18T17:27:24Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/01c4956bf58b6dcb5207fd1506f914029fa3027a"
        },
        "date": 1634674277691,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.8271551724138,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1784.763671875,
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
          "id": "3e4d43fe6d16ebd3f790fd60e29c1bb03cea219e",
          "message": "Use upstream benchmark action + update issues when names match (#42)",
          "timestamp": "2021-11-02T17:16:14Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/3e4d43fe6d16ebd3f790fd60e29c1bb03cea219e"
        },
        "date": 1635970280810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 71.41836206896552,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1796.813671875,
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
          "id": "e872febdfa0c476d3710060ae3c6501c71754d44",
          "message": "GitHub OIDC token for AWS Creds in all workflows (#48)",
          "timestamp": "2021-12-22T02:37:16Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/e872febdfa0c476d3710060ae3c6501c71754d44"
        },
        "date": 1640203583862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.359375,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1730.479525862069,
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
        "date": 1632946297407,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.319375,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1767.7855603448277,
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
          "id": "3d0cccd0aac2b8aa3c425b650f480e099cb023e3",
          "message": "Fix broken links in the README (#35)",
          "timestamp": "2021-10-08T20:25:17Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/3d0cccd0aac2b8aa3c425b650f480e099cb023e3"
        },
        "date": 1633896363303,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 68.40364942528736,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1697.4307291666667,
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
          "id": "f7374acf02756253467af2fdefe9b17b54ef077e",
          "message": "Increase points to alarm for memory usage poll (#36)",
          "timestamp": "2021-10-11T02:51:33Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/f7374acf02756253467af2fdefe9b17b54ef077e"
        },
        "date": 1633982776333,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.638908045977,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1923.4424479166667,
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
          "id": "98e92fa128e29709b4f13156427ebe924b04d4b9",
          "message": "Fix X-Ray propagators import in manual app (#39)",
          "timestamp": "2021-10-12T23:31:24Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/98e92fa128e29709b4f13156427ebe924b04d4b9"
        },
        "date": 1634155852183,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.11342261904763,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1691.0467403017242,
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
          "id": "1ff73d15374f16793ed91c0cbc8ec209d05b87a3",
          "message": "Update auto integ test app for new propagator pkg (#40)",
          "timestamp": "2021-10-15T04:24:56Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/1ff73d15374f16793ed91c0cbc8ec209d05b87a3"
        },
        "date": 1634328373802,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.05333333333334,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1194.8641927083333,
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
          "id": "01c4956bf58b6dcb5207fd1506f914029fa3027a",
          "message": "Update manual app because OTel SDK no dep on OTel instrumentation pkg (#41)",
          "timestamp": "2021-10-18T17:27:24Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/01c4956bf58b6dcb5207fd1506f914029fa3027a"
        },
        "date": 1634760664318,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.84083333333334,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1817.7075520833334,
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
          "id": "3e4d43fe6d16ebd3f790fd60e29c1bb03cea219e",
          "message": "Use upstream benchmark action + update issues when names match (#42)",
          "timestamp": "2021-11-02T17:16:14Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/3e4d43fe6d16ebd3f790fd60e29c1bb03cea219e"
        },
        "date": 1635970282562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 70.25431034482759,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1878.3119791666666,
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
          "id": "e872febdfa0c476d3710060ae3c6501c71754d44",
          "message": "GitHub OIDC token for AWS Creds in all workflows (#48)",
          "timestamp": "2021-12-22T02:37:16Z",
          "url": "https://github.com/aws-observability/aws-otel-python/commit/e872febdfa0c476d3710060ae3c6501c71754d44"
        },
        "date": 1640203585752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 69.63190476190476,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 1706.0824353448277,
            "unit": "Megabytes"
          }
        ]
      }
    ]
  }
}