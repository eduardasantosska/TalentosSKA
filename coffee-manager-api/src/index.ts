import express from "express";
import appRouter from '../src/Routes'
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(bodyParser.json({limit: '50mb'}));

server.use('/', appRouter);
server.listen(8001);