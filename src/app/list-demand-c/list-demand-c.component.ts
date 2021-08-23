import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-list-demand-c',
  templateUrl: './list-demand-c.component.html',
  styleUrls: ['./list-demand-c.component.css']
})
export class ListDemandCComponent implements OnInit {
  req_done;
  req_not_done;
  detail;
  user;
  real_data = [];
  constructor(private requestService: RequestService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getDone();
  }

  getDone() {
    this.requestService.GetRequestDoneAdmin().subscribe(
      (data) => {
        console.log(data);
        this.req_done = data;

        this.req_done.forEach(element => {
          console.log(element);
          this.authService.FindUser(element.author).subscribe(
            (success) => {
              element.user = success;
              this.real_data.push(element);
            }, (err) => {
              console.log(err);
            }
          );
        });
        /*console.log(this.req_done[0]._id);

        this.requestService.GetDetailRequest({
          _id : this.req_done[0]._id
        }).subscribe(
          (success) => {
            this.req_done[0].user = success.detail_author;
            this.real_data.push(this.req_done[0]);
           // console.log(this.real_data);
          }, (err) => {
            console.log(err);
          }
        );*/
        console.log(this.real_data);

      }, (err) => {
        console.log(err);
      }
    );
  }

  getDetail(id) {
    console.log(id);
    let data = {
      _id : id
    };
    this.requestService.GetDetailRequest(data).subscribe(
      (data) => {
        console.log(data);
        this.detail = data.detail_request;
        this.user = data.detail_author;
      }, (err) => {
        console.log(err);
      }
    );
  }

}
