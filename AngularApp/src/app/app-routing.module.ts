import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
  {  path:'',component: LoginComponent},
  {  path:'log',component: LoginComponent},
  {  path:'edit',component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
