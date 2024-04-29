import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'registro',
    loadComponent: () => import('./componentes/estudiantesform/estudiantesform.component')
  }
];
