# Build targets

.PHONY: build
build: build-server build-client

.PHONY: build-server
build-server:
	./node_modules/.bin/tsc

.PHONY: build-client
build-client:
	./node_modules/.bin/webpack
