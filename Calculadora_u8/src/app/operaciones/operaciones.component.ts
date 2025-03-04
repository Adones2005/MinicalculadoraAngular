import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  imports: [],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  @Input() num1: number | null = null;
  @Input() num2: number | null = null;
  @Output() result = new EventEmitter<number>();
  @Output() calculado = new EventEmitter<boolean>();

  sumar() {
    if (this.num1 !== null && this.num2 !== null) {
      const res = this.num1 + this.num2;
      this.result.emit(res);
      this.calculado.emit(true);
    }
  }

  resta() {
    if (this.num1 !== null && this.num2 !== null) {
      const res = this.num1 - this.num2;
      this.result.emit(res);
      this.calculado.emit(true);
    }
  }

  multiplicar() {
    if (this.num1 !== null && this.num2 !== null) {
      const res = this.num1 * this.num2;
      this.result.emit(res);
      this.calculado.emit(true);
    }
  }

  dividir() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num2 !== 0) {
        const res = this.num1 / this.num2;
        this.result.emit(res);
        this.calculado.emit(true);
      } else {
        this.result.emit(NaN);
        this.calculado.emit(false);
      }
    }
  }
}