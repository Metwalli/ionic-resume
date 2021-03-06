import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared';

// import { ResumeCommonModule } from './common/common.module';
// export * from './common/common.module';

import { ResumeVersionService } from './common/services/resume-version.service';
import { ResumeVersionResolve } from './common/services/resume-version-resolve.service';
import { AuthService } from './common/services/auth.service';

//import { HeaderComponent } from './header/header.component';
import { AppDrawerComponent } from './app-drawer/app-drawer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppTitleComponent } from './app-title/app-title.component';

export const firebaseConfig = {
        apiKey: "AIzaSyCyppx8Kbhi1ejUS-rWMu-BYhynG45a7kA",
        authDomain: "resume-6f14f.firebaseapp.com",
        databaseURL: "https://resume-6f14f.firebaseio.com",
        storageBucket: "resume-6f14f.appspot.com",
        messagingSenderId: "401576707644"
      };
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  imports: [        
    SharedModule,    
    AngularFireModule.initializeApp(firebaseConfig),
    //ResumeCommonModule,
    //CovalentStepsModule
  ],
  exports:[ 
    //ResumeCommonModule,
    //CovalentStepsModule,    
    AppTitleComponent,     
    MainMenuComponent
  ],
  providers: [
    ResumeVersionResolve,
    ResumeVersionService,
    AuthService
  ],
  declarations: [
    AppTitleComponent, 
    MainMenuComponent
  ]
})
export class CoreModule { }
