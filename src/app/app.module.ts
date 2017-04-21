import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MdlModule } from 'angular2-mdl';
import { ResumeVersionModule } from './resume-version/resume-version.module';
import { AppComponent, ModalContentPage } from './app.component';
import { CoreModule } from './core/core.module';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentPage,
    HomeComponent
  ],
  entryComponents:[ ModalContentPage],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    IonicModule.forRoot(AppComponent),
    CoreModule, 
    AuthModule,
    ExpansionPanelModule,
    ResumeVersionModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  //schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp]
})
export class AppModule { }
