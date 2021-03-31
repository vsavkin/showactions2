import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ourHelpers from '@nrwl/angular';
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      ourHelpers.fetch({
        run: (action) => {
          // you return an observable of actions
          return from(fetch('/api').then(r => r.json())).pipe(map(v => {
            return SearchActions.loadSearchSuccess({ search: [v] });
          }))
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SearchActions.loadSearchFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
