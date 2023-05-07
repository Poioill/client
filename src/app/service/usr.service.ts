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

  public getUserById(id: number): Observable<any> {
    return this.http.get(USR_API + id);
  }

  public getCurrentUser(): Observable<any> {
    return this.http.get(USR_API);
  }

  public updateUser(usr: any): Observable<any> {
    return this.http.post(USR_API + 'update', usr);
  }
}
