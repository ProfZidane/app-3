import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  register = {
    last_name : '',
    fisrt_name : '',
    filliere : '',
    promo : '',
    avatar : '',
    email : '',
    num : '',
    password : '',
    matricule : '',
    in_city : '',
    chambre : ''
  };
  VisibilityBed = false;
  constructor() { }

  ngOnInit(): void {
  }

  Validation() {
    console.log(this.register);

  }

  CheckIfInCity(value) {
    console.log('changing .. : ' + value);

    if (value === true) {

      this.VisibilityBed = true;

    } else {

      this.VisibilityBed = false;
    }
  }

}
