import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: false,
  
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  @Input() registros: string[] = []; 

}