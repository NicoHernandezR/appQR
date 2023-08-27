import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cantante/cantante'; // Reemplaza con la URL real de tu API
  private apiListaAsignatura = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/alumno/listaAsignaturas/'
  private apiDetalleAsignatura = '';

  constructor(private usuService : UsuarioService) {}

  async obtenerDatosDeApi() {
    try {
      const respuesta = await fetch(this.apiUrl);

      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async obtenerListaAsignatura() {
    try {
      const respuesta = await fetch(this.apiListaAsignatura + this.usuService.inUsuario.id);

      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async detalleAsignatura(id : number){
    try {
      const respuesta = await fetch(this.apiListaAsignatura + this.usuService.inUsuario.id);

      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }


  }
