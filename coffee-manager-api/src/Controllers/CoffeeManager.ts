import { Response, Request, NextFunction } from 'express';

export class CoffeeManagerController {
    constructor(){}

    getCoffee(req: Request | any, res: Response) {
        res.send('Minha primeira rota!');
    }
}