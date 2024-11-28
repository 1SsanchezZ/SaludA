import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstaturaPageRoutingModule } from './estatura-routing.module';

import { EstaturaPage } from './estatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstaturaPageRoutingModule
  ],
  declarations: [EstaturaPage]
})
export class EstaturaPageModule {}
