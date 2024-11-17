import { ActionReducerMap } from '@ngrx/store';
import {
  authFeatureName,
  authReducers,
  AuthState,
} from './reducers/auth.reducer';
import { counterFeatureName, counterReducer, CounterState } from './reducers/counter.reducer';

interface RootState {
  //[authFeatureName]: AuthState;
  [counterFeatureName]: CounterState;
}

const RootReducer: ActionReducerMap<RootState> = {
  //[authFeatureName]: authReducers,
  [counterFeatureName]: counterReducer,
};

export { RootReducer };
