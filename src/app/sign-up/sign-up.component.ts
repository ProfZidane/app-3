import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  register = {
    last_name : '',
    fisrt_name : '',
    filliere : '',
    promo : '',
    avatar :  '' ,
    email : '',
    num : '',
    password : '',
    matricule : '',
    in_city : '',
    chambre : '',
    created_at : new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    updated_at: ''
  };
  VisibilityBed = false;
  fileToUpload: File = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  Validation() {
  const data = {
    file : this.fileToUpload,
    data : this.register
  };
  console.log(data);
  this.authService.Register(data).subscribe(
      (success) => {
        console.log(success);
      }, (err) => {
        console.log(err);
      }
    );
  }

  CheckIfInCity(value) {
    console.log('changing .. : ' + value);

    if (value === true) {

      this.VisibilityBed = true;

    } else {

      this.VisibilityBed = false;
    }
  }

}
