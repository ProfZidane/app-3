import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-out-list',
  templateUrl: './request-out-list.component.html',
  styleUrls: ['./request-out-list.component.css']
})
export class RequestOutListComponent implements OnInit {
req_done;
req_not_done;
detail;
user;
success;
warning_alert;
danger_alert;
success_alert;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getNotDone();
    this.getDone();
  }

  getDone() {
    const user_info = JSON.parse(localStorage.getItem('userData'));
    this.requestService.GetRequestDone(user_info[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.req_done = data;
      }, (err) => {
        console.log(err);
      }
    );
  }


  getNotDone() {
    const user_info = JSON.parse(localStorage.getItem('userData'));
    this.requestService.GetRequestNotDone(user_info[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.req_not_done = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  getDetail(id) {
    console.log(id);
    let data = {
      _id : id
    };
    this.requestService.GetDetailRequest(data).subscribe(
      (data) => {
        console.log(data);
        this.detail = data.detail_request;
        this.user = data.detail_author;
      }, (err) => {
        console.log(err);
      }
    );
  }

  TrueConfirmation(id) {
    console.log(id);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        console.log(position);
        // tslint:disable-next-line:variable-name
        const main_position = [5.2908528768090415, -3.998803087987915];
        // tslint:disable-next-line:variable-name
        const sup_pos = [5.28, -3.998737];
        // tslint:disable-next-line:variable-name
        const inf_pos = [5.30, -3.9987];
        // 5.291419, -3.998999  -- 5.289247, -3.998737 // 5.291546, -3.998787
        // tslint:disable-next-line:variable-name
        if ((position.coords.latitude <= inf_pos[0] && position.coords.latitude >= sup_pos[0])) {

            console.log('c la position');
           this.confirmation(id);

        } else {

          console.log('c pas position');
          this.danger_alert = false;
          this.warning_alert = true;
          this.success_alert = false;
        }
      });
    } else {
      alert('Veuillez activer la géolocalisation. Elle est essentielle à votre confirmation !');
      this.danger_alert = false;
      this.warning_alert = false;
      this.success_alert = false;
    }
  }


  confirmation(id) {
    this.success = false;
    console.log(id);
    let data = {
      _id : id
    };
    this.requestService.Confirmation(data).subscribe(
      (success) => {
        console.log(success);
        this.danger_alert = false;
        this.warning_alert = false;
        this.success_alert = true;
        setTimeout( () => {
          this.success = true;
          location.href = '/list-exit-request';
        }, 2000);
      }, (err) => {
        console.log(err);
        if (err.status === 400) {
          this.danger_alert = true;
          this.warning_alert = false;
          this.success_alert = false;
        }
        setTimeout( () => {
          this.success = true;
        }, 2000);
      }
    );
  }

}
