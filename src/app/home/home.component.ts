import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Login = {
    matricule: '',
    password: ''
  };
  success;
  warning_alert;
  danger_alert;
  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }


  LoginForm() {
    this.success = false;
    console.log(this.Login);
    const data = this.Login;

    this.authService.LogUsers(data).subscribe(
      (success) => {
        console.log(success);
        setTimeout( () => {
          this.success = true;
          this.danger_alert = false;
          this.warning_alert = false;

          localStorage.setItem('userToken', success.token);
          localStorage.setItem('userData', JSON.stringify(success.data));
          location.href = '/dashboard';
        }, 3000);
      }, (error) => {
        console.log(error);
        if (error.status === 400) {
          this.warning_alert = true;
          this.danger_alert = false;

        } else if (error.status === 404) {
          this.danger_alert = true;
          this.warning_alert = false;

        }
        setTimeout( () => {
          this.success = true;
        }, 1000);
      }
    );
  }

}
