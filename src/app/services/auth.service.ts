import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginURL = 'http://localhost:3000/auth/login';
  findURL = 'http://localhost:3000/auth/find-user/';
  search = 'http://localhost:3000/medical/search';

  constructor(private http: HttpClient) { }
  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return headers;
  }

  Login(data): Observable<any> {
    return this.http.post(this.loginURL, data,{ headers: new HttpHeaders()});
  }

  LogUsers(data: any): Observable<any> {
    return this.http.post(this.loginURL, data, { headers: this.getHeaders() });
  }

  FindUser(id): Observable<any> {
    return this.http.get(this.findURL + id, { headers: this.getHeaders() });
  }

  Search(data): Observable<any> {
    return this.http.post(this.search, data, { headers: this.getHeaders() });
  }
}
