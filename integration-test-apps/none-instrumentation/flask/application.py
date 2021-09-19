# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# Baseline Performance Reference App

from create_flask_app import app, get_flask_app_run_args

if __name__ == "__main__":
    app.run(**get_flask_app_run_args())
