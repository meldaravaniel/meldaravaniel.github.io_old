import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent],
  exports: [
    // note to self: when your main module can't see stuff, it's because you haven't exported it. >_<
    NavbarComponent
  ]
})
export class CoreModule { }
