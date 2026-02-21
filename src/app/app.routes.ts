import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Resume } from './components/resume/resume';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'resume', component: Resume },
  { path: '**', redirectTo: '' }
];