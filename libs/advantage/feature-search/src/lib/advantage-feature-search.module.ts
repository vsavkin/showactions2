import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSearch from './+state/search.reducer';
import { SearchEffects } from './+state/search.effects';
import { search } from './+state/search.actions';
import { getAllSearch } from './+state/search.selectors';

@Component({
  selector: 'sd-advantage-search',
  template: `
    <button (click)="performSearch()">perform search</button>
    
    <div>
      <div *ngFor='let r of results$|async'>
        {{r|json}}
      </div>
    </div>
  `,
})
export class SearchComponent {
  results$ = this.store.select(getAllSearch);

  constructor(private readonly store: Store<any>) {}

  performSearch() {
    this.store.dispatch(search());
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSearch.SEARCH_FEATURE_KEY, fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects]),
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class AdvantageFeatureSearchModule {}
