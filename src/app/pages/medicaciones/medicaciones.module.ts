import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacionesPageRoutingModule } from './medicaciones-routing.module';

import { MedicacionesPage } from './medicaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacionesPageRoutingModule
  ],
  declarations: [MedicacionesPage]
})
export class MedicacionesPageModule {}
