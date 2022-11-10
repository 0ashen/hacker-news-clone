build:
	docker build . -t hnbi
run:
	docker run -d -p 80:3000 --env-file .env --rm --name hackernewsbackendcontainer hnbi
run-dev:
	docker run -d -p 3000:3000 -v "/Users/iusfil/WebstormProjects/hacker-news-redesign/packages/server:/home/node/app" -v /home/node/app/node_modules --env-file .env --rm --name hackernewsbackendcontainerdev hnbi
stop:
	docker stop hackernewsbackendcontainer && docker stop hackernewsbackendcontainerdev
