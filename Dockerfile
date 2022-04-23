FROM node:17
WORKDIR /usr/src/app
COPY . .
WORKDIR ./client
RUN npm install
RUN npm run build
WORKDIR ../server
RUN npm install
EXPOSE 3032
CMD [ "npm", "start" ]