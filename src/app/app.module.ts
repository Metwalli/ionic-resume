import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MdlModule } from 'angular2-mdl';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { ResumeVersionModule } from './resume-version/resume-version.module';
import { ResumeTemplateModule } from './resume-template/resume-template.module';
import { AppComponent, ModalContentPage } from './app.component';


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
    BrowserAnimationsModule,
    CoreModule, 
    AuthModule,
    SharedModule,
    ResumeVersionModule,
    ResumeTemplateModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [IonicApp]
})
export class AppModule { }
