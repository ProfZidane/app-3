import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
Login = {
  username : '',
  password : ''
};
  constructor() { }

  ngOnInit(): void {
  }

  LoginForm() {
    console.log(this.Login);

    if (this.Login.username === 'admin' && this.Login.password === 'admin') {
      console.log('je suis connected !');
      const userData = [
        {
          first_name : 'Chief',
          last_name : 'Paul',
          avatar : '09ea7eb462923734fbb23405f75f33d6.png'
        }
      ];
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('role', 'general');
      location.href = '/admin';
    } else if (this.Login.username === 'med' && this.Login.password === 'medecine'){

      const userData = [
        {
          first_name : 'Dr',
          last_name : 'Pierre',
          avatar : '09ea7eb462923734fbb23405f75f33d6.png'
        }
      ];
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('role', 'medical');
      location.href = '/dashboard-med';

    } else {
      console.log('acces refusé !');
    }
  }
}
