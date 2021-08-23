import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-push',
  templateUrl: './notification-push.component.html',
  styleUrls: ['./notification-push.component.css']
})
export class NotificationPushComponent implements OnInit {
success;
success_alert;
danger_alert;
Notification = {
    message: '',
    type: 'general',
    viewers: '[]',
    created_at: new Date().toLocaleDateString(),
    updated_at : ''
};
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }


  CreateService() {
    this.success = false;
    this.requestService.SetNotification(this.Notification).subscribe(
      (success) => {
        console.log(success);
        setTimeout( () => {
          this.success_alert = true;
          this.danger_alert = false;
          this.success = true;
        }, 1000);
      }, (err) => {
        console.log(err);
        setTimeout( () => {
          this.success_alert = false;
          this.danger_alert = true;
          this.success = true;
        }, 1000);
      }
    );
  }

}
