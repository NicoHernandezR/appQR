import { Component, OnInit } from '@angular/core';
import { asig_list } from './asignatura'
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-lista-asignatura',
  templateUrl: './lista-asignatura.page.html',
  styleUrls: ['./lista-asignatura.page.scss'],
})
export class ListaAsignaturaPage implements OnInit {

  asignaturas = [
    new asig_list(0,'Progra','003D'),
    new asig_list(1,'Base de Datos','005D'),
    new asig_list(2,'Etica','016D'),
    new asig_list(3,'Portafolio','006D'),
  ]

  listaAsignaturaJSON : any
  listaAsignatura : any

  constructor(private router: Router, private apiService : ApiService) { }

  async ngOnInit() {
    this.listaAsignaturaJSON = await this.apiService.obtenerListaAsignatura()
    console.log(this.listaAsignaturaJSON)
    this.listaAsignatura = this.listaAsignaturaJSON.items
    console.log(this.listaAsignatura)

  }

  verAsignatura(id:Number) {
    let nav: NavigationExtras = {
      state: { id : id}  
    }

    this.router.navigate(['/home/lista-asignatura/info-asignatura'],nav)
  }

}