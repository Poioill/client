import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as http from "http";

const AUTH_API = 'http://localhost:9999/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(usr: any): Observable<any>{
    return this.http.post(AUTH_API + 'singin',{
      username: usr.username,
      password: usr.password
    });
  }
  public register(usr: any): Observable<any>{
    console.log(usr);
    return this.http.post(AUTH_API + 'signup',{
      email: usr.email,
      username: usr.username,
      firstname: usr.firstname,
      lastname: usr.lastname,
      password: usr.password,
      confirmPassword: usr.confirmPassword
    });
  }
}
