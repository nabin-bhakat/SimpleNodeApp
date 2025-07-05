FROM node

WORKDIR /NodeApp

COPY . .

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]