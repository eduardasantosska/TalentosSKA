import express from "express";
import cors from 'cors';
import appRouter from '../src/Routes'
import bodyParser from 'body-parser';
import sql from 'mssql';

const server = express();

server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(bodyParser.json({limit: '50mb'}));

server.use(cors({
    exposedHeaders: ['token']
}));

server.use('/', appRouter);
server.listen(8001);

const sqlConfig = {
    user: 'sa',
    password: 'ncssp',
    database: 'Aula6_SQL',
    server: 'localhost',
    trustServerCertificate: true
}

sql.connect(sqlConfig)
   .then((conn: any) => {
    console.log('Conectou!');
    sql.query(`select * from usuario`)
        .then((resultQuery) => {
            console.log(resultQuery);
        })
        .catch((err: any) => console.log('Erro consulta: ' + err));
    })
   .catch((err: any) => console.log('Erro conexão: ' + err));