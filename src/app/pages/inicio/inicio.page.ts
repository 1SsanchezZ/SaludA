import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, Animation, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, AfterViewInit {

  loginUsuario: string = "";
  loginContrasena: string = "";

  @ViewChild('card', { read: ElementRef, static: true }) card!: ElementRef<HTMLIonCardElement>;

  private cardAnimation!: Animation;

  constructor(private animationCtrl: AnimationController, private navCtrl: NavController) {} 

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Animación para que el título "Resumen" se desplace lentamente de izquierda a derecha
    this.cardAnimation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement) // Referencia a la tarjeta (IonCard)
      .duration(5000) // Duración larga para que sea un movimiento lento
      .iterations(Infinity) // Se repetirá indefinidamente
      .fromTo('transform', 'translateX(-100%)', 'translateX(100%)') // Movimiento de izquierda a derecha completa
      .fromTo('opacity', '1', '1'); // Mantener la opacidad estable en 1
    this.cardAnimation.play(); // Iniciar la animación automáticamente
  }

  // Método para validar login
  validarLogin() {
    if (this.loginUsuario && this.loginContrasena) {
      // Lógica para validar el usuario y contraseña
      this.navCtrl.navigateForward('/actividad'); 
    } else {
      alert('Por favor, ingresa usuario y contraseña');
    }
  }
}
