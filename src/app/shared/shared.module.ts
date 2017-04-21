import { ModuleWithProviders, NgModule,
         Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { MaterialModule} from '@angular/material';
import { IonicModule } from 'ionic-angular';
import { TranslateComponent } from './translate/translate.component';
import { TranslateService, TranslateLanguage } from './translate/translate.service';
import { TranslatePipe } from './translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './translate/translations';
import { DirPipe } from './translate/dir.pipe';

import { SharedComponent } from './shared.component';
import { MakeDraggableDirective } from './make-draggable.directive';
import { MakeDroppableDirective } from './make-droppable.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    // MaterialModule,
    // MdlModule,
    IonicModule,
  ],
  declarations: [ 
      SharedComponent, 
      TranslateComponent, 
      TranslatePipe, 
      MakeDraggableDirective, 
      MakeDroppableDirective, 
      NotFoundComponent,       
    ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, 
    MaterialModule,
    MdlModule,
    IonicModule,
    NotFoundComponent,    
    TranslateComponent, TranslatePipe, MakeDraggableDirective, MakeDroppableDirective
  ],
  providers: [
      TRANSLATION_PROVIDERS, 
      TranslateService
    ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
