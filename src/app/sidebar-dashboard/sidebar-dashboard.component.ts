import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css']
})
export class SidebarDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHistoryRequest() {
    this.router.navigateByUrl('/dashboard/(child:list-exit-request)');
  }

  goToCreateRequest() {
    this.router.navigateByUrl('/dashboard/(child:req-exit)');
  }

  goToRequestCredit() {
    this.router.navigateByUrl('/dashboard/(child:req-credit)');
  }

  goToHistoryRequestCredit() {
    this.router.navigateByUrl('/dashboard/(child:list-credit)');
  }

}
