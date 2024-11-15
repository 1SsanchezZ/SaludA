import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AguaPageRoutingModule } from './agua-routing.module';

import { AguaPage } from './agua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AguaPageRoutingModule
  ],
  declarations: [AguaPage]
})
export class AguaPageModule {}
