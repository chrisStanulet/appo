import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home Page/home/home.component';
import { NotesComponent } from './Notes View/notes/notes.component';
import {APP_BASE_HREF} from '@angular/common';

const appRoute = [
  { path: 'notes', component: NotesComponent  },
  { path: 'home', component: HomeComponent },
  { path: 'noteView', component:NotesComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
