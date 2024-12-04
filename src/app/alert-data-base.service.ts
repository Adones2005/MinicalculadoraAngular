import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertDataBaseService {

  constructor() {}

  showAlert(): void {
    alert('No se puede activar el botón porque no hay base de datos.');
  }
}
