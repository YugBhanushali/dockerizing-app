FROM node:18-alpine

COPY index.js /node-server/index.js
COPY package.json /node-server/package.json
COPY package-lock.json /node-server/package-lock.json

WORKDIR /node-server/
RUN npm install

CMD [ "node","index.js" ]