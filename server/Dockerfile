FROM node:12

WORKDIR .

COPY package.json ./
COPY ./src ./src

RUN yarn install
RUN yarn build-ts

EXPOSE 3030
CMD [ "yarn", "start" ]
