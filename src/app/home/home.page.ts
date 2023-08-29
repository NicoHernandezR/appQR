import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data : any 


  constructor( private usuService : UsuarioService, private router: Router,
    private apiService : ApiService) {}

  irAsignaturas() {
    this.router.navigate(['home/lista-asignatura'])
  }

  irScannearQR() {
    this.router.navigate(['home/scaner-qr'])
  }

  async llamarApi() {
    this.data = await this.apiService.obtenerDatosDeApi();
    console.log(this.data)
  }


}
