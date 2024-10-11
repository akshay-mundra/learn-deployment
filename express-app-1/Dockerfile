FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "index.js"] 