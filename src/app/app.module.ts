import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { HeaderComponent } from './core/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import {HttpClientModule } from "@angular/common/http";
import { CoreModule } from './core/core.module';

import { FaceSnapComponent } from './face-snaps/components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
 }
