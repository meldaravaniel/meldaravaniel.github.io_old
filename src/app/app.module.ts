import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { KnitCodeModule } from './knit-code/knit-code.module';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const appRoutes: Routes = [
  //{ path: 'knit-code', component: KnitCodeComponent },
  { path: '', component: JumbotronComponent },
  { path: '**', redirectTo: '/'}  // lazy redirect instead of pageNotFound.
];

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CoreModule,
    KnitCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
