import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-med',
  templateUrl: './consult-med.component.html',
  styleUrls: ['./consult-med.component.css']
})
export class ConsultMedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToConsulting() {
    location.href = '/consult-form';
  }

}
