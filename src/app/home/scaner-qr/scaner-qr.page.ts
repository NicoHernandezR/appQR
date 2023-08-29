import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scaner-qr',
  templateUrl: './scaner-qr.page.html',
  styleUrls: ['./scaner-qr.page.scss'],
})
export class ScanerQrPage implements OnInit {

  scannedResult: any

  constructor() { }

  ngOnInit() {
  }

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({force:true});
      if (status.granted) {
        return true;
      }
      return false;
    } catch(e) {
      console.log(e)
      return false;
    }
  }
 
  async scannearQR() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      const result = await BarcodeScanner.startScan()
      console.log(result);
      if(result?.hasContent) {
        this.scannedResult = result.content;
        BarcodeScanner.showBackground()
        document.querySelector('body')?.classList.remove('scanner-active');
        console.log(this.scannedResult)
      }
    } catch(e) {
      console.log(e)
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    document.querySelector('body')?.classList.remove('scanner-active');
    BarcodeScanner.stopScan()
  }
}
