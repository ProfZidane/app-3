import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {
User_info;
messages;
details;
notifications;
counter_notif = [];
lecture;
isRole;
role;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    if (localStorage.getItem('userData') !== null) {
      // tslint:disable-next-line:variable-name
      const user_info = JSON.parse(localStorage.getItem('userData'));
      this.User_info = user_info[0];
      console.log(this.User_info);
    }

    if (localStorage.getItem('role') === null) {
      this.isRole = false;
      setInterval( () => {
        this.receiveMessage();
        //this.receiveNotification();
      }, 1000);
    } else {
      this.isRole = true;
      this.role = localStorage.getItem('role');
    }
  }


  Logout() {
    if (localStorage.getItem('userToken') !== null) {
      localStorage.removeItem('userToken');
    }
    localStorage.removeItem('userData');
    if (localStorage.getItem('role') !== null) {
      localStorage.removeItem('role');
    }

    location.href = '/';
  }

  receiveMessage() {
    const use = JSON.parse(localStorage.getItem('userData'));
    const id = use[0]._id;
    console.log(id);

    this.requestService.receiveExplication(id).subscribe(
      (data) => {
        //console.log(data);
        this.messages = data;
      }, (err) => {
        //console.log(err);
      }
    );
  }

  receiveNotification() {
    const use = JSON.parse(localStorage.getItem('userData'));

    this.requestService.getNotification().subscribe(
      (data) => {
        console.log(data);
        this.notifications = data;
        this.notifications.forEach(element => {
          let tab = JSON.parse(element.viewers);
          if (tab.includes(use[0]._id)) {
            element.status = 1;
          } else {
            element.status = 0;
          }
        });

        this.notifications.forEach(element => {
          if (element.status === 1) {
            this.counter_notif.push(element);
          }
        });
        this.counter_notif = [];
      }, (err) => {
        console.log(err);
      }
    );
  }


  seenNotif(object) {
    const use = JSON.parse(localStorage.getItem('userData'));
    // tslint:disable-next-line:variable-name
    const _id_users = use[0]._id;
    let data = {
      _id: object._id,
      _id_user: _id_users
    };

    this.lecture = object.message;

    this.requestService.seenNotif(data).subscribe(
      (success) => {
        console.log(success);
      }, (err) => {
        console.log(err);
      }
    );
  }

  OPEN(object) {
    this.lecture = object.message;
  }

  DetailMessage(object) {
    //console.log(object);
    const data =  {
      _id: object._id
    };
    this.requestService.updatedExplication(data).subscribe(
      (success) => {
       // console.log(success);
        this.details = object.message;
      }, (err) => {
       // console.log(err);
      }
    );
  }

}
