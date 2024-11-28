import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.page.html',
  styleUrls: ['./pasos.page.scss'],
})
export class PasosPage {
  todaySteps: number = 8000; // Número de pasos de hoy
  weeklySteps: number = 50000; // Promedio de pasos semanal
  monthlySteps: number = 200000; // Total de pasos mensual

  setReminder() {
    // Función para establecer recordatorios
    alert("Recordatorio de pasos establecido.");
  }
}
