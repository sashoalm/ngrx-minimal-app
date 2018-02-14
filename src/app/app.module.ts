import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Store, StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppComponent, Reducer1, Reducer2, reducerToken, initialAppState, reducerProvider } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducerToken, { initialState: initialAppState })
  ],
  providers: [reducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
