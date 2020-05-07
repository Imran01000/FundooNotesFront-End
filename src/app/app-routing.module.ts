import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'registration' , component: RegistrationComponent },
  { path: 'login' , component : LoginComponent },
  { path: 'forget-password' , component: ForgetPasswordComponent },
  { path: 'reset-password' , component: ResetPasswordComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ RegistrationComponent , LoginComponent , ForgetPasswordComponent , ResetPasswordComponent]