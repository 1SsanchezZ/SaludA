import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importamos NavController

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage {
  especialidad: string = '';
  fecha: string = '';
  minDate: string;

  constructor(private navCtrl: NavController) {
    // Establecer la fecha mínima como hoy
    const today = new Date();
    this.minDate = today.toISOString();
  }

  agendarCita() {
    if (this.especialidad && this.fecha) {
      // Mostrar mensaje de éxito
      alert(`¡Cita agendada correctamente para ${this.especialidad} el ${this.fecha}!`);
      
      // Redirigir al inicio
      this.navCtrl.navigateBack('/inicio');  // Aquí usamos 'navigateBack' para ir al inicio
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}


