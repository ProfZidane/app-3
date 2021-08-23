import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  exitUrl = 'http://localhost:3000/request/do-exit-request';
  getListNotDone = 'http://localhost:3000/request/get-request-novalided';
  getListDone = 'http://localhost:3000/request/get-request-valided';
  getDetail = 'http://localhost:3000/request/get-request-detail';
  confirmation = 'http://localhost:3000/request/confirmation';
  getCount = 'http://localhost:3000/request/get-req/';
  setConsultation = 'http://localhost:3000/medical/set-consultation';
  getConsultation = 'http://localhost:3000/medical/get-consultation';

  sendExplURL = 'http://localhost:3000/explication/send';
  getExplURL = 'http://localhost:3000/explication/receive/';
  updatedExplURL = 'http://localhost:3000/explication/updated';


  getStatusURL = 'http://localhost:3000/medical/get-status/';

  setNotification = 'http://localhost:3000/notification/create-notification';
  getNotificationURL = 'http://localhost:3000/notification/get-notification';
  seenNotificationURL = 'http://localhost:3000/notification/seen';
  constructor(private http: HttpClient) { }

  getHeaders() {
    if (localStorage.getItem('userToken') !== null) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('auth-token', localStorage.getItem('userToken'));

      return headers;
    }
  }

  DoRequestOut(data): Observable<any> {
    return this.http.post(this.exitUrl, data, { headers: this.getHeaders() });
  }

  GetRequestNotDone(id): Observable<any> {
    return this.http.get(this.getListNotDone + '/' + id, { headers: this.getHeaders() });
  }

  GetRequestDone(id): Observable<any> {
    return this.http.get(this.getListDone + '/' + id, { headers: this.getHeaders() });
  }

  GetRequestNotDoneAdmin(): Observable<any> {
    return this.http.get(this.getListNotDone + '-admin', { headers: this.getHeaders() });
  }

  GetRequestDoneAdmin(): Observable<any> {
    return this.http.get(this.getListDone + '-admin', { headers: this.getHeaders() });
  }

  GetDetailRequest(data): Observable<any> {
    return this.http.post(this.getDetail, data, {
      headers: this.getHeaders()
    });
  }

  Confirmation(data): Observable<any> {
    return this.http.post(this.confirmation, data, { headers: this.getHeaders() });
  }


  VerifyPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        console.log(position);
        // tslint:disable-next-line:variable-name
        const main_position = [5.2908528768090415, -3.998803087987915];
        const sup_pos = [5.289247, -3.998737];
        const inf_pos = [5.291546, -3.998787];
        // 5.291419, -3.998999  -- 5.289247, -3.998737 // 5.291546, -3.998787
        // tslint:disable-next-line:variable-name
        if (position.coords.latitude >= inf_pos[0] && position.coords.latitude <= inf_pos[1] &&
          position.coords.longitude >= sup_pos[0] && position.coords.longitude <= sup_pos[1]) {
          return true;
        } else {
          return false;
        }
      });
    }
  }

  getCounter(id): Observable<any> {
    return this.http.get(this.getCount + id, { headers: this.getHeaders() });
  }

  Consultation(data): Observable<any> {
    return this.http.post(this.setConsultation, data, { headers: this.getHeaders() });
  }

  getListConsultation(): Observable<any> {
    return this.http.get(this.getConsultation, { headers: this.getHeaders() });
  }


  sendExplication(data): Observable<any> {
    return this.http.post(this.sendExplURL, data, { headers: this.getHeaders() });
  }

  receiveExplication(id): Observable<any> {
    return this.http.get(this.getExplURL + id, { headers: this.getHeaders() });
  }

  updatedExplication(data): Observable<any> {
    return this.http.post(this.updatedExplURL, data, { headers: this.getHeaders() });
  }

  getStatusById(id): Observable<any> {
    return this.http.get(this.getStatusURL + id, { headers: this.getHeaders() });
  }

  SetNotification(data): Observable<any> {
    return this.http.post(this.setNotification, data, { headers: this.getHeaders() });
  }

  getNotification(): Observable<any> {
    return this.http.get(this.getNotificationURL, { headers: this.getHeaders() });
  }

  seenNotif(data): Observable<any> {
    return this.http.post(this.seenNotificationURL, data, { headers: this.getHeaders() });
  }
}
