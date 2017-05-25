import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
export * from './expansion-panel/expansion-panel.module';

import { CardOverModule } from './card-over/card-over.module';

import { DividerComponent } from './divider/divider.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardOverComponent } from './card-over/card-over.component';
import { ComponentsComponent } from './components.component';
import { IconListComponent,IconListComponentPage } from './icon-list/icon-list.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents:[
    IconListComponentPage
  ],
  declarations: [
    DividerComponent,
    NotFoundComponent,
    ComponentsComponent,    
    IconListComponent,
    IconListComponentPage
  ],
  exports:[
    ExpansionPanelModule,
    CardOverModule,
    DividerComponent,
    NotFoundComponent,
    IconListComponent
  ]
})
export class ComponentsModule { }
