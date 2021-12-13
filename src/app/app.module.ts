import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarsRoverComponent } from './mars-rover/mars-rover.component';

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//Para que ande HttpClient
import { HttpClientModule } from '@angular/common/http';

//Para que ande [(ngModel)]
import { FormsModule } from '@angular/forms';
//Para que anden los Datepicker
import { MatNativeDateModule } from '@angular/material/core';
//Para trabajar con las fechas
import { MAT_DATE_FORMATS } from '@angular/material/core';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'MM-DD-YYYY'
  }
};

@NgModule({
  declarations: [AppComponent, NavBarComponent, MarsRoverComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: 'aHaketBbAmbumlCFErMwxZKf3dagzwB7iJCI7e4D',
      deps: []
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
