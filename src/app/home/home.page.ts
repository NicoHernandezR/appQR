import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  data : any 
  detalle: any
  compDatos: boolean = false;
  email: string='';
  tipoUsuario:string='';
  usu=this.usuService.inUsu


  constructor( private usuService : UsuarioService, private router: Router,
    private apiService : ApiService, private actRoute: ActivatedRoute) {}

  irAsignaturas() {
    this.router.navigate(['home/lista-asignatura'])
  }

  irAsignaturasProfe() {
    this.router.navigate(['home/asignaturas-profes'])
  }

  irScannearQR() {
    this.router.navigate(['home/scaner-qr'])
  }

  generarQR() {
    this.router.navigate(['home/generar-qr'])
  }

  async llamarApi() {
    this.data = await this.apiService.obtenerDatosDeApi();
    console.log(this.data)
  }

  async ngOnInit() {
    console.log('Inicio OnInit del Home')
    this.usuService.cargadoMap.set(this.router.url, false)
    this.actRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.email = this.router.getCurrentNavigation()?.extras?.state?.['email'];
        this.tipoUsuario = this.router.getCurrentNavigation()?.extras?.state?.['tipoUsuario'];
      }
    })

    if (this.tipoUsuario === 'profesor') {
      this.detalle = await this.apiService.detalleProfesor(this.email);
    }else{
      this.detalle = await this.apiService.detalleAlumno(this.email);
    }
 
    this.detalle=this.detalle.items[0]
    this.usuService.autentificar(this.detalle, this.tipoUsuario)
    this.detalle = ''
    this.usuService.cargadoMap.set(this.router.url, true)
    console.log("this.usuService.cargadoMap.get(this.router.url)")
    console.log(this.usuService.cargadoMap.get(this.router.url))
    this.compDatos = true
    console.log('Final OnInit del Home')
  }

  ionViewWillEnter() {
    this.usuService.cargadoMap.set(this.router.url, true)
  }


}
