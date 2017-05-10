import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [
        AlertService,
        AuthenticationService]
})
export class LoginModule { 
}
