import { Component, OnInit } from '@angular/core';
import { MainCoffeeService } from '../../services/main-coffee.service';

@Component({
  selector: 'app-main-coffee',
  templateUrl: './main-coffee.component.html',
  styleUrls: ['./main-coffee.component.scss']
})
export class MainCoffeeComponent implements OnInit {

  constructor(private mainCoffeeService: MainCoffeeService) { }

  ngOnInit(): void {
    console.log(this.mainCoffeeService.coffeeMakerName);
  }

}
