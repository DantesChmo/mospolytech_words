.PHONY: db_dump
db_dump:
	pg_dump

.PHONY: db_restore
db_restore:
	pg_restore

.PHONY: migrate
migrate:
	pgmigrate migrate \
		-d ./dev/db \
		-t latest \
		-c "dbname=$$POSTGRES_DB host=$$POSTGRES_HOST password=$$POSTGRES_PASSWORD user=$$POSTGRES_USER port=$$POSTGRES_PORT" &&\
		echo "SUCCESSFUL MIGRATING"

.PHONY: migrate_staging
migrate_staging:
	POSTGRES_DB=d3l53ojbgm57lt \
	POSTGRES_HOST=ec2-52-209-134-160.eu-west-1.compute.amazonaws.com \
	POSTGRES_PASSWORD=066d2de5dae93e302317a48c6ed9f9a30c3e7c830b7dcd2846576b9c230b640e \
	POSTGRES_USER=eybikokksvzhta \
	POSTGRES_PORT=5432 \
		make migrate