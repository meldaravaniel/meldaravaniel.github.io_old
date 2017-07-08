import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnitCodeComponent } from './knit-code/knit-code.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

 const routes: Routes = [
   { path: 'knit-code', component: KnitCodeComponent },
   { path: '', component: JumbotronComponent },
   { path: '**', redirectTo: '/'}  // lazy redirect instead of pageNotFound.
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }

 export const routingComponents = [ KnitCodeComponent, JumbotronComponent ];
