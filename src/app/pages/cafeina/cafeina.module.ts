import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeinaPageRoutingModule } from './cafeina-routing.module';

import { CafeinaPage } from './cafeina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafeinaPageRoutingModule
  ],
  declarations: [CafeinaPage]
})
export class CafeinaPageModule {}
