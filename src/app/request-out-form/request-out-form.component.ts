import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-out-form',
  templateUrl: './request-out-form.component.html',
  styleUrls: ['./request-out-form.component.css']
})
export class RequestOutFormComponent implements OnInit {
OutInfo = {
  author: '',
  number_tutor: '',
  bed_number: '',
  date_started: '',
  date_finish: '',
  motivation: '',
  status: 0,
  created_at: new Date().toLocaleDateString(),
  updated_at: ''
};

success;

// tslint:disable-next-line:variable-name
success_alert: any;
// tslint:disable-next-line:variable-name
danger_alert: any;
// tslint:disable-next-line:variable-name
warning_alert: any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  ValidationForm() {
    this.success = false;
    console.log(this.OutInfo);
    let user = JSON.parse(localStorage.getItem('userData'));
    let author = user[0]._id;
    this.OutInfo.author = author;
    this.requestService.DoRequestOut(this.OutInfo).subscribe(
      (success) => {
        console.log(success);
        setTimeout( () => {
          this.success = true;
          this.success_alert = true;
          this.danger_alert = false;
          this.warning_alert = false;

          this.OutInfo = {
            author: '',
            number_tutor: '',
            bed_number: '',
            date_started: '',
            date_finish: '',
            motivation: '',
            status: 0,
            created_at: new Date().toLocaleDateString(),
            updated_at: ''
          };
        }, 3000);
      }, (err) => {
        console.log(err);
        if (err.status === 400) {
          this.danger_alert = false;
          this.success_alert = false;
          this.warning_alert = true;
        } else if (err.status === 404) {
          this.danger_alert = true;
          this.success_alert = false;
          this.warning_alert = false;
        }
        setTimeout( () => {
          this.success = true;
        }, 1000);
      }
    );
  }

}
