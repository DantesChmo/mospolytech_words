FROM alpine AS build

WORKDIR /usr/local/app

COPY . .

RUN apk update
RUN apk add bash
RUN apk add nodejs
RUN apk add npm
RUN apk add make

RUN yarn install
RUN yarn build

ENTRYPOINT ["bash","entrypoint.prod.sh"]
