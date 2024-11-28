import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  num1:number=0;
  num2:number=0;
  result:number=0;
  calculado =false;

  sumar():void{
    this.result = this.num1 + this.num2;
    this.calculado=true;
  }

  resta():void{
    this.result = this.num1 - this.num2;
    this.calculado=true;
  }

  multiplicar():void{
    this.result = this.num1 * this.num2;
    this.calculado=true;
  }

  dividir():void{
    if (this.num2 != 0) {
      this.result = this.num1/this.num2;
      this.calculado=true;
    } else {
      alert("No se puede dividir por 0 ");
    }
    
  }




}
