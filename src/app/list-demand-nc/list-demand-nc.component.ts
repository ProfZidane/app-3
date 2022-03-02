import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-demand-nc',
  templateUrl: './list-demand-nc.component.html',
  styleUrls: ['./list-demand-nc.component.css']
})
export class ListDemandNcComponent implements OnInit {
  req_not_done;
  real_data = [];
  detail;
  user;
  success;
  success_alert;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private requestService: RequestService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getNotDone();
  }




  getNotDone() {
    this.requestService.GetRequestNotDoneAdmin().subscribe(
      (data) => {
        //console.log(data);
        this.req_not_done = data;
        console.log(this.req_not_done);
        this.dtTrigger.next();

        
        

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


  SendExplication(id) {
    this.success = false;
    const data = {
      author: id,
      // tslint:disable-next-line:max-line-length
      message: 'Le delai imparti pour votre séjour en dehors de la cité a expiré. Veuillez confirmer votre retour ou signaler en cas de problème',
      status: 0,
      created_at: new Date().toLocaleDateString(),
      updated_at : ''
    };
    this.requestService.sendExplication(data).subscribe(
      (success) => {
        console.log(success);

        setTimeout( () => {
          this.success_alert = true;
          this.success = true;
        }, 2000);
      }, (err) => {
        console.log(err);
        setTimeout( () => {
          this.success_alert = false;
          this.success = true;
        }, 1000);
      }
    );
  }



}
