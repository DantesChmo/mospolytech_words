# Clean targets
.PHONY: clean
clean: clean-dir clean-deps

.PHONY: clean-dir
clean-dir:
	rm -rf ./out

.PHONY: clean-deps
clean-deps:
	rm -rf ./node_modules