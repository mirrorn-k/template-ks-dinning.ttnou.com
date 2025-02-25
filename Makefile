setup:
	docker compose run --rm app sh -c "npm install"
	docker compose build --no-cache
	docker compose run --rm app sh -c "npm run build"
	docker compose up

build:
	docker compose build
	docker compose run --rm app sh -c "npm run build"
	
build-no-cache:
	docker compose build --no-cache
	docker compose run --rm app sh -c "npm run build"
	
npm-start:
	docker compose build --no-cache
	docker compose run --rm app sh -c "npm run build"
	docker compose run --rm app sh -c "npm run start"
	
up:
	docker compose up

upd:
	docker compose up -d

down:
	docker compose down
	
re-start:
	docker compose down
	docker compose run --rm app sh -c "npm run build"
	docker compose up -d
	
login:
	docker compose exec app sh

install: 
	docker compose run --rm app sh -c "npm install"

npm-dev: 
	docker compose run --rm app sh -c "npm run dev"

npm-build: 
	docker compose run --rm app sh -c "npm run build"

git-all-push:
	git add -A
	git commit -m "make git-all-push"
	git push origin main
	
cache-clear:
	docker compose run --rm app sh -c "npm cache clean --force"
