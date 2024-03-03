FROM node:18-alpine


WORKDIR /react-app/

COPY package.json .
COPY . .

RUN npm install

RUN ls

CMD [ "npm","run","dev"]



