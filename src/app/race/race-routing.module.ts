import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacePage } from './race.page';

const routes: Routes = [
  {
    path: '',
    component: RacePage
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacePageRoutingModule {}
