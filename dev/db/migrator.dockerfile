FROM python:alpine3.12

RUN pip install yandex-pgmigrate

CMD ['pgmigrate']