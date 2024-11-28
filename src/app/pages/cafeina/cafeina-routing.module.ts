import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeinaPage } from './cafeina.page';

const routes: Routes = [
  {
    path: '',
    component: CafeinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeinaPageRoutingModule {}
