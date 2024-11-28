import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-medicaciones',
  templateUrl: './medicaciones.page.html',
  styleUrls: ['./medicaciones.page.scss'],
})
export class MedicacionesPage {
  constructor(private toastController: ToastController) {}

  async recommendMedication(condition: string) {
    let message = '';
    switch (condition) {
      case 'fiebre':
        message = 'Para la fiebre, puedes tomar Paracetamol 500mg.';
        break;
      case 'resfrio':
        message = 'Para el resfriado, te recomendamos Ibuprofeno 200mg.';
        break;
      case 'alergia':
        message = 'Para la alergia, puedes tomar Loratadina 10mg.';
        break;
      case 'dolorCabeza':
        message = 'Para el dolor de cabeza, toma Paracetamol 500mg o Ibuprofeno.';
        break;
      case 'dolorGarganta':
        message = 'Para el dolor de garganta, te sugerimos Ibuprofeno 200mg.';
        break;
      default:
        message = 'Consulta a tu médico para más detalles.';
        break;
    }

    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });

    toast.present();
  }
}
