import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  @ViewChild('card', { read: ElementRef, static: true }) card!: ElementRef<HTMLIonCardElement>;
  
  /// Definir la variable loginUsuario para almacenar el correo
  loginUsuario: string = '';

  private cardAnimation!: Animation;
  router: any;

  constructor(private animationCtrl: AnimationController, private toastController: ToastController) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    /// Animación para que el título "RECUPERAR" se desplace lentamente de izquierda a derecha
    this.cardAnimation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(5000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(-100%)', 'translateX(100%)')
      .fromTo('opacity', '1', '1');
    this.cardAnimation.play();
  }

  /// Método para manejar el envío de instrucciones
  async enviarInstrucciones() {
    if (this.loginUsuario) {
      /// Si el correo está ingresado, mostrar un mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Se ha enviado información a tu correo.',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      await toast.present();
    } else {
      /// Y si no se ha ingresado el correo, mostrar una advertencia
      const toast = await this.toastController.create({
        message: 'Por favor, ingresa un correo electrónico.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }

  irAlogin() {
    this.router.navigate(['/login']);
  }
}
