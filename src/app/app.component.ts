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
    return this.router.url !== '/login';
  }

  cerrarSesion() {
    this.usuService.logout()
    this.router.navigate(['login'])
  }
}
