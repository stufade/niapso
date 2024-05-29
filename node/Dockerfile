FROM node:8

ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
