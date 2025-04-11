import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: LoginRequest) {  //Se comunicará con una api rest
    console.log(credentials);
  }
}
