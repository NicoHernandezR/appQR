import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAsignaturaPage } from './lista-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAsignaturaPage
  },
  {
    path: 'info-asignatura',
    loadChildren: () => import('./info-asignatura/info-asignatura.module').then( m => m.InfoAsignaturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAsignaturaPageRoutingModule {}
