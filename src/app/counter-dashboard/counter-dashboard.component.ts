import { RequestService } from './../services/request.service';
import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-dashboard',
  templateUrl: './counter-dashboard.component.html',
  styleUrls: ['./counter-dashboard.component.css']
})
export class CounterDashboardComponent implements OnInit {
Compte;
Out;
User;
Status;
  constructor(private creditService: CreditService, private requestService: RequestService) { }

  ngOnInit(): void {
    this.getCompte();
    this.getOut();
    this.getStatus();
  }


  getCompte() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.creditService.getCompte(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.Compte = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  getOut() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getCounter(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.Out = data.length;
      }, (err) => {
        console.log(err);
      }
    );
  }

  getStatus() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.requestService.getStatusById(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        if (data.length === 0) {
          this.Status = 'Favorable';
        } else {
          this.Status = data[data.length - 1].status;
        }
      }, (err) => {
        console.log(err);
      }
    );
  }

}
