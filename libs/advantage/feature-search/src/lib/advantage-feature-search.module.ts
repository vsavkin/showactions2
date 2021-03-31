import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sd-advantage-search',
  template: 'search <button (click)="talkToApi()">API</button>'
})
export class SearchComponent {
  async talkToApi() {
    const q = await (await fetch('/api')).json()
    console.log(q)
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class AdvantageFeatureSearchModule {
}
