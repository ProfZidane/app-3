import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerURL = 'http://localhost:3000/auth/register'
  constructor(private http: HttpClient) { }

  Register(data): Observable<any> {
    return this.http.post(this.registerURL, data);
  }
}
