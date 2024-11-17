import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterFeatureName, CounterState } from '../reducers/counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>(counterFeatureName);
export const selectCounterValue = createSelector(selectCounterState,(CounterState)=>CounterState.value);