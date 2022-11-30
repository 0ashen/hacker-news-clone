build-back:
	docker build . -t hackernewsbackimage -f DockerfileBack
run:
	docker run -d -i -p 80:3000 --rm --name hackernewsback hackernewsbackimage
run-dev:
	docker run -p 3000:3000 -v "/Users/iusfil/WebstormProjects/hacker-news-redesign/packages/sync-db-with-hn:/home/node/app" -v /home/node/app/node_modules --rm --name syncdbdev hacknewssyncimage
stop:
	docker stop syncdb && docker stop syncdbdev
