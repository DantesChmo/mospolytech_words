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

# RUN npm install -g synp
# RUN synp --source-file yarn.lock

FROM node

WORKDIR /usr/local/app

COPY --from=build /tmp/out ./out
COPY --from=build /tmp/package.json .
COPY --from=build /tmp/yarn.lock .

ENV POSTGRES_CONNECTION_STRING=postgres://eybikokksvzhta:066d2de5dae93e302317a48c6ed9f9a30c3e7c830b7dcd2846576b9c230b640e@ec2-52-209-134-160.eu-west-1.compute.amazonaws.com:5432/d3l53ojbgm57lt

RUN yarn install --production --frozen-lockfile

ENTRYPOINT ["node","out/index.js"]
