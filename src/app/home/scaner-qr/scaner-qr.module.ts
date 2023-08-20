import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanerQrPageRoutingModule } from './scaner-qr-routing.module';

import { ScanerQrPage } from './scaner-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanerQrPageRoutingModule
  ],
  declarations: [ScanerQrPage]
})
export class ScanerQrPageModule {}
