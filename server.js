import express from 'express';

const server = express();

server.use(express.static('./'));

server.listen(3032);