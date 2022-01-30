import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(public http: HttpClient) { }

  getIBGERegion(): any {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/regioes');
  }
}
