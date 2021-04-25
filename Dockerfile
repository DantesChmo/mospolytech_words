FROM alpine

WORKDIR /usr/local/app

COPY ./out .

ENTRYPOINT ["bash","entrypoint.prod.sh"]
