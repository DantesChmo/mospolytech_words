FROM python:3

RUN apt-get update
RUN apt-get install -y postgresql

RUN pip3 install yandex-pgmigrate

WORKDIR /usr/local/app
COPY ./dev ./dev
COPY ./Makefile ./

RUN chmod +x ./dev/db/wait-for.sh