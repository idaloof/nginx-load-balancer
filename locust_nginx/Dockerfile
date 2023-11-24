FROM python:3.8

WORKDIR /usr/src/app

COPY locust-load.py ./

RUN pip install locust

CMD ["locust", "-f", "locust-load.py"]