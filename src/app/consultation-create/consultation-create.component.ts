import { RequestService } from './../services/request.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-consultation-create',
  templateUrl: './consultation-create.component.html',
  styleUrls: ['./consultation-create.component.css']
})
export class ConsultationCreateComponent implements OnInit {
success;
mat;
results;
consultation = {
    author: '',
    weight : '',
    height: '',
    description: '',
    status: '',
    created_at: new Date().toLocaleDateString(),
    updated_at : ''
};
id_user;
c_s;
  constructor(private authService: AuthService, private requestService: RequestService) { }

  ngOnInit(): void {
  }


  Search() {
    this.success = false;
    const data = {
      matricule: this.mat
    };
    this.authService.Search(data).subscribe(
      (datas) => {
        console.log(datas);
        this.results = datas;

        setTimeout( () => {
          this.success = true;
        }, 2000);
      }, (err) => {
        console.log(err);

        setTimeout( () => {
          this.success = true;
        }, 2000);
      }
    );
  }


  Choose(id) {
    console.log(id);
    this.id_user = id;
  }


  SetConsultation() {
    this.consultation.author = this.id_user;
    console.log(this.consultation);
    this.requestService.Consultation(this.consultation).subscribe(
      (data) => {
        console.log(data);
        this.c_s = true;
      }, (err) => {
        console.log(err);
      }
    );
  }

}
