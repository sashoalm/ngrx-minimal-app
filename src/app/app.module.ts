import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent, Reducer1, Reducer2 } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter1: Reducer1, counter2 : Reducer2 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
