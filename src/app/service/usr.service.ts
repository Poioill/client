import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const USR_API = 'http://localhost:9999/api/usr';

@Injectable({
  providedIn: 'root'
})
export class UsrService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(USR_API + id);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(USR_API);
  }

  updateUser(usr: any): Observable<any> {
    return this.http.post(USR_API + 'update', usr);
  }
}
