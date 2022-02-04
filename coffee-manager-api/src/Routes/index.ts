import app from 'express';
import { CoffeeMakerEventsController } from '../Controllers/CoffeeMakerEvents';
const router = app.Router();
const coffeeMakerEventsController: CoffeeMakerEventsController = new CoffeeMakerEventsController();

router.get('/coffeeMakerEvents', (req, res, next) => {
    coffeeMakerEventsController.getAllCoffeeMakerEvents(req, res);
});

router.post('/coffeeMakerEvents', (req, res, next) => {
    coffeeMakerEventsController.registerCoffeMakerEvent(req, res);
});

export default router
