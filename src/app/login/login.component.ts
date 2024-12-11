import { Component, EventEmitter, Output } from '@angular/core';
import { AlertDataBaseService } from '../alert-data-base.service';
import { loginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  constructor( private alertService: AlertDataBaseService ,private loginService: loginService ){}

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

    this.loginService.login(email, password) }
}
