import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage {

  latitude: number | null = null;
  longitude: number | null = null;

  constructor(private toastController: ToastController) {}

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    } catch (error) {
      this.presentToast('Error al obtener la ubicación');
      console.error('Error getting location', error);
    }
  }

  async copyToClipboard() {
    if (this.latitude && this.longitude) {
      const coordinates = `Latitud: ${this.latitude}, Longitud: ${this.longitude}`;
      await Clipboard.write({
        string: coordinates
      });
      this.presentToast('Coordenadas copiadas al portapapeles');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}

