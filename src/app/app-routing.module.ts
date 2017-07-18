import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent },
// { path: '**', component: HelloComponent },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
