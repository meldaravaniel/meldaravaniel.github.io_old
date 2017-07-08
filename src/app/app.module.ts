import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { KnitCodeModule } from './knit-code/knit-code.module';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    KnitCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
