import { AuthService } from './../services/auth.service';
import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-list',
  templateUrl: './pay-list.component.html',
  styleUrls: ['./pay-list.component.css']
})
export class PayListComponent implements OnInit {
Credit;
real_data = [];

  constructor(private creditService: CreditService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getCredit();
  }


  getCredit() {
    this.creditService.getCreditAdmin().subscribe(
      (data) => {
        console.log(data);
        this.Credit = data;

        this.Credit.forEach(element => {
          this.authService.FindUser(element.author).subscribe(
            (success) => {
              element.user = success;
              this.real_data.push(element);
            }, (err) => {
              console.log(err);
            }
          );
        });

        console.log(this.real_data);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
