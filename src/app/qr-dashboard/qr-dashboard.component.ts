import { Component, OnInit } from '@angular/core';
import { CreditService } from './../services/credit.service';

@Component({
  selector: 'app-qr-dashboard',
  templateUrl: './qr-dashboard.component.html',
  styleUrls: ['./qr-dashboard.component.css']
})
export class QrDashboardComponent implements OnInit {
Compte;
  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCompte();
  }

  getCompte() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.creditService.getCompte(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.Compte = JSON.stringify(data);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
