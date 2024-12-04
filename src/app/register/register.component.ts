import { Component, EventEmitter, Output } from '@angular/core';
import { AlertDataBaseService } from '../alert-data-base.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {

  constructor(private alertService: AlertDataBaseService){}

  @Output() changeFormEvent = new EventEmitter<string>();

  changeForm(){
    this.changeFormEvent.emit(); 
  }

  CreateAccount(): void {
    this.alertService.showAlert();
  }
}
