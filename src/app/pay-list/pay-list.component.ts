import { AuthService } from './../services/auth.service';
import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pay-list',
  templateUrl: './pay-list.component.html',
  styleUrls: ['./pay-list.component.css']
})
export class PayListComponent implements OnInit {
Credit;
real_data = [];
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
  constructor(private creditService: CreditService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getCredit();
  }


  getCredit() {
    this.creditService.getCreditAdmin().subscribe(
      (data) => {

        console.log(data);
        this.Credit = data;
        this.dtTrigger.next();
        


        console.log(this.real_data);
      }, (err) => {
        console.log(err);
      }
    );
    
  }

}
