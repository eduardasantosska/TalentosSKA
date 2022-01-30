import { TestBed } from '@angular/core/testing';

import { MainCoffeeService } from './main-coffee.service';

describe('MainCoffeeService', () => {
  let service: MainCoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
