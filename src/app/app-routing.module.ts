import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/contact.component';
import { LandingComponent } from './modules/home/components/landing/landing.component';
import { NotesComponent } from './modules/notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }, 
  {
    path: 'note',
    component: NotesComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
