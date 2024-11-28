import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sueno',
  templateUrl: './sueno.page.html',
  styleUrls: ['./sueno.page.scss'],
})
export class SuenoPage implements OnInit {

  sleepHours: number = 0;  // Definir sleepHours
  sleepTime: string = '';  // Definir sleepTime
  wakeUpTime: string = '';  // Definir wakeUpTime
  napDuration: number = 0;  // Definir napDuration
  napTime: string = '';  // Definir napTime

  constructor() { }

  ngOnInit() {
    // Cargar datos si es necesario
  }

  trackSleep() {
    // Lógica para registrar el sueño
    console.log('Sueño registrado');
  }

}
