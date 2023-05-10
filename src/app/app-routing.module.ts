import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./front-office/comp/index/index.component";
import {LoginComponent} from "./front-office/comp/login/login.component";
import {TestadminComponent} from "./front-office/comp/testadmin/testadmin.component";
import {ForbiddenComponent} from "./front-office/comp/forbidden/forbidden.component";
import {ProfileComponent} from "./front-office/comp/profile/profile.component";
import {AuthGuard} from "./shared/_auth/auth.guard";
import {TestadminxclientComponent} from "./front-office/comp/testadminxclient/testadminxclient.component";
import {RegisterComponent} from "./front-office/comp/register/register.component";

const routes: Routes = [
  { path:'loginFront', component: LoginComponent },
  { path:'indexFront', component: IndexComponent },
  { path:'registerFront', component: RegisterComponent },
  { path:'testAdminFront', component: TestadminComponent, canActivate: [AuthGuard], data: {role: ['Admin']} },
  { path:'forbiddenFront', component: ForbiddenComponent },
  { path:'adminxclient', component: TestadminxclientComponent, canActivate: [AuthGuard], data: {role: ['Admin', 'Client']} },
  { path:'profileFront', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
