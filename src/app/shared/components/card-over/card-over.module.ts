import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { CardOverComponent, 
    CardOverHeaderComponent, 
    CardOverContentComponent
  } from './card-over.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    CardOverComponent,
    CardOverHeaderComponent,
    CardOverContentComponent
  ],
  exports: [
    CardOverComponent,
    CardOverHeaderComponent,
    CardOverContentComponent
  ]
})
export class CardOverModule { }
