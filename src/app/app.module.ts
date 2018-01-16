import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routing';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { WordFormComponent } from './knit-code/word-form/word-form.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WordFormComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
