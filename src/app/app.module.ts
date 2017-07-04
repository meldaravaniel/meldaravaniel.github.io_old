import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { KnitCodeComponent } from './knit-code/knit-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    KnitCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
