import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.page.html',
  styleUrls: ['./ciclo.page.scss'],
})
export class CicloPage {
  cycleLength: number = 28; // Duración promedio del ciclo en días
  periodLength: number = 5; // Duración promedio de la menstruación
  daysToNextPeriod: number = 10; // Días restantes para la siguiente menstruación
  fertileDays: string = 'Día 12 a Día 16'; // Días fértiles aproximados

  setReminder() {
    // Función para establecer recordatorios
    alert("Recordatorio del ciclo establecido.");
  }
}
