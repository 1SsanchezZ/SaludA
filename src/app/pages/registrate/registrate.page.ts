import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Para mostrar alertas

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage {

  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async registrarUsuario() {
    if (!this.nombre || !this.apellido || !this.telefono || !this.correo || !this.contrasena) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Todos los campos son obligatorios.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (!this.validarCorreo(this.correo)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, introduce un correo válido.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.contrasena.length < 6) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 6 caracteres.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Se guardan los datos en el localStorage
      localStorage.setItem('correo', this.correo);
      localStorage.setItem('contrasena', this.contrasena);

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Tu cuenta ha sido creada exitosamente.',
        buttons: ['OK']
      });
      await alert.present();

      // Te lleva al login después de registrarse
      this.router.navigate(['/login']);
    }
  }

  // Validación del formato del correo
  validarCorreo(correo: string): boolean {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(correo);
  }
}
