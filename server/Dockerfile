FROM node:latest

WORKDIR /server/app

COPY app/package*.json .

RUN npm install

CMD ["npm", "start"]