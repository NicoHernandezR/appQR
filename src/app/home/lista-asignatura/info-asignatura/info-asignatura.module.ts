import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAsignaturaPageRoutingModule } from './info-asignatura-routing.module';

import { InfoAsignaturaPage } from './info-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAsignaturaPageRoutingModule
  ],
  declarations: [InfoAsignaturaPage]
})
export class InfoAsignaturaPageModule {}
