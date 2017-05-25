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

import { TranslationModule } from './translation/translation.module';
export  * from './translation/translation.module';
import { MakeDraggableDirective } from './directives/make-draggable.directive';
import { MakeDroppableDirective } from './directives/make-droppable.directive';


@NgModule({
  imports: [
    CommonModule,    
    IonicModule,
  ],
  declarations: [  
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
    TranslationModule,
    MakeDraggableDirective, 
    MakeDroppableDirective    
  ]
})
export class SharedModule { }
