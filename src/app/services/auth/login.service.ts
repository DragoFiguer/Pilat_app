import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<any> {  //Se comunicará con una api rest, Regresa un valor Observable
    return this.http.get('././assets/data.json');
  }
}
