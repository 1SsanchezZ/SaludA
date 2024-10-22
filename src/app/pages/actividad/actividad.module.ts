import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActividadPage } from './actividad.page';
import { ActividadPageRoutingModule } from './actividad-routing.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadPageRoutingModule 
  ],
  declarations: [ActividadPage]
})
export class ActividadPageModule {}
