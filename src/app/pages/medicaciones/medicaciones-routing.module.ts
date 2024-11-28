import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicacionesPage } from './medicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MedicacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacionesPageRoutingModule {}
