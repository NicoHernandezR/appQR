import { Component, OnInit,ElementRef, Renderer2  } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UsuarioService } from 'src/app/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  constructor(private actRoute: ActivatedRoute, private router: Router, 
    private apiService : ApiService, private usuService : UsuarioService,
    private elementRef: ElementRef, private renderer: Renderer2) {
  }

  id_asig : number = 0;
  alumnos_detalle : any;
  asignatura : any;
  datosCargados : boolean = false
  hashtable_div_detalle: { [key: string]: string } = {};


  async ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.id_asig = this.router.getCurrentNavigation()?.extras?.state?.['id'];
      }
    })
    this.alumnos_detalle = await this.apiService.detalleAsignaturaProfe(this.id_asig)
    this.asignatura = await this.apiService.asignatura(this.id_asig)
    this.alumnos_detalle = this.alumnos_detalle.items
    this.asignatura = this.asignatura.items[0]
    console.log(this.alumnos_detalle)
    this.actualizarHashtable()
    this.datosCargados = true;

    //this.alumnos_detalle = await this.apiService.detalleAsistencia(this.id_asig)
  }

  actualizarHashtable() {
    if (this.alumnos_detalle) {
      for (let i = 0; i < this.alumnos_detalle.length; i++) {
        let rut = this.alumnos_detalle[i].rut;
        this.hashtable_div_detalle[rut] = "detalles" + rut;
      }

    }
  }

  mostrarDetalles(rut : string){
    this.ocultarDetalle(rut)
    let itemvId = this.hashtable_div_detalle[rut]
    let itemDetalle = this.elementRef.nativeElement.querySelectorAll("." + itemvId);
    let itemTitle = this.elementRef.nativeElement.querySelector('#item' + rut)
    itemDetalle.forEach((elemento: any) => {
      this.renderer.removeClass(elemento, 'ion-hide');
    });
    itemTitle.setAttribute('lines', 'none');
  }

  ocultarDetalle(rut : string) {
    for (let i = 0; i < this.alumnos_detalle.length; i++) {
      let rut = this.alumnos_detalle[i].rut;
      let itemDetalle = this.elementRef.nativeElement.querySelectorAll(".detalles" + rut);
      itemDetalle.forEach((elemento: any) => {
        this.renderer.addClass(elemento, 'ion-hide')
        })
        let itemTitle = this.elementRef.nativeElement.querySelector('#item' + rut)
        itemTitle.setAttribute('lines', 'full');
      }
      

  }

}

