import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { QuillEditorModule } from 'ngx-quill-editor';

import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
export * from './expansion-panel/expansion-panel.module';

import { CardOverModule } from './card-over/card-over.module';

import { DividerComponent } from './divider/divider.component';
import { RadialProgressComponent } from './radial-progress/radial-progress.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardOverComponent } from './card-over/card-over.component';
import { ComponentsComponent } from './components.component';
import { QlEditorComponent } from './quill-editor/quill-editor.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    QuillEditorModule
  ],
  declarations: [
    DividerComponent,
    RadialProgressComponent,
    NotFoundComponent,
    ComponentsComponent,
    QlEditorComponent,
  ],
  exports:[
    ExpansionPanelModule,
    CardOverModule,
    DividerComponent,
    RadialProgressComponent,
    NotFoundComponent,
    QlEditorComponent
  ]
})
export class ComponentsModule { }
