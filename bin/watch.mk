# Watch targets

.PHONY: watch
watch:
	$(MAKE) -j watch-client watch-server

.PHONY: watch-client
watch-client:
	./node_modules/.bin/webpack

.PHONY: watch-server
watch-server:
	./node_modules/.bin/nodemon ./src/app/index.ts