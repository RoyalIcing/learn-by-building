.PHONY:
new:
	npx create-react-app $(project) --use-npm --typescript

.PHONY:
start:
	cd $(project) && npm start
