import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromInscriptions from './inscriptions.reducer';
import { selectAuthState } from '../../../../store/selectors/auth.selectors';
import { Inscription } from '../models/inscription.model';

export const selectInscriptionsState =
  createFeatureSelector<fromInscriptions.State>(
    fromInscriptions.inscriptionsFeatureKey
  );

export const selectInscriptions = createSelector(
  selectInscriptionsState,
  (state) => state.inscriptions
);
