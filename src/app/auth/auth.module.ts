import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    SharedModule,    
    AuthRoutingModule   
  ],
  declarations: [
    AuthComponent, 
    SignUpComponent, 
    ResetPasswordComponent, 
    LoginComponent
  ],
  providers: [AuthGuardService, 
    AuthRoutingModule
  ],
  exports:[AuthComponent]
})
export class AuthModule { }
