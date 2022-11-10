import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { LocatorComponent } from './components/assignment4/locator/locator.component';
import { FormsModule } from '@angular/forms';
import { MapgisComponent } from './components/assignment4/mapgis/mapgis.component';
import { Assignment4Component } from './components/assignment4/assignment4.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CalculatorComponent,
    LocatorComponent,
    MapgisComponent,
    Assignment4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    CardModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
