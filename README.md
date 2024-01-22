# Devzery - Auth Project

## An authentication service written in Django and React.

## Usage:
 - ### Backend
    -  Navigate to the backend folder and enter the following commands:
        ```shell
        # for conda
        conda create --name <env> --file requirements.txt

        # for pip
        python3 -m venv venv
        pip install -r requirements.txt
        ```

    - go to `backend/backend/settings.py`
        - under DATABASES, set password to your database
        - set the username for your database
        -under EMAIL_HOST_USER, set the email username.
        - under EMAIL_HOST_PASSWORD, set the app password for your email.
    - Then run `python3 manage.py runserver` to start the django backend.
    
 - Frontend
    - Navigate to the frontend directory and run the following commands:
        ```shell
        # to install dependencies
        yarn
        # to start the development server
        yarn dev
        ```