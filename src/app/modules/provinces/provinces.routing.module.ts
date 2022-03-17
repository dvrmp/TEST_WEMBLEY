import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvincesComponent } from './pages/list-provinces/list-provinces.component';

const routes: Routes = [
    { path: '', redirectTo: 'listado', pathMatch: 'full'},
    { path: 'listado', component: ListProvincesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincesRoutingModule { }
