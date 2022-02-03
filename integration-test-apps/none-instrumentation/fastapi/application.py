# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# Baseline Performance Reference App

import uvicorn

from create_fastapi_app import get_fastapi_app_run_args

if __name__ =='__main__':
    uvicorn.run('create_fastapi_app:app', **get_fastapi_app_run_args())