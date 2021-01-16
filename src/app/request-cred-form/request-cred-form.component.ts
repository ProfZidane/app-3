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
  constructor() { }

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

}
