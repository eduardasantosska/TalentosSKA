import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCoffeeComponent } from './main-coffee.component';

describe('MainCoffeeComponent', () => {
  let component: MainCoffeeComponent;
  let fixture: ComponentFixture<MainCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
