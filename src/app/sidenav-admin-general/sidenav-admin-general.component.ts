import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-admin-general',
  templateUrl: './sidenav-admin-general.component.html',
  styleUrls: ['./sidenav-admin-general.component.css']
})
export class SidenavAdminGeneralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToListNoConfirmRequest() {
    this.router.navigateByUrl("/admin/(child2:list-request-nc-admin)");
  }

  goToListConfirmRequest() {
    this.router.navigateByUrl("/admin/(child2:list-request-c-admin)");
  }

  goToListCredit() {
    this.router.navigateByUrl("/admin/(child2:list-credit-admin)");
  }

  goToStatisticsCredit() {
    this.router.navigateByUrl("/admin/(child2:stat-credit-admin)");
  }

  goToStatisticsRequest() {
    this.router.navigateByUrl("/admin/(child2:stat-hbg)");
  }

}
