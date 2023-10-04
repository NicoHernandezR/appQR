import { Injectable } from '@angular/core';
import { InUsuario } from './models/InUsuario';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  inUsuario : InUsuario = {
    id : 4,
    rut: 17654892,
    dv: "3",
    p_nombre: "Ana",
    s_nombre: "Isabel",
    ap_materno: "Díaz",
    ap_paterno: "Gutiérrez",
    fec_nac: "2004-10-12T00:00:00Z",
    gmail: "ana.diazg@example.com"
    ,
    tipoUsuario: ""
  };

  inUsu : InUsuario = {
    id : -1,
    rut: 0,
    dv: "",
    p_nombre: "",
    s_nombre: "",
    ap_materno: "",
    ap_paterno: "",
    fec_nac: "",
    gmail: "",
    tipoUsuario: ""
  }

  inUsuarioProfe : InUsuario = {
    id: 1,
    rut: 9530451,
    dv: "3",
    p_nombre: "Ariel",
    s_nombre: "Juan",
    ap_materno: "Albornoz",
    ap_paterno: "Cancino",
    fec_nac: "1980-03-30T00:00:00Z",
    gmail: "ari.cancino@profesor.duoc.cl"
    ,
    tipoUsuario: ""
  };

  listaAsignatura : any;

  constructor(private sessionService: SessionService) { }

  autentificar(user: any, tipoUsuario:string) {
    this.inUsu.id = user.id
    this.inUsu.p_nombre = user.p_nombre
    this.inUsu.ap_paterno = user.ap_paterno
    this.inUsu.gmail = user.gmail
    this.inUsu.tipoUsuario = tipoUsuario
    this.sessionService.saveSession(this.inUsu);
  }

  logout() {
    this.inUsu = {
      id : -1,
      rut: 0,
      dv: "",
      p_nombre: "",
      s_nombre: "",
      ap_materno: "",
      ap_paterno: "",
      fec_nac: "",
      gmail: "",
      tipoUsuario: ""
    }
    this.sessionService.clearSession();
  }

  isAuthenticated(): boolean {
    return this.sessionService.getSession() !== null;
  }

}
