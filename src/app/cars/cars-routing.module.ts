import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsPage } from './cars.page';

const routes: Routes = [
  {
    path: '',
    component: CarsPage
  },
  {
    path: 'create',
    loadChildren: () => import('./cars/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'car-edit',
    loadChildren: () => import('./cars/car-edit/car-edit.module').then( m => m.CarEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsPageRoutingModule {}
