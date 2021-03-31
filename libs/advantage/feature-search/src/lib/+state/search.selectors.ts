import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SEARCH_FEATURE_KEY,
  State,
  SearchPartialState,
  searchAdapter,
} from './search.reducer';

// Lookup the 'Search' feature state managed by NgRx
export const getSearchState = createFeatureSelector<SearchPartialState, State>(
  SEARCH_FEATURE_KEY
);

const { selectAll, selectEntities } = searchAdapter.getSelectors();


export const getAllSearch = createSelector(getSearchState, (state: State) =>
  selectAll(state)
);