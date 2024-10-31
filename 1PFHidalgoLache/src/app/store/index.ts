import { ActionReducerMap } from '@ngrx/store';
import {
  authFeatureName,
  authReducers,
  AuthState,
} from './reducers/auth.reducers';

interface RootState {
  [authFeatureName]: AuthState;
}

const RootReducer: ActionReducerMap<RootState> = {
  [authFeatureName]: authReducers,
};

export { RootReducer };