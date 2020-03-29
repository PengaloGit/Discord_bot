FROM node:12

WORKDIR /usr/src/bot

COPY package*.json ./

RUN npm install
RUN npm i -g nodemon

COPY . .

CMD [ "nodemon", "app.js" ]