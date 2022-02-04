import app from 'express';
import { CoffeeManagerController } from '../Controllers/CoffeeManager';
const router = app.Router();
const coffeeManagerController: CoffeeManagerController = new CoffeeManagerController();

router.get('/', (req, res, next) => {
    coffeeManagerController.getCoffee(req, res);
});

export default router
