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
  };

  listaAsignatura : any;

  constructor() { }



}
