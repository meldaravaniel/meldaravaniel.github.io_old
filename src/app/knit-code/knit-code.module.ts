import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnitCodeComponent } from './knit-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KnitCodeComponent],
  exports: [
    KnitCodeComponent
  ]
})
export class KnitCodeModule { }
