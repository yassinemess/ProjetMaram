import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { MComponent } from './m/m.component';
import { AaComponent } from './aa/aa.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    MComponent,
    AaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
