import { Response, Request, NextFunction } from 'express';
import { CoffeeMakerEvents } from '../../../common/models/CoffeeMakerEvents';

export class CoffeeMakerEventsController {
    constructor(){}

    getAllCoffeeMakerEvents(req: Request | any, res: Response) {
        res.send('Retornar todos os eventos');
    }

    registerCoffeMakerEvent(req: Request | any, res: Response) {
        const event: CoffeeMakerEvents = req.body.event;
        console.log(event);
        res.send('Registro inserido: ' + event);
    }
}