import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'scaner-qr',
    loadChildren: () => import('./scaner-qr/scaner-qr.module').then( m => m.ScanerQrPageModule)
  },
  {
    path: 'lista-asignatura',
    loadChildren: () => import('./lista-asignatura/lista-asignatura.module').then( m => m.ListaAsignaturaPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },  {
    path: 'asignaturas-profes',
    loadChildren: () => import('./asignaturas-profes/asignaturas-profes.module').then( m => m.AsignaturasProfesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
