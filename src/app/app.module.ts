import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KnitCodeAppComponent } from './knit-code-app/knit-code-app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandComponent } from './navbar/brand/brand.component';
import { NavbarCollapseComponent } from './navbar/navbar-collapse/navbar-collapse.component';
import { NavbarContentsComponent } from './navbar/navbar-contents/navbar-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    KnitCodeAppComponent,
    HeaderComponent,
    NavbarComponent,
    BrandComponent,
    NavbarCollapseComponent,
    NavbarContentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, KnitCodeAppComponent]
})
export class AppModule { }
