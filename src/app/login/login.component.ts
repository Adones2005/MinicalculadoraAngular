import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() changeFormEvent = new EventEmitter<string>();

  changeForm(){
    this.changeFormEvent.emit();
  }
}
