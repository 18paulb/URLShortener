import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlredirectorComponent } from './urlredirector/urlredirector.component';
import { UrlshortenerComponent } from './urlshortener/urlshortener.component';

const routes: Routes = [
  { path: ':slug', component: UrlredirectorComponent },
  { path: '', component: UrlshortenerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
