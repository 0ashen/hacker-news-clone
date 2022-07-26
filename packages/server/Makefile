run:
	docker run -d -p 80:3000 --env-file .env --rm --name testnodecontainer testnode
run-dev:
	docker run -d -p 80:3000 -v "/Users/iusfil/WebstormProjects/hacker-news-redesign/packages/server:/home/node/app" -v /home/node/app/node_modules --env-file .env --rm --name testdevcont testdev
stop:
	docker stop testnode
