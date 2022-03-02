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
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { AdminContentComponent } from './admin-content/admin-content.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardContentComponent,
        outlet: 'child'
      },
      {
        path: 'list-exit-request',
        component: RequestOutListComponent,
        outlet: 'child'
      },
      {
        path: 'req-exit',
        component: RequestOutFormComponent,
        outlet: 'child'
      },
      {
        path: 'req-credit',
        component: RequestCredFormComponent,
        outlet: 'child'
      },
      {
        path: 'list-credit',
        component: RequestCredListComponent,
        outlet: 'child'
      }
    ]
  },
  {
    path: 'admin',
    component: HomeAdminGeneralComponent,
    children: [
      {
        path: '',
        component: AdminContentComponent,
        outlet: 'child2'
      },
      {
        path: 'list-request-nc-admin',
        component: ListDemandNcComponent,
        outlet: 'child2'
      },
      {
        path: 'list-request-c-admin',
        component: ListDemandCComponent,
        outlet: 'child2'
      },
      {
        path: 'list-credit-admin',
        component: PayListComponent,
        outlet: 'child2'
      },
      {
        path: 'stat-credit-admin',
        component: PayStatComponent,
        outlet: 'child2'
      },
      {
        path: 'list-medicalph-admin',
        component: SickListComponent,
        outlet: 'child2'
      },
      {
        path: 'stat-hbg',
        component: StatAdminHbgComponent,
        outlet: 'child2'
      },
      {
        path: 'stat-med',
        component: Stat1AdminMedComponent,
        outlet: 'child2'
      }
       
    ]
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
    path: 'list-medicalph-admin',
    component: SickListComponent
  },
  {
    path: 'admin-login',
    component: LoginAdminComponent
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
