import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: 'repos-list', component: ListeComponent },
  { path: '',
    redirectTo: '/repos-list',
    pathMatch: 'full'
  },
  { path: '**', component: ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
