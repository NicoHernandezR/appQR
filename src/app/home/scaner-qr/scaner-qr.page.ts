import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-scaner-qr',
  templateUrl: './scaner-qr.page.html',
  styleUrls: ['./scaner-qr.page.scss'],
})
export class ScanerQrPage implements OnInit, OnDestroy{

  scannedResult: any
  scaneando : string = ''
  confirmar : any
  nombresDias = new Map<number, string>([
    [0, 'Domingo'],
    [1, 'Lunes'],
    [2, 'Martes'],
    [3, 'Miércoles'],
    [4, 'Jueves'],
    [5, 'Viernes'],
    [6, 'Sábado']
  ]);

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({force:true});
      console.log("status")
      console.log(status)
      if (status.neverAsked || status.granted) {
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
      console.log("permission")
      if(!permission) {
        console.log("permission no")
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.scaneando = 'hidden'
      const result = await BarcodeScanner.startScan()
      console.log(result);
      if(result?.hasContent) {
        this.scannedResult = result.content;
        BarcodeScanner.showBackground()
        document.querySelector('body')?.classList.remove('scanner-active');
        this.scaneando = ''
        this.confirmar = this.actualizarAsistencia(this.scannedResult)
        this.confirmar = this.confirmar.mensaje
      }
    } catch(e) {
      console.log(e)
      this.stopScan();
      
    }
  }

  actualizarAsistencia(datos : string) {
    let datosJSON = JSON.parse(datos);
    const idAsignatura = datosJSON.id_asignatura;
    const idHora = datosJSON.id_hora;
    const fechaHoraActual = new Date();
    const diaSemana = fechaHoraActual.getDay();
    const hora = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();
    let diaActStr : string | undefined = ''
    diaActStr = this.nombresDias.get(diaSemana);
    const horaActStr = hora + ':' + minutos
    this.apiService.aumentarAsistencia(idAsignatura, horaActStr, diaActStr, idHora)


  }


  stopScan() {
    BarcodeScanner.showBackground();
    document.querySelector('body')?.classList.remove('scanner-active');
    BarcodeScanner.stopScan()
    this.scaneando = ''
  }

  ngOnDestroy(): void {
    this.stopScan()
  }

}
