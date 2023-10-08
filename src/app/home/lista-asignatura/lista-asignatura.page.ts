import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { asig_list } from './asignatura'
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UsuarioService } from 'src/app/usuario.service';


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
  modal_asig : number = -1;
  hashtable_div_detalle: { [key: number]: string } = {};

  constructor(private router: Router, private apiService : ApiService,
    private elementRef: ElementRef, private renderer: Renderer2,
    private usuService: UsuarioService) { }

  async ngOnInit() {
    this.usuService.cargadoMap.set(this.router.url, false)
    this.listaAsignatura = await this.apiService.detalleAsignaturaAlumno()
    console.log('Obteniendo los valores del api')
    this.listaAsignatura = this.listaAsignatura.items
    console.log(this.listaAsignatura)
    console.log("fin ngOnInit")
    this.usuService.cargadoMap.set(this.router.url, true)
    this.actualizarHashtable()
    
  }


  actualizarHashtable() {
    if (this.listaAsignatura) {
      for (let i = 0; i < this.listaAsignatura.length; i++) {
        let idAsignatura = this.listaAsignatura[i].id_asignatura;
        this.hashtable_div_detalle[idAsignatura] = "detalles" + idAsignatura;
      }

    }
  }

  activarModal(asig : number) {

  }

  desactivarModal() {
    this.modal_asig = -1
  }

  verAsignatura(id:number) {
   
    let nav: NavigationExtras = {
      state: { id : id}  
    }
    console.log(typeof(id))

    this.router.navigate(['/home/lista-asignatura/info-asignatura'],nav)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  mostrarDetalles(id : number){
    this.ocultarDetalle(id)
    let itemvId = this.hashtable_div_detalle[id]
    let itemDetalle = this.elementRef.nativeElement.querySelectorAll("." + itemvId);
    let itemTitle = this.elementRef.nativeElement.querySelector('#item' + id)
    itemDetalle.forEach((elemento: any) => {
      this.renderer.removeClass(elemento, 'ion-hide');
      console.log('remove ion-hide')
    });
    itemTitle.setAttribute('lines', 'none');
  }

  ocultarDetalle(id : number) {
    for (let i = 0; i < this.listaAsignatura.length; i++) {
      let idAsignatura = this.listaAsignatura[i].id_asignatura;
      let itemDetalle = this.elementRef.nativeElement.querySelectorAll(".detalles" + idAsignatura);
      itemDetalle.forEach((elemento: any) => {
        this.renderer.addClass(elemento, 'ion-hide')
        console.log('add ion-hide')
        })
        let itemTitle = this.elementRef.nativeElement.querySelector('#item' + idAsignatura)
        itemTitle.setAttribute('lines', 'full');
      }
      

  }

  cargado() {
    return false
  }

}