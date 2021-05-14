FROM node:16

RUN apt-get install make

WORKDIR /usr/local/app

COPY ./dev ./dev
COPY ./src ./src
COPY ./package.json ./yarn.lock ./postcss.config.js ./Makefile ./tsconfig.json ./webpack.config.js ./

RUN yarn bootstrap
