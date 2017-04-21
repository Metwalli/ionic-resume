import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { 
  ExpansionPanelGroupComponent,
  ExpansionPanelComponent, 
  ExpansionPanelHeaderComponent,
  ExpansionPanelContentComponent 
} from './expansion-panel/expansion-panel.component';

@NgModule({
  imports: [
    CommonModule, 
    NoopAnimationsModule,
    IonicModule
  ],
  declarations: [
    ExpansionPanelGroupComponent,
    ExpansionPanelComponent, 
    ExpansionPanelHeaderComponent,
    ExpansionPanelContentComponent 
  ],
  exports:[
    ExpansionPanelGroupComponent,
    ExpansionPanelComponent, 
    ExpansionPanelHeaderComponent,
    ExpansionPanelContentComponent 
  ]
})
export class ExpansionPanelModule { }
