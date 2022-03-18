import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProvinceComponent } from './pages/details-province/details-province.component';
import { ListProvincesComponent } from './pages/list-provinces/list-provinces.component';

const routes: Routes = [
    { path: '', redirectTo: 'listado', pathMatch: 'full'},
    { path: 'listado', component: ListProvincesComponent },
    { path: 'detalles/:codpro', component: DetailsProvinceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincesRoutingModule { }
