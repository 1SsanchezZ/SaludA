import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = '';
  loginContrasena: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async validarcredenciales() {
    const correoGuardado = localStorage.getItem('correo');
    const contrasenaGuardada = localStorage.getItem('contrasena');

    if (this.loginUsuario === correoGuardado && this.loginContrasena === contrasenaGuardada) {
      this.router.navigate(['/inicio'], {
        state: {
          correo: this.loginUsuario,
          contrasena: this.loginContrasena
        }
      });
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo o contraseña incorrectas. Por favor, inténtalo de nuevo.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
  
  irARegistrate() {
    this.router.navigate(['/registrate']);
  }
}

