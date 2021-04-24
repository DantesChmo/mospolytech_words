FROM alpine:latest

RUN apk update
RUN apk add python3
RUN apk add pip3

RUN pip3 install yandex-pgmigrate