import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureName, AuthState } from '../reducers/auth.reducers';

export const selectAuthState =
  createFeatureSelector<AuthState>(authFeatureName);

export const selectAutheticatedUser = createSelector(
  selectAuthState,
  (state) => state.authenticatedUser
);