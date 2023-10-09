import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-asignaturas-profes',
  templateUrl: './asignaturas-profes.page.html',
  styleUrls: ['./asignaturas-profes.page.scss'],
})
export class AsignaturasProfesPage implements OnInit {

  listaAsignaturaJSON : any
  listaAsignatura : any

  constructor(private router: Router, private apiService : ApiService,
    private usuService : UsuarioService) { }

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

  detalleAsignatura(id : number) {
    let nav: NavigationExtras = {
      state: { id : id}  
    }
    this.router.navigate(['/home/asignaturas-profes/detalle-asignatura'],nav)
  }

}
