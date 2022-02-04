import { Component, OnInit } from '@angular/core';
import { CoffeeMakerAction_e, CoffeeStatus_e } from '../../../../../common/enum';
import { CoffeeMakerEvents } from '../../../../../common/models/CoffeeMakerEvents'
import { DialogService } from '../../services/dialog.service'; 
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-main-coffee',
  templateUrl: './main-coffee.component.html',
  styleUrls: ['./main-coffee.component.scss']
})
export class MainCoffeeComponent implements OnInit {

  // Variaveis referentes ao status da cafeteira
  coffeeMakerStatus: CoffeeStatus_e;
  coffeeMakerStatus_text: string;
  coffeeMakerStatus_color: string;
  coffeeTimer_ms: number = (5 * 1000);

  totalQtyCoffee: number = 0;
  actualQtyCoffee: number = 0;
  lastQtyCoffee: number = 0;
  coffeeMakerEventsList: CoffeeMakerEvents[] = [];

  constructor(private dialogService: DialogService, private routesService: RoutesService) { }

  /* ngOnInit
    Função de inicialização
    Chama a função de formatação do status, acionando por padrão para 'sem café'
    Não recebe nenhum parâmetro e não retorna nenhum dado
  */
  ngOnInit(): void {
    this.formatCoffeeStatus(CoffeeStatus_e.NoCoffee);
    new CoffeeMakerEvents(1, 1);
  }

  /* formatCoffeeStatus
    Função de formatação de status
    Seta o status na variavel global
    Seta o descritivo e a cor de acordo com o status
    Recebe a variavel coffeeStatus, que é do enum
    Não retorna nenhum dado
  */
  formatCoffeeStatus(coffeeStatus: CoffeeStatus_e): void {
    this.coffeeMakerStatus = coffeeStatus;
    this.coffeeMakerStatus_text = this.getStatusText(this.coffeeMakerStatus).toUpperCase();
    this.coffeeMakerStatus_color = this.getStatusColor(this.coffeeMakerStatus);
  }

  /* getStatusText
    Função de formatação do texto de acordo com status
    Faz um switch case de acordo com o status
    Recebe o status, que é um enum
    Retorna o texto correspondente
  */
  getStatusText(status: CoffeeStatus_e): string {
    switch(status) {
      case CoffeeStatus_e.AvailableCoffee:
        return 'Café disponível';
      case CoffeeStatus_e.NoCoffee:
        return 'Sem café';
      case CoffeeStatus_e.PassingCoffee:
        return 'Passando café';
    }
  }

  /* getStatusColor
    Função de formatação do texto de acordo com status
    Faz um switch case de acordo com o status
    Recebe o status, que é um enum
    Retorna o texto correspondente
  */
  getStatusColor(status: CoffeeStatus_e): string {
    switch(status) {
      case CoffeeStatus_e.AvailableCoffee:
        return '#86CE84';
      case CoffeeStatus_e.NoCoffee:
        return '#78909C';
      case CoffeeStatus_e.PassingCoffee:
        return '#FF6869';
    }
  }

  /* passCoffee
    Função chamada ao clicar em passar café
    Abre a dialog perguntando a quantidade de café
    Seta o status para café sendo passado
    Aciona o timer referente ao café
    Insere o registro no histórico
    Atualiza quantidade de café total e café disponivel
    Ao finalizar, atualiza para café disponível
    Não retorna nenhum dado
  */
  passCoffee(): void {
    this.routesService.getCoffeeMakerEvents()
    .subscribe((result) => {
      console.log(result);
    });
    // this.dialogService.openDialog().then((qty) => {
    //   this.formatCoffeeStatus(CoffeeStatus_e.PassingCoffee);
    //   setTimeout(() => {
    //     this.registerCoffeeMakerEvent(CoffeeMakerAction_e.PassingCoffee, +qty);
    //     this.totalQtyCoffee = +qty;
    //     this.actualQtyCoffee = +qty;
    //     this.formatCoffeeStatus(CoffeeStatus_e.AvailableCoffee);
    //   }, this.coffeeTimer_ms);
    // });
  }

  /* registerCoffeeMakerEvent
    Função para registrar os eventos da cafeteira
    Recebe a ação (que é enum) e a quantidade (numero)
    Insere na lista de historico da cafeteira
    Não retorna dados
  */
  registerCoffeeMakerEvent(action: CoffeeMakerAction_e, qty: number): void {
    this.coffeeMakerEventsList
    .push(new CoffeeMakerEvents(action, qty));
  }
}
