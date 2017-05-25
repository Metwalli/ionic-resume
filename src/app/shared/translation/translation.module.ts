import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { IonicModule } from 'ionic-angular';

import { TranslationComponent } from './translation.component';
import { TranslationService, TranslationLanguage } from './translation.service';
import { TranslatePipe } from './translate.pipe';
import { LanguageDirPipe } from './language-dir.pipe';
import { TRANSLATION_PROVIDERS } from './translations';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [  
      TranslationComponent, 
      TranslatePipe, 
      LanguageDirPipe      
    ],
  exports: [    
    TranslationComponent, 
    TranslatePipe, 
    LanguageDirPipe,    
  ],
  providers: [
      TRANSLATION_PROVIDERS, 
      TranslationService
    ]
})
export class TranslationModule { }
