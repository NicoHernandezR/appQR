import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  listaAsignaturaJSON : any
  listaAsignatura : any
  qrGenerado : boolean = false
  dataQR : string = ''

  constructor(private apiService : ApiService,
    private usuService : UsuarioService) { }

  async ngOnInit() {
    this.listaAsignaturaJSON = await this.apiService.cargarAsignaturasProfe()
    console.log('Obteniendo los valores del api')
    this.usuService.listaAsignatura = this.listaAsignaturaJSON.items
    this.listaAsignatura = this.listaAsignaturaJSON.items
    console.log(this.usuService.listaAsignatura)
    console.log("fin ngOnInit")
  }

  generarQR(event: any) {
    const idAsig = event.detail.value;

    if (idAsig === 'Seleccionado') {
      this.qrGenerado = false;
      return;
    }

    this.dataQR = '{"id_asignatura" : ' + idAsig + '}'
    this.qrGenerado = true
  }

  limpiarQR() {
    this.dataQR = ''
    this.qrGenerado = false;
  }

}
