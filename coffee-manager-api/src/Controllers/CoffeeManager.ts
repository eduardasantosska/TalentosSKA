import { Response, Request, NextFunction } from 'express';

export class CoffeeManagerController {
    constructor(){}

    getCoffee(req: Request | any, res: Response) {
        res.send('Minha primeira rota!');
    }

    postCoffee(req: Request | any, res: Response) {
        const status = req.body.status;
        console.log(status);
        res.send('Status atualizado para: ' + status);
    }
}