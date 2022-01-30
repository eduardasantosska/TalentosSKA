import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoutesService } from '../../services/routes.service';
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

  constructor(private routesService: RoutesService) { }

  ngOnInit(): void {
    this.routesService.getIBGERegion().subscribe((result) => {
      console.log(result);
    });
  }

}
