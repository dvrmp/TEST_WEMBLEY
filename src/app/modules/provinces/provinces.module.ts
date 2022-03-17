import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProvincesComponent } from './pages/list-provinces/list-provinces.component';
import { ProvincesRoutingModule } from './provinces.routing.module';
import { ComponentsModule } from '../kernel/components/components.module';
import { ListboxProvincesComponent } from './components/listbox-provinces/listbox-provinces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListProvincesComponent,
    ListboxProvincesComponent
  ],
  imports: [
    CommonModule,
    ProvincesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProvincesModule { }
