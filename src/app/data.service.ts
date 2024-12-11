import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loginService } from "./login/login.service";

@Injectable()
export class DataService{
    constructor(private httpClient:HttpClient, loginService:loginService){}


    cargaRegistro(){
        return this.httpClient.get("https://calculadora-f855d-default-rtdb.europe-west1.firebasedatabase.app/registros.json");
    }
}