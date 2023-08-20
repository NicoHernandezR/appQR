import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAsignaturaPage } from './info-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAsignaturaPageRoutingModule {}
