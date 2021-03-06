import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { SectionModule } from '../section/section.module';
import { ResumeTemplateModule } from '../resume-template/resume-template.module';

import { ResumeVersionRoutingModule } from './resume-version.routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactAccountComponent } from './personal-info/contact-account/contact-account.component';
import { ResumeVersionComponent } from './resume-version.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { VersionListComponent } from './version-list/version-list.component';
import { StandardVersionComponent } from './standard-version/standard-version.component';


@NgModule({
  imports: [    
    ResumeVersionRoutingModule,    
    SharedModule, 
    SectionModule,
    ResumeTemplateModule,
  ],
  declarations: [
    ResumeVersionComponent,
    VersionDetailComponent, 
    VersionListComponent,
    PersonalInfoComponent, 
    ContactAccountComponent,
    StandardVersionComponent        
  ],
  providers: [ ResumeVersionRoutingModule ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA]
  exports:[
    ResumeVersionComponent, 
    VersionListComponent
  ]
})
export class ResumeVersionModule { }
