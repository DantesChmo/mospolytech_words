FROM alpine AS build

WORKDIR /tmp

COPY . .

RUN apk update
RUN apk add bash
RUN apk add nodejs
RUN apk add npm
RUN apk add make

RUN npm i yarn -g
RUN yarn install
RUN yarn build

RUN npm install -g synp
RUN synp --source-file yarn.lock

FROM node:latest

WORKDIR /usr/local/app

COPY --from=build /tmp/out ./out
COPY --from=build /tmp/package.json .
COPY --from=build /tmp/package-lock.json .

RUN npm ci
RUN npm prune --production

EXPOSE 8080

ENTRYPOINT ["node","out/index.js"]
