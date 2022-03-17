import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'provincias', pathMatch: 'full' },
  { path: 'provincias', loadChildren: () => import('./modules/provinces/provinces.module').then(m => m.ProvincesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
