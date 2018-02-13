import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter1 : number;
  counter2 : number;
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
