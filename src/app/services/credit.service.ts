import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private setUrl = 'http://localhost:3000/credit/set-credit';
  private getUrl = 'http://localhost:3000/credit/get-credit';
  private getCompteUrl = 'http://localhost:3000/credit/get-compte/';
  constructor(private http: HttpClient) { }

  getHeaders() {
    if (localStorage.getItem('userToken') !== null) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('auth-token', localStorage.getItem('userToken'));

      return headers;
    }
  }

  setCredit(data): Observable<any> {
    return this.http.post(this.setUrl, data, { headers: this.getHeaders() });
  }

  getCredit(id): Observable<any> {
    return this.http.get(this.getUrl + '/' + id, { headers: this.getHeaders() });
  }

  getCreditAdmin(): Observable<any> {
    return this.http.get(this.getUrl + '-admin', { headers: this.getHeaders() });
  }


  getCompte(id): Observable<any> {
    return this.http.get(this.getCompteUrl + id, { headers: this.getHeaders() });
  }
}
