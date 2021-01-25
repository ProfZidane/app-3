import { PayStatComponent } from './pay-stat/pay-stat.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { ListDemandNcComponent } from './list-demand-nc/list-demand-nc.component';
import { ListDemandCComponent } from './list-demand-c/list-demand-c.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { CounterDashboardComponent } from './counter-dashboard/counter-dashboard.component';
import { QrDashboardComponent } from './qr-dashboard/qr-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { RequestOutFormComponent } from './request-out-form/request-out-form.component';
import { RequestOutListComponent } from './request-out-list/request-out-list.component';
import { RequestCredFormComponent } from './request-cred-form/request-cred-form.component';
import { RequestCredListComponent } from './request-cred-list/request-cred-list.component';
import { RequestMedFormComponent } from './request-med-form/request-med-form.component';
import { RequestMedListComponent } from './request-med-list/request-med-list.component';

import { DataTablesModule } from 'angular-datatables';
import { HomeAdminMedComponent } from './home-admin-med/home-admin-med.component';
import { SidenavAdminMedComponent } from './sidenav-admin-med/sidenav-admin-med.component';
import { RequestTraitAdminMedComponent } from './request-trait-admin-med/request-trait-admin-med.component';
import { ListTraitAdminMedComponent } from './list-trait-admin-med/list-trait-admin-med.component';
import { Stat1AdminMedComponent } from './stat1-admin-med/stat1-admin-med.component';
import { Stat2AdminMedComponent } from './stat2-admin-med/stat2-admin-med.component';
import { ConsultMedComponent } from './consult-med/consult-med.component';
import { TraitmentNovalidedComponent } from './traitment-novalided/traitment-novalided.component';
import { TraitmentValidedComponent } from './traitment-valided/traitment-valided.component';
import { ConsultationCreateComponent } from './consultation-create/consultation-create.component';
import { ConsultationHistoryComponent } from './consultation-history/consultation-history.component';
import { NotificationPushComponent } from './notification-push/notification-push.component';
import { NotificationHistoryComponent } from './notification-history/notification-history.component';
import { ConsultFormComponent } from './consult-form/consult-form.component';
import { HomeAdminGeneralComponent } from './home-admin-general/home-admin-general.component';
import { SidenavAdminGeneralComponent } from './sidenav-admin-general/sidenav-admin-general.component';
import { ConsultphAdminGeneralComponent } from './consultph-admin-general/consultph-admin-general.component';
import { ConsultlnAdminGeneralComponent } from './consultln-admin-general/consultln-admin-general.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    SidebarDashboardComponent,
    CounterDashboardComponent,
    QrDashboardComponent,
    SignUpComponent,
    RequestOutFormComponent,
    RequestOutListComponent,
    RequestCredFormComponent,
    RequestCredListComponent,
    RequestMedFormComponent,
    RequestMedListComponent,
    HomeAdminMedComponent,
    SidenavAdminMedComponent,
    RequestTraitAdminMedComponent,
    ListTraitAdminMedComponent,
    Stat1AdminMedComponent,
    Stat2AdminMedComponent,
    ConsultMedComponent,
    TraitmentNovalidedComponent,
    TraitmentValidedComponent,
    ConsultationCreateComponent,
    ConsultationHistoryComponent,
    NotificationPushComponent,
    NotificationHistoryComponent,
    ConsultFormComponent,
    HomeAdminGeneralComponent,
    SidenavAdminGeneralComponent,
    ListDemandCComponent,
    ListDemandNcComponent,
    PayListComponent,
    PayStatComponent,
    ConsultphAdminGeneralComponent,
    ConsultlnAdminGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
