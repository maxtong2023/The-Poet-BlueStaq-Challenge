import { Routes } from '@angular/router';
import { Poem } from './poem/poem';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'poem', component: Poem },
  { path: '**', redirectTo: '' },
];