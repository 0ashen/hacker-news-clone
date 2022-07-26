FROM node:16-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node . .

RUN yarn

CMD [ "yarn", "start" ]
