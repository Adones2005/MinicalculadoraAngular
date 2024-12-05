import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-component',
  standalone: false,
  templateUrl: './calc-component.component.html',
  styleUrl: './calc-component.component.css'
})
export class CalcComponentComponent {
  title = 'Mini Calculadora';
  num1:number=0;
  num2:number=0;
  result:number=0;
  registro:string ="";
  registros:String[] = [];
  calculado =false;

  sumar():void{
    this.result = this.num1 + this.num2;
    this.registro = (this.num1 + " + "+ this.num2 + " = " + this.result);
    this.registros.unshift(this.registro);
    this.calculado=true;
  }

  resta():void{
    this.result = this.num1 - this.num2;
    this.registro = (this.num1 + " - "+ this.num2 + " = " + this.result);
    this.registros.unshift(this.registro);
    this.calculado=true;
  }

  multiplicar():void{
    this.result = this.num1 * this.num2;
    this.registro = (this.num1 + " * "+ this.num2 + " = " + this.result);
    this.registros.unshift(this.registro);
    this.calculado=true;
  }

  dividir():void{
    if (this.num2 != 0) {
      this.result = this.num1/this.num2;
      this.registro = (this.num1 + " / "+ this.num2 + " = " + this.result);
      this.registros.unshift(this.registro);
      this.calculado=true;
    } else {
      alert("No se puede dividir por 0 ");
    }
    
  }

}