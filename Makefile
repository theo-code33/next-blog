.PHONY: start
start:
	make start-db && npm run dev

.PHONY: start-db
start-db:
	docker-compose up -d && npx prisma migrate dev