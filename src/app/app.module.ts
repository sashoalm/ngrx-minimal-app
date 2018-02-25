import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Store, StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppComponent, reducerToken, initialAppState, reducerProvider, metaReducers } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducerToken, { metaReducers, initialState : initialAppState })
  ],
  providers: [reducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
