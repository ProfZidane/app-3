import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-cred-form',
  templateUrl: './request-cred-form.component.html',
  styleUrls: ['./request-cred-form.component.css']
})
export class RequestCredFormComponent implements OnInit {
  orange;
  moov;
  mtn;
  paypal;
  selected;
  form_data = {
    author: '',
    choice: '',
    paypal: 'none',
    num: '',
    somme: '',
    created_at: new Date().toLocaleString(),
    updated_at: ''
  };
  success;
  danger_alert;
  success_alert;
  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
  }

  ChoiceOrange() {
    this.orange = true;
    this.moov = false;
    this.mtn = false;
    this.paypal = false;

    this.selected = 'orange';
  }

  ChoiceMoov() {
    this.moov = true;
    this.mtn = false;
    this.orange = false;
    this.paypal = false;

    this.selected = 'moov';
  }

  ChoiceMtn() {
    this.mtn = true;
    this.orange = false;
    this.moov = false;
    this.paypal = false;

    this.selected = 'mtn';
  }

  ChoicePaypal() {
    this.paypal = true;
    this.mtn = false;
    this.orange = false;
    this.moov = false;
  }


  ValidationForm() {
      this.success = false;
      let user = JSON.parse(localStorage.getItem('userData'));
      this.form_data.author = user[0]._id;
      this.form_data.choice = this.selected;
      console.log(this.form_data);
      this.creditService.setCredit(this.form_data).subscribe(
        (success) => {
          console.log(success);
          this.success_alert = true;
          this.danger_alert = false;
          setTimeout( () => {
            this.success = true;
            this.form_data.num = "";
            this.form_data.somme = "";
          }, 3000);
        }, (err) => {
          console.log(err);
          this.success_alert = false;
          this.danger_alert = true;
          setTimeout( () => {
            this.success = true;
          }, 3000);
        }
      )
  }

}
