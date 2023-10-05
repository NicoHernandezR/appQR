import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  horasAsignatura : any
  qrGenerado : boolean = false
  cargarHorasSelect : boolean = false
  dataQR : string = ''
  idAsig : number = 0;
  idHora : number = 0;

  constructor(private apiService : ApiService,
    private usuService : UsuarioService, private router: Router) { }

  async ngOnInit() {
    this.usuService.cargadoMap.set(this.router.url, false)
    this.listaAsignaturaJSON = await this.apiService.cargarAsignaturasProfe()
    console.log('Obteniendo los valores del api')
    this.usuService.listaAsignatura = this.listaAsignaturaJSON.items
    this.listaAsignatura = this.listaAsignaturaJSON.items
    console.log(this.usuService.listaAsignatura)
    this.usuService.cargadoMap.set(this.router.url, true)
    console.log("fin ngOnInit")
  }

  async cargarHoras(event: any) {

    this.idAsig = event.detail.value;

    this.horasAsignatura = await this.apiService.cargarHorasClases(this.idAsig);
    this.horasAsignatura = this.horasAsignatura.items
    this.cargarHorasSelect = true


  }

  async generarQR(event: any) {

    this.idHora = event.detail.value;

    //let respuesta = await this.apiService.aumentarClases(this.idAsig)
    console.log("idAsig")
    console.log(this.idAsig)

    this.dataQR = '{"id_asignatura" : ' + this.idAsig + ', "id_hora" : ' + this.idHora + '}'
    this.qrGenerado = true
  }

  limpiarQR() {
    this.dataQR = ''
    this.qrGenerado = false;
  }

}