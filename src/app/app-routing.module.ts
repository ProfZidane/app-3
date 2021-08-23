import { NotificationHistoryComponent } from './notification-history/notification-history.component';
import { NotificationPushComponent } from './notification-push/notification-push.component';
import { Stat1AdminMedComponent } from './stat1-admin-med/stat1-admin-med.component';
import { StatAdminHbgComponent } from './stat-admin-hbg/stat-admin-hbg.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { SickListComponent } from './sick-list/sick-list.component';
import { PayStatComponent } from './pay-stat/pay-stat.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { ListDemandCComponent } from './list-demand-c/list-demand-c.component';
import { ListDemandNcComponent } from './list-demand-nc/list-demand-nc.component';
import { HomeAdminGeneralComponent } from './home-admin-general/home-admin-general.component';
import { ConsultationHistoryComponent } from './consultation-history/consultation-history.component';
import { ConsultationCreateComponent } from './consultation-create/consultation-create.component';
import { TraitmentValidedComponent } from './traitment-valided/traitment-valided.component';
import { TraitmentNovalidedComponent } from './traitment-novalided/traitment-novalided.component';
import { HomeAdminMedComponent } from './home-admin-med/home-admin-med.component';
import { RequestMedListComponent } from './request-med-list/request-med-list.component';
import { RequestMedFormComponent } from './request-med-form/request-med-form.component';
import { RequestCredListComponent } from './request-cred-list/request-cred-list.component';
import { RequestCredFormComponent } from './request-cred-form/request-cred-form.component';
import { RequestOutFormComponent } from './request-out-form/request-out-form.component';
import { RequestOutListComponent } from './request-out-list/request-out-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'list-exit-request',
    component: RequestOutListComponent
  },
  {
    path: 'req-exit',
    component: RequestOutFormComponent
  },
  {
    path: 'req-credit',
    component: RequestCredFormComponent
  },
  {
    path: 'list-credit',
    component: RequestCredListComponent
  },
  {
    path: 'req-med',
    component: RequestMedFormComponent
  },
  {
    path: 'list-med',
    component: RequestMedListComponent
  },
  {
    path: 'dashboard-med',
    component: HomeAdminMedComponent
  },
  {
    path: 'traitment-nov',
    component: TraitmentNovalidedComponent
  },
  {
    path: 'traitment-v',
    component: TraitmentValidedComponent
  },
  {
    path: 'consult-form',
    component: ConsultationCreateComponent
  },
  {
    path: 'consult-list',
    component: ConsultationHistoryComponent
  },
  {
    path: 'admin',
    component: HomeAdminGeneralComponent
  },
  {
    path: 'list-request-nc-admin',
    component: ListDemandNcComponent
  },
  {
    path: 'list-request-c-admin',
    component: ListDemandCComponent
  },
  {
    path: 'list-credit-admin',
    component: PayListComponent
  },
  {
    path: 'stat-credit-admin',
    component: PayStatComponent
  },
  {
    path: 'list-medicalph-admin',
    component: SickListComponent
  },
  {
    path: 'admin-login',
    component: LoginAdminComponent
  }, {
    path: 'stat-hbg',
    component: StatAdminHbgComponent
  },
  {
    path: 'stat-med',
    component: Stat1AdminMedComponent
  },
   {
     path: 'notification-push',
     component: NotificationPushComponent
   },
   {
     path: 'notification-history',
     component: NotificationHistoryComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
