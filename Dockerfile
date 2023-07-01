FROM node:16.13

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

COPY . .

EXPOSE 3333

CMD ["yarn", "start:dev"]
