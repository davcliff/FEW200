import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted), // action
      map(() => localStorage.getItem('by')), // "1" , "3", "5" | null
      filter(by => by !== null), // if it is null, stop
      filter(by => by === '1' || by === '3' || by === '5'),
      map(by => +by),
      map(by => counterActions.countBySet({ by }))
    )
    , { dispatch: true } // dispatch Maybe?
  );

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    )
    , { dispatch: false });

  constructor(private actions$: Actions) { }
}
