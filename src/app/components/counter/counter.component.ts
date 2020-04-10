import { Component, OnInit } from '@angular/core';
import { AppState, selectCurrent, selectResetDisabled, selectCountingBy } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  count$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  by$: Observable<number>;

  countBy;

  ngOnInit(): void {
    this.count$ = this.store.select(selectCurrent);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
    this.by$ = this.store.select(selectCountingBy);
  }

  increment() {
    this.store.dispatch(counterActions.countIncremented());
  }

  decrement() {
    this.store.dispatch(counterActions.countDecremented());
  }

  reset() {
    this.store.dispatch(counterActions.countReset());
  }

  countBySet(by: number) {
    this.store.dispatch(counterActions.countBySet({ by }));
  }
}
