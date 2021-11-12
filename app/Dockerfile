FROM node:10-alpine as builder

RUN npm install

WORKDIR /var/www/frontend
RUN chmod -R 755 /var/www/frontend
COPY ./build /var/www/frontend

RUN npm i -g serve
RUN serve -s build -l 3000

EXPOSE 3000

CMD ["npm", "run", "start"]
