import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { asignatura } from './asignatura_detail';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-info-asignatura',
  templateUrl: './info-asignatura.page.html',
  styleUrls: ['./info-asignatura.page.scss'],
})
export class InfoAsignaturaPage implements OnInit {

  id_asig: number = 0;
  detalles_asig: any

  asignaturas = [
    new asignatura(0,'Progra','003D'),
    new asignatura(1,'Base de Datos','005D'),
    new asignatura(2,'Etica','016D'),
    new asignatura(3,'Portafolio','006D'),
  ]





  constructor(private actRoute: ActivatedRoute, private router: Router, 
      private apiService : ApiService) {
   }



  async ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.id_asig = this.router.getCurrentNavigation()?.extras?.state?.['id'];
      }
    })
    this.detalles_asig = await this.apiService.detalleAsistencia(this.id_asig)
    console.log(this.detalles_asig)
    this.detalles_asig = this.detalles_asig.items

  }

}
