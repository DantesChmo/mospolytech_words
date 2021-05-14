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
