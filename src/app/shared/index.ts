import { ModuleWithProviders, NgModule,
         Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { MaterialModule} from '@angular/material';
import { IonicModule } from 'ionic-angular';
import { QuillEditorModule } from 'ngx-quill-editor';
import { ComponentsModule } from './components/components.module';

import { ResumeModels } from './models';

import { TranslateComponent } from './translate/translate.component';
import { TranslateService, TranslateLanguage } from './translate/translate.service';
import { TranslatePipe } from './translate/translate.pipe';
import { LanguageDirPipe } from './translate/language-dir.pipe';
import { TRANSLATION_PROVIDERS } from './translate/translations';

import { MakeDraggableDirective } from './directives/make-draggable.directive';
import { MakeDroppableDirective } from './directives/make-droppable.directive';


@NgModule({
  imports: [
    CommonModule,
    // MaterialModule,
    // MdlModule,
    IonicModule,
  ],
  declarations: [  
      TranslateComponent, 
      TranslatePipe, 
      LanguageDirPipe,
      MakeDraggableDirective, 
      MakeDroppableDirective
    ],
  exports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule,
    MdlModule,
    IonicModule,
    QuillEditorModule,
    ComponentsModule,
    ResumeModels,    
    TranslateComponent, 
    TranslatePipe, 
    LanguageDirPipe, 
    MakeDraggableDirective, 
    MakeDroppableDirective    
  ],
  providers: [
      TRANSLATION_PROVIDERS, 
      TranslateService
    ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
