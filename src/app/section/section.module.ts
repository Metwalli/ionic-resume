import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { SectionComponent, SectionTemplateComponent } from './section.component';
import { LanguageComponent } from './language/language.component';
import { LanguageItemComponent } from './language/language-item/language-item.component';
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';
import { AwardComponent } from './award/award.component';
import { AwardItemComponent } from './award/award-item/award-item.component';
// import { CertificateComponent } from './certificate/certificate.component';
// import { CertificateItemComponent } from './certificate/certificate-item/certificate-item.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HobbyItemComponent } from './hobbies/hobby-item/hobby-item.component';
// import { OtherTextComponent } from './other-text/other-text.component';
// import { PublicationComponent } from './publication/publication.component';
// import { PublicationItemComponent } from './publication/publication-item/publication-item.component';
// import { ReferenceComponent } from './reference/reference.component';
// import { ReferenceItemComponent } from './reference/reference-item/reference-item.component';
// import { VolunteeringComponent } from './volunteering/volunteering.component';
// import { VolunteeringItemComponent } from './volunteering/volunteering-item/volunteering-item.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCategoryComponent } from './skills/skill-category/skill-category.component';
import { SkillItemComponent } from './skills/skill-item/skill-item.component';
//import { ContactAccountComponent } from './personal-info/contact-account/contact-account.component';
// import { StandardVersionComponent } from './standard-version/standard-version.component';

@NgModule({
  imports: [
    SharedModule,        
  ],
  declarations: [
    SectionComponent,
    SectionTemplateComponent,
    AwardComponent, AwardItemComponent,
    //CertificateComponent, CertificateItemComponent,
    EducationComponent, EducationItemComponent,
    //ExperienceComponent,ExperienceItemComponent,
    HobbiesComponent,HobbyItemComponent,
    LanguageComponent, LanguageItemComponent,
    // PublicationComponent, PublicationItemComponent,
    // ReferenceComponent, ReferenceItemComponent,
    SkillsComponent, SkillCategoryComponent, SkillItemComponent,    
    // VolunteeringComponent, VolunteeringItemComponent,
    // OtherTextComponent,
    // SkillCategoryComponent,
    // SkillItemComponent,
    //ContactAccountComponent,    
  ],
  exports: [
    SectionComponent,
    SectionTemplateComponent
  ] 
})
export class SectionModule { }
