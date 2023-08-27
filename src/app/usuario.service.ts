import { Injectable } from '@angular/core';
import { InUsuario } from './models/InUsuario';
import { Usuario } from './models/usuario';

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
  };


  constructor() { }



}
