import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WordFormComponent } from './components/word-form/word-form.component';
import { WordEncodingComponent } from './components/word-encoding/word-encoding.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    WordFormComponent,
    WordEncodingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
