FROM node:10-alpine as builder

WORKDIR /var/www/frontend

RUN chmod -R 755 /var/www/frontend

COPY . /var/www/frontend

RUN npm install

RUN npm run build
