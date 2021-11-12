FROM node:10-alpine as builder

RUN npm install

WORKDIR /var/www/frontend
RUN chmod -R 755 /var/www/frontend
COPY ./build /var/www/frontend

RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
