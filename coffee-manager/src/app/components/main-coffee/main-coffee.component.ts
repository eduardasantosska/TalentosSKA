import { Component, OnInit } from '@angular/core';
import { CoffeeStatus_e } from '../../../../../common/enum';
@Component({
  selector: 'app-main-coffee',
  templateUrl: './main-coffee.component.html',
  styleUrls: ['./main-coffee.component.scss']
})
export class MainCoffeeComponent implements OnInit {

  coffeeMakerStatus: CoffeeStatus_e = CoffeeStatus_e.NoCoffee;
  coffeeMakerStatus_text: string;
  coffeeMakerStatus_color: string;
  coffeeTimer_ms: number = (5 * 1000);

  constructor() { }

  ngOnInit(): void {
    this.formatCoffeeStatus();
  }

  formatCoffeeStatus() {
    this.coffeeMakerStatus_text = this.getStatusText(this.coffeeMakerStatus).toUpperCase();
    this.coffeeMakerStatus_color = this.getStatusColor(this.coffeeMakerStatus);
  }

  getStatusText(status: CoffeeStatus_e) {
    switch(status) {
      case CoffeeStatus_e.AvailableCoffee:
        return 'Café disponível';
      case CoffeeStatus_e.NoCoffee:
        return 'Sem café';
      case CoffeeStatus_e.PassingCoffee:
        return 'Passando café';
    }
  }

  getStatusColor(status: CoffeeStatus_e) {
    switch(status) {
      case CoffeeStatus_e.AvailableCoffee:
        return '#86CE84';
      case CoffeeStatus_e.NoCoffee:
        return '#78909C';
      case CoffeeStatus_e.PassingCoffee:
        return '#FF6869';
    }
  }

  passCoffee() {
    this.coffeeMakerStatus = CoffeeStatus_e.PassingCoffee;
    this.formatCoffeeStatus();
    setTimeout(() => {
      this.coffeeMakerStatus = CoffeeStatus_e.AvailableCoffee;
      this.formatCoffeeStatus();
    }, this.coffeeTimer_ms);
  }
}
