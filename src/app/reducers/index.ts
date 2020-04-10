import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';


export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selectors

// 1. Create a feature selector (if you are in a feature module. We aren't, we are in the Appmodule, so ignore this for now)

// 2. Create a selector for each branch of the state (we have one right now, counter)
const selectCounterBranch = (state: AppState) => state.counter;
// 3. Need any helper selectors? those go here.

// 4. The Selectors that your component needs.

export const selectCurrent = createSelector(selectCounterBranch, b => b.current);

export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectResetDisabled = createSelector(selectCurrent, c => c === 0);


