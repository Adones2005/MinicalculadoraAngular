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

  sumar():void{
    this.result = this.num1 + this.num2;
  }

  resta():void{
    this.result = this.num1 - this.num2;
  }

  multiplicar():void{
    this.result = this.num1 * this.num2;
  }

  dividir():void{
    if (this.num2 != 0) {
      this.result = this.num1/this.num2;
    } else {
      alert("No se puede dividir por 0 ");
    }
    
  }




}
