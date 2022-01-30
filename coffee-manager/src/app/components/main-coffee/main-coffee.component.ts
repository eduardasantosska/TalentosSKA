import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainCoffeeService } from '../../services/main-coffee.service';
import { Events_e } from '../../../../../common/enum';

@Component({
  selector: 'app-main-coffee',
  templateUrl: './main-coffee.component.html',
  styleUrls: ['./main-coffee.component.scss']
})
export class MainCoffeeComponent implements OnInit {

  @Input() auxData: string;
  @Output() initMainCoffee = new EventEmitter();

  status: number;

  constructor(private mainCoffeeService: MainCoffeeService) { }

  ngOnInit(): void {
    // Evitar as comparações com string
    // if (this.status == 'Produção') {
      // Algo acontece
    // }

    // Mas também deixar claro o que o status representa
    if (this.status == Events_e.Producao) {
      // Isso seria igual a this.status == 0
    }
  }

}
