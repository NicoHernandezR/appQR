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
    this.actRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.email = this.router.getCurrentNavigation()?.extras?.state?.['email'];
        console.log("this.email")
        console.log(this.email)
      }
    })
    this.detalle = await this.apiService.detalleAlumno(this.email);
    this.detalle=this.detalle.items[0]
    console.log("this.detalle")
    console.log(this.detalle)
    this.compDatos = true

    
  }


}
