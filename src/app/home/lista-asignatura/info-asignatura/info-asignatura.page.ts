import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { asignatura } from './asignatura_detail';

@Component({
  selector: 'app-info-asignatura',
  templateUrl: './info-asignatura.page.html',
  styleUrls: ['./info-asignatura.page.scss'],
})
export class InfoAsignaturaPage implements OnInit {

  data: any

  asignaturas = [
    new asignatura(0,'Progra','003D'),
    new asignatura(1,'Base de Datos','005D'),
    new asignatura(2,'Etica','016D'),
    new asignatura(3,'Portafolio','006D'),
  ]

  asig: any



  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.actRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.['id'];
        //3
        this.asig = this.asignaturas[this.data]
      }
    })

   }



  ngOnInit() {
  }

}
