import express from 'express';

const server = express();

server.use(express.static('../client/build'));
server.use(express.static('../client/public'));

server.get('/api/v1/ping', (request, response, next) => {
    response.send("NUTS")
})

server.listen(process.env.PORT ?? 8080);