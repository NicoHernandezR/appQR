import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAsignaturaPageRoutingModule } from './lista-asignatura-routing.module';

import { ListaAsignaturaPage } from './lista-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAsignaturaPageRoutingModule
  ],
  declarations: [ListaAsignaturaPage]
})
export class ListaAsignaturaPageModule {}
