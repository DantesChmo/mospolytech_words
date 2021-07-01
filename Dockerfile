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

RUN npm ci
RUN yarn install --frozen-lockfile
RUN yarn prune --production

ENTRYPOINT ["node","out/index.js"]
