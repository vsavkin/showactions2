import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvantageFeatureSearchModule } from '@sd/advantage/feature-search';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdvantageFeatureSearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
