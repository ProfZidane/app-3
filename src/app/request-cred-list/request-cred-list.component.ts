import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-request-cred-list',
  templateUrl: './request-cred-list.component.html',
  styleUrls: ['./request-cred-list.component.css']
})
export class RequestCredListComponent implements OnInit {
rechargement;
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();

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
        this.dtTrigger.next();

      }, (err) => {
        console.log(err);
      }
    )
  }

}
