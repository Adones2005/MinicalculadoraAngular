import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CalcComponentComponent } from './calc-component/calc-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertDataBaseService } from './alert-data-base.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CalcComponentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertDataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
