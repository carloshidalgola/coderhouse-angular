import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { Inscription } from '../models/inscription.model';

export const inscriptionsFeatureKey = 'inscriptions';

const INSCRIPTIONS_DB: Inscription[] = [
  {
    id: "1",
    userId: "3",
    course: [
      { 
        id: "1",
        name: "Math",
        createdAt: ''
      },
      { 
        id: "2",
        name: "Science",
        createdAt: ''
      }
    ]
  }
];

export interface State {
  inscriptions: Inscription[];
}

export const initialState: State = {
  inscriptions: []
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptionss, (state) => {
    return {
      ...state, 
      inscriptions: [...INSCRIPTIONS_DB],
    };
  })
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});
