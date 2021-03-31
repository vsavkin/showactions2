import { createAction, props } from '@ngrx/store';
import { SearchEntity } from './search.models';

export const init = createAction('[Search Page] Init');

export const search = createAction('[Search Page] Search');

export const loadSearchSuccess = createAction(
  '[Search/API] Load Search Success',
  props<{ search: SearchEntity[] }>()
);


// some crazy changes
export const loadSearchFailure = createAction(
  '[Search/API] Load Search Failure',
  props<{ error: any }>()
);
