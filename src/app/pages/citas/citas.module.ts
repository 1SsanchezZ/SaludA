import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { IonicModule } from '@ionic/angular';
import { CitasPageRoutingModule } from './citas-routing.module';
import { CitasPage } from './citas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Agregar aquí
    IonicModule,
    CitasPageRoutingModule
  ],
  declarations: [CitasPage]
})
export class CitasPageModule {}
