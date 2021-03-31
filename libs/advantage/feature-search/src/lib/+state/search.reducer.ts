import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as SearchActions from './search.actions';
import { SearchEntity } from './search.models';

export const SEARCH_FEATURE_KEY = 'search';

export interface State extends EntityState<SearchEntity> {
  selectedId?: string | number; // which Search record has been selected
  loaded: boolean; // has the Search list been loaded
  error?: string | null; // last known error (if any)
}

export interface SearchPartialState {
  readonly [SEARCH_FEATURE_KEY]: State;
}

export const searchAdapter: EntityAdapter<SearchEntity> = createEntityAdapter<SearchEntity>();

export const initialState: State = searchAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const searchReducer = createReducer(
  initialState,
  on(SearchActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(SearchActions.loadSearchSuccess, (state, { search }) =>
    searchAdapter.setAll(search, { ...state, loaded: true })
  ),
  on(SearchActions.loadSearchFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}
