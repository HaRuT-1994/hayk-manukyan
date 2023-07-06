import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/components/landing/landing.component').then((x) => x.LandingComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./modules/contact/contact.component').then((x) => x.ContactComponent),

  }, 
  {
    path: 'note',
    loadComponent: () => import('./modules/notes/notes.component').then((x) => x.NotesComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/about/about.component').then((x) => x.AboutComponent),
  },
  {
    path: 'admin',
    loadComponent: () => import('./modules/amdin/amdin.component').then((x) => x.AmdinComponent),
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
