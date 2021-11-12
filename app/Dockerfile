FROM node:10-alpine as builder

RUN npm install

WORKDIR /frontend
COPY ./build /build
COPY ./node_modules /node_modules

RUN chmod -R 755 /frontend

RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "-s", "frontend/app/build", "-l", "3000"]
