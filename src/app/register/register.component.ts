import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected the plural form
})
export class RegisterComponent {

  @Output() changeFormEvent = new EventEmitter<string>();

  changeForm(){
    this.changeFormEvent.emit(); 
  }
}
