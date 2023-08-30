import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasProfesPage } from './asignaturas-profes.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasProfesPage
  },
  {
    path: 'detalle-asignatura',
    loadChildren: () => import('./detalle-asignatura/detalle-asignatura.module').then( m => m.DetalleAsignaturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasProfesPageRoutingModule {}
