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
import { SignUpComponent } from './sign-up/sign-up.component';

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
    path: 'sign-up',
    component: SignUpComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
