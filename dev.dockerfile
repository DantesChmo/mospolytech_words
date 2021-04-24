FROM alpine:latest

RUN apk update
RUN apk add bash
RUN apk add nodejs
RUN apk add npm
RUN apk add make

WORKDIR /usr/local/app

COPY ./src ./src
COPY ./bin ./bin
COPY ./package.json ./package-lock.json ./yarn.lock ./postcss.config.js ./Makefile ./tsconfig.json ./webpack.config.js ./

RUN npm i yarn -g
RUN yarn bootstrap
