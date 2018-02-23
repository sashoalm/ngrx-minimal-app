import { Component, InjectionToken } from '@angular/core';
import { Store, Action, ActionReducerMap, combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');

const nestedReducers = {
  counter1 : Reducer1,
  counter2 : Reducer2
};

const reducers = {
  nestedCounters       : combineReducers(nestedReducers),
  counter3             : Reducer3
};

export const reducerProvider = [
  {provide: reducerToken, useValue: reducers}
];

interface NestedCounters {
  counter1 : number;
  counter2 : number;
}

interface AppState {
  nestedCounters : NestedCounters;
  counter3 : number;
}

export const initialAppState : AppState = {
  nestedCounters : {
    counter1 : 11,
    counter2 : 22,
  },
  counter3: 33,
}

function Reducer1(counter : number = 0, action : Action) {
  console.log(`Called Reducer1: counter=${counter}`);
  return counter + 1;
}

function Reducer2(counter : number = 0, action : Action) {
  console.log(`Called Reducer2: counter=${counter}`);
  return counter + 2;
}

function Reducer3(counter : number = 0, action : Action) {
  console.log(`Called Reducer3: counter=${counter}`);
  return counter + 3;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nestedCounters : Observable<NestedCounters>;
  counter3 : Observable<number>;

  constructor(private store : Store<AppState>) {
    this.nestedCounters = this.store.select('nestedCounters');
    this.counter3 = this.store.select('counter3');

    this.nestedCounters.subscribe(x => console.log(`Subscribe event for counter1 fired: counter1=${x.counter1}, counter2=${x.counter2}`));
    this.counter3.subscribe(x => console.log(`Subscribe event for counter2 fired: counter=${x}`));
  }

  increment() {
    this.store.dispatch({type:'foo'});
  }
}
