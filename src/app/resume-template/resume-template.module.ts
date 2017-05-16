import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ResumeTemplateComponent } from './resume-template.component';
import { Template1Component } from './template-1/template-1.component';
import { Template1SectionComponent } from './template-1/template-1-section/template-1-section.component';
import { ResumeTemplateRoutingModule } from './resume-template.routing.module';
import { TemplateListComponent } from './template-list/template-list.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { Template2Component } from './template-2/template-2.component';
import { Template2SectionComponent } from './template-2/template-2-section/template-2-section.component';
import { Template3Component } from './template-3/template-3.component';
import { Template3SectionComponent } from './template-3/template-3-section/template-3-section.component';
import { Template4Component } from './template-4/template-4.component';
import { Template4SectionComponent } from './template-4/template-4-section/template-4-section.component';
import { Template5Component } from './template-5/template-5.component';
import { Template5SectionComponent } from './template-5/template-5-section/template-5-section.component';

@NgModule({
  imports: [
    SharedModule,
    ResumeTemplateRoutingModule
  ],
  declarations: [
    ResumeTemplateComponent, 
    TemplateListComponent, 
    MainTemplateComponent, 
    Template1Component, 
    Template1SectionComponent,     
    Template2Component, 
    Template2SectionComponent, Template3Component, Template3SectionComponent, Template4Component, Template4SectionComponent, Template5Component, Template5SectionComponent
  ],
  exports: [
    ResumeTemplateComponent, 
    TemplateListComponent, 
    MainTemplateComponent,
    Template1Component
  ],
  providers:[
    ResumeTemplateRoutingModule
  ]
})
export class ResumeTemplateModule { }
