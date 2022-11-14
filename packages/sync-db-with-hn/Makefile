build:
	docker build . -t hacknewssyncimage
run:
	docker run -d -p 80:3000 --env-file .env --rm --name syncdb hacknewssyncimage
run-dev:
	docker run -p 3000:3000 -v "/Users/iusfil/WebstormProjects/hacker-news-redesign/packages/sync-db-with-hn:/home/node/app" -v /home/node/app/node_modules --env-file .env --rm --name syncdbdev hacknewssyncimage
stop:
	docker stop syncdb && docker stop syncdbdev
