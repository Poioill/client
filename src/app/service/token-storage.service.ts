import {Injectable} from '@angular/core';

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // @ts-ignore
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(usr): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(usr));
  }

  public getUser(): any {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  logOut(): void{
    window.sessionStorage.clear();
    window.location.reload();
  }
}