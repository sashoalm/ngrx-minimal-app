import { Component, InjectionToken } from '@angular/core';
import { Store, Action, ActionReducerMap } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');

export const reducers = {
  counter1             : Reducer1,
  counter2             : Reducer2,
};

export const reducerProvider = [
  {provide: reducerToken, useValue: reducers}
];

export interface AppState {
  counter1 : number;
  counter2 : number;
}

export const initialAppState : AppState = {
  counter1: 11,
  counter2: 22
}

export function Reducer1(counter : number = 0, action : Action) {
  console.log(`Called Reducer1: counter=${counter}`);
  return counter + 1;
}

export function Reducer2(counter : number = 0, action : Action) {
  console.log(`Called Reducer2: counter=${counter}`);
  return counter + 2;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter1 : Observable<number>;
  counter2 : Observable<number>;

  constructor(private store : Store<AppState>) {
    this.counter1 = this.store.select('counter1');
    this.counter2 = this.store.select('counter2');

    this.counter1.subscribe(x => console.log(`Subscribe event for counter1 fired: counter=${x}`));
    this.counter2.subscribe(x => console.log(`Subscribe event for counter2 fired: counter=${x}`));
  }

  increment() {
    this.store.dispatch({type:'foo'});
  }
}
