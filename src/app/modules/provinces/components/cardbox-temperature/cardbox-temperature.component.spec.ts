import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboxTemperatureComponent } from './cardbox-temperature.component';

describe('CardboxTemperatureComponent', () => {
  let component: CardboxTemperatureComponent;
  let fixture: ComponentFixture<CardboxTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardboxTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboxTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
