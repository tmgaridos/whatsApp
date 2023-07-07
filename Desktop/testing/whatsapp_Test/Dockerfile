FROM node:18-alpine 

WORKDIR /usr/src/app

COPY package*.json ./index.js /


RUN npm install

COPY . .

EXPOSE 9090

CMD [ "node", "index.js" ]
