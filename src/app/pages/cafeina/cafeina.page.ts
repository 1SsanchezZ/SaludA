import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cafeina',
  templateUrl: './cafeina.page.html',
  styleUrls: ['./cafeina.page.scss'],
})
export class CafeinaPage {
  dailyCaffeine: number = 250; // cantidad diaria consumida en mg
  caffeineLimit: number = 400; // límite recomendado en mg

  constructor(private alertCtrl: AlertController) {}

  async setCaffeineReminder() {
    const alert = await this.alertCtrl.create({
      header: 'Recordatorio',
      message: 'Se ha establecido un recordatorio para limitar tu consumo de cafeína.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
