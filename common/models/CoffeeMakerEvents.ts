import { CoffeeMakerAction_e } from "../enum";

export class CoffeeMakerEvents {
    coffeeMakerEventsId: number;
    action: CoffeeMakerAction_e;
    qtyCupsCoffee: number;
    timestamp: Date;

    constructor(action: CoffeeMakerAction_e, qtyCupsCoffee: number, coffeeMakerEventsId?: number,
        timestamp?: Date) {
        this.coffeeMakerEventsId = coffeeMakerEventsId || -1;
        this.action = action;
        this.qtyCupsCoffee = qtyCupsCoffee;
        this.timestamp = timestamp || new Date();
    }
}