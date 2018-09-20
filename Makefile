install: install-deps

start:
	npx nodemon --exec npx babel-node server/bin/weather.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

test-watch:
	npm test -- --watchAll

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
