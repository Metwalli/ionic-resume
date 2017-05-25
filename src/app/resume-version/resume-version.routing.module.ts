import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeVersionComponent } from './resume-version.component';
import { VersionDetailComponent} from './version-detail/version-detail.component';
import { VersionListComponent} from './version-list/version-list.component';
import { StandardVersionComponent} from './standard-version/standard-version.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
        { 
          path: 'resume-version', 
          component: ResumeVersionComponent,
          //canActivate:[AuthGuardService],
          children:[
            { path: '', redirectTo: 'list', pathMatch: 'full'},
            {
              path: 'list',
              //canActivateChild: [AuthGuardService],
              children:[
                { path: '', component: VersionListComponent },
                { path: ':id', component: VersionDetailComponent }     
              ]
            },
            {
              path: 'new',
              component: StandardVersionComponent
            }     
          ]          
        },
                                                  
    ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ResumeVersionRoutingModule {}
