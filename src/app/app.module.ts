import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WordFormComponent } from './word-form/word-form.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    WordFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
