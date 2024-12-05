import { Component, EventEmitter, Output } from '@angular/core';
import { AlertDataBaseService } from '../alert-data-base.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor( private alertService: AlertDataBaseService){}

  @Output() changeFormEvent = new EventEmitter<string>();

  changeForm(){
    this.changeFormEvent.emit();
  }

  CreateAccount(): void {
    this.alertService.showAlert();
  }

  login (form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }
}
