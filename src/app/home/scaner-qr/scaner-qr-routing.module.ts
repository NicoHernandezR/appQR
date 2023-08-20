import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanerQrPage } from './scaner-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ScanerQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanerQrPageRoutingModule {}
