# Bootstrapping targets
.PHONY: bootstrap
bootstrap: bootstrap-dependencies

.PHONY: bootstrap-dependencies
bootstrap-dependencies:
	yarn
