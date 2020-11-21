import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';

const routs: Routes = [
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs),
  ]
})
export class AuthenticationModule { }
