import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstaturaPage } from './estatura.page';

const routes: Routes = [
  {
    path: '',
    component: EstaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstaturaPageRoutingModule {}
