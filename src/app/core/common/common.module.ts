import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResumeVersionService } from './services/resume-version.service';
import { ResumeVersionResolve } from './services/resume-version-resolve.service';
import { AuthService } from './services/auth.service';

export { ResumeVersionService } from './services/resume-version.service';
export { ResumeVersionResolve } from './services/resume-version-resolve.service';
export { AuthService } from './services/auth.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    
  ],
  providers: [
    AuthService, 
    ResumeVersionService, 
    ResumeVersionResolve
  ],
})
export class ResumeCommonModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ResumeCommonModule,
      providers: [ ],
    };
  }
}
