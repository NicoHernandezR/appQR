import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasProfesPageRoutingModule } from './asignaturas-profes-routing.module';

import { AsignaturasProfesPage } from './asignaturas-profes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasProfesPageRoutingModule
  ],
  declarations: [AsignaturasProfesPage]
})
export class AsignaturasProfesPageModule {}
