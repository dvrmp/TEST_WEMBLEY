import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProvinceComponent } from './details-province.component';

describe('DetailsProvinceComponent', () => {
  let component: DetailsProvinceComponent;
  let fixture: ComponentFixture<DetailsProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
