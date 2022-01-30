import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainCoffeeService } from '../../services/main-coffee.service';

@Component({
  selector: 'app-main-coffee',
  templateUrl: './main-coffee.component.html',
  styleUrls: ['./main-coffee.component.scss']
})
export class MainCoffeeComponent implements OnInit {

  @Input() auxData: string;
  @Output() initMainCoffee = new EventEmitter();

  constructor(private mainCoffeeService: MainCoffeeService) { }

  ngOnInit(): void {
    console.log(this.mainCoffeeService.coffeeMakerName);
    console.log('Input auxData: ', this.auxData);
    this.initMainCoffee.emit(true);
  }

}
