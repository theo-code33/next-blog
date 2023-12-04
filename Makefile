.PHONY: start-db
start-db:
	docker-compose up -d && npx prisma migrate dev