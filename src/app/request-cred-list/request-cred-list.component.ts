import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-request-cred-list',
  templateUrl: './request-cred-list.component.html',
  styleUrls: ['./request-cred-list.component.css']
})
export class RequestCredListComponent implements OnInit {
rechargement;
  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getRechargement();
  }

  getRechargement() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.creditService.getCredit(user[0]._id).subscribe(
      (data) => {
        console.log(data);
        this.rechargement = data;
      }, (err) => {
        console.log(err);
      }
    )
  }

}
