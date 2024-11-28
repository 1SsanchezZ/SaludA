import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
})
export class PesoPage {
  peso!: number;
  altura!: number;
  imc!: number;
  categoria!: string;

  calcularIMC() {
    if (this.peso && this.altura) {
      const alturaMetros = this.altura / 100;
      this.imc = this.peso / (alturaMetros * alturaMetros);
      this.categoria = this.getCategoriaIMC(this.imc);
    }
  }

  getCategoriaIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  }
}
