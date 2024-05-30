import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'registro/estudiantes',
    loadComponent: () => import('./componentes/estudiantesform/estudiantesform.component')
  },
  {
    path:'',
    loadComponent: () => import('./componentes/inicio/inicio.component')
  },
  {
    path:'registro/actividades',
    loadComponent: ()=> import('./componentes/actividadesform/actividadesform.component')
  },
  {
    path:'registro/asignaturas',
    loadComponent: ()=> import('./componentes/asignaturasform/asignaturasform.component')
  },
  {
    path:'registro/asignaturas',
    loadComponent: ()=> import('./componentes/asignaturasform/asignaturasform.component')
  }

];
