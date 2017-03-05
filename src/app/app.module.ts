import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { PatronComponentComponent } from './patron-component/patron-component.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponentComponent,
    PatronComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
