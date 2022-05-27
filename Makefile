install:
	npm install

install-deps:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

test:
	npm test

publish:
	npm publish
