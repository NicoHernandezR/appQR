import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  
  constructor(private usuService : UsuarioService,private router: Router) {}

  usu = this.usuService.inUsu
  

  ngOnInit() {

  }

  showSidebar() {
    this.usu = this.usuService.inUsu
    console.log(this.usu)
    return this.router.url !== '/login';
  }

  cerrarSesion() {
    this.usuService.logout()
    this.router.navigate(['login'])
  }

  cargado() {
    let url = this.router.url
    if (!this.usuService.cargadoMap.has(url)) {
      console.log("Solo deberia entrar el login y el recuperar")
      return true
    }
    return this.usuService.cargadoMap.get(url)

  }
}
