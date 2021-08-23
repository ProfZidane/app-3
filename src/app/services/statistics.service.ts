import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  allURL = 'http://localhost:3000/meal/get-all';
  oneURL = 'http://localhost:3000/meal/get-morning';
  twoURL = 'http://localhost:3000/meal/get-night';
  sortMotifURL = 'http://localhost:3000/request/sort-by-motif';
  sortDateURL = 'http://localhost:3000/request/sort-by-date';
  constructor(private http: HttpClient) { }

  getHeaders() {
    if (localStorage.getItem('userToken') !== null) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('auth-token', localStorage.getItem('userToken'));

      return headers;
    }
  }

  getAllMeal(): Observable<any> {
    return this.http.get(this.allURL, { headers: this.getHeaders() });
  }

  getMealNiv1(): Observable<any> {
    return this.http.get(this.oneURL, { headers: this.getHeaders() });
  }

  getMealNiv2(): Observable<any> {
    return this.http.get(this.twoURL, { headers: this.getHeaders() });
  }

  sortByMotif(): Observable<any> {
    return this.http.get(this.sortMotifURL, { headers: this.getHeaders() });
  }

  sortByDate(): Observable<any> {
    return this.http.get(this.sortDateURL, { headers: this.getHeaders() });
  }
}
