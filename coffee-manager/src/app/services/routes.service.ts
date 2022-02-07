import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(public http: HttpClient) { }

  getCoffeeMakerEvents() {
    return this.http.get('http://localhost:8001/coffeeMakerEvents', {responseType: 'text'});
  }
}
