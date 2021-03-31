import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sd-advantage-search',
  template: 'search'
})
export class SearchComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class AdvantageFeatureSearchModule {
}
