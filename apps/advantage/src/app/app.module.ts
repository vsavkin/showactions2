import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvantageFeatureSearchModule } from '@sd/advantage/feature-search';
import { AdvantageFeatureMainModule } from '@sd/advantage/feature-main';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdvantageFeatureSearchModule, AdvantageFeatureMainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
