import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corregido a 'styleUrls'
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAcnxTtfJgWEvBB4fPVf6_0MksbHYcjvU',
      authDomain: 'calculadora-f855d.firebaseapp.com',
    });
  }
}
