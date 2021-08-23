import { AuthService } from './../services/auth.service';
import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sick-list',
  templateUrl: './sick-list.component.html',
  styleUrls: ['./sick-list.component.css']
})
export class SickListComponent implements OnInit {
  real_data = [];
  c_fictif;
  constructor(private requestService: RequestService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getConsultationList();

  }

  getConsultationList() {
    this.requestService.getListConsultation().subscribe(
      (data) => {
        console.log(data);
        this.c_fictif = data;
        this.c_fictif.forEach(element => {
          this.authService.FindUser(element.author).subscribe(
            (success) => {
              element.user = success;
              this.real_data.push(element);
            },(err) => {
              console.log(err);
            }
          );
        });
      }, (err) => {
        console.log(err);

      }
    );
  }

}
