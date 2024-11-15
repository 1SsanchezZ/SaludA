import { Component } from '@angular/core';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage {
  todayWaterIntake: number = 1.2; // en litros
  dailyGoal: number = 2; // en litros
  weeklyAverage: number = 1.5; // promedio semanal
  monthlyAverage: number = 1.4; // promedio mensual
  yearlyTotal: number = 500; // total anual en litros

  setReminder() {
    // Función para establecer recordatorios para beber agua
    alert("Recordatorio establecido.");
  }
}
