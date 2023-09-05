import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private usuService : UsuarioService) {}

  usu = this.usuService.inUsu
}
