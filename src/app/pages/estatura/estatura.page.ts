import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatura',
  templateUrl: './estatura.page.html',
  styleUrls: ['./estatura.page.scss'],
})
export class EstaturaPage {
  estatura!: number;
  ultimaEstatura: number = 170; // Ejemplo de estatura previamente registrada
  maxEstatura: number = 180;
  minEstatura: number = 160;
  promedioEstatura: number = 170;
  diferenciaEstatura!: number;

  registrarEstatura() {
    if (this.estatura) {
      this.diferenciaEstatura = this.estatura - this.ultimaEstatura;
      this.ultimaEstatura = this.estatura;
      
      // Aquí puedes agregar la lógica para actualizar los valores de las estadísticas,
      // como el promedio, la estatura máxima y mínima.
      this.actualizarEstadisticas();
    }
  }

  actualizarEstadisticas() {
    // Lógica para calcular el promedio, estatura máxima y mínima según los registros
    const estaturas = [this.ultimaEstatura, this.maxEstatura, this.minEstatura];
    this.maxEstatura = Math.max(...estaturas);
    this.minEstatura = Math.min(...estaturas);
    this.promedioEstatura = estaturas.reduce((acc, val) => acc + val, 0) / estaturas.length;
  }
}
