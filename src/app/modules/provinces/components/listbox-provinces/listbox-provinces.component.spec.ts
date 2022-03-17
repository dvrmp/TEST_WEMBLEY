import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxProvincesComponent } from './listbox-provinces.component';

describe('ListboxProvincesComponent', () => {
  let component: ListboxProvincesComponent;
  let fixture: ComponentFixture<ListboxProvincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListboxProvincesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboxProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
