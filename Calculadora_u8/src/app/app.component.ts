import { Component } from '@angular/core';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [OperacionesComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number = 0;
  calculado: boolean = false;
  
  manejarResultado(resultado: number) {
    this.result = resultado;
  }

  manejarCalculado(calculado: boolean) {
    this.calculado = calculado;
  }
}


