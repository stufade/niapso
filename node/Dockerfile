FROM node:8

ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
