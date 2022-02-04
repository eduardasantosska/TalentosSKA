import express from "express";
import appRouter from '../src/Routes'

const server = express();

server.use('/', appRouter);
server.listen(8001);