import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
})
export class EstadoPage {
  moods = [
    { name: 'Feliz', icon: 'happy-outline', color: 'success' },
    { name: 'Tranquilo', icon: 'sunny-outline', color: 'secondary' },
    { name: 'Triste', icon: 'sad-outline', color: 'tertiary' },
    { name: 'Enojado', icon: 'thunderstorm-outline', color: 'danger' },
  ];

  selectedMood: any = null;

  selectMood(mood: any) {
    this.selectedMood = mood;
  }
}
