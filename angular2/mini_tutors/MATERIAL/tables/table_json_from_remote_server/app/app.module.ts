import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 	MatTableModule } from '@angular/material';

import { 	AppComponent } from './app.component';
import { UsertableComponent } from './usertable/usertable.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
  	MatTableModule,
  	BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
