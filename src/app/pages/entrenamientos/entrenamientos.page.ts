import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.page.html',
  styleUrls: ['./entrenamientos.page.scss'],
})
export class EntrenamientosPage {
  exercises = [
    { name: 'Correr', duration: 30, calories: 300 },
    { name: 'Bicicleta', duration: 45, calories: 400 },
    { name: 'Yoga', duration: 60, calories: 200 },
    { name: 'Natación', duration: 30, calories: 350 },
  ];

  constructor(private alertCtrl: AlertController) {}

  async startWorkout() {
    const alert = await this.alertCtrl.create({
      header: 'Entrenamiento',
      message: '¿Deseas iniciar un entrenamiento?',
      buttons: ['Cancelar', 'Iniciar']
    });
    await alert.present();
  }
}
