import { Response, Request, NextFunction } from 'express';

export class CoffeeManagerController {
    constructor(){}

    getCoffee(req: Request | any, res: Response) {
        res.send('Minha primeira rota!');
    }

    postCoffee(req: Request | any, res: Response) {
        const status = req.body.status;
        console.log(status);
        res.send('Status inserido: ' + status);
    }

    putCoffee(req: Request | any, res: Response) {
        const status = req.body.status;
        const index = req.params.id;
        console.log(status, index);
        res.send('Status atualizado para: ' + status);
    }

    deleteCoffee(req: Request | any, res: Response) {
        const index = req.params.id;
        console.log(index);
        res.send('Registro deletado com sucesso:' + index);
    }
}