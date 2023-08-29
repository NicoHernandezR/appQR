import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cantante/cantante'; // Reemplaza con la URL real de tu API
  private apiListaAsignatura = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/alumno/listaAsignaturas/'
  private apiDetalleAsignatura = 'aaaaaaaaaaaa';
  private apiAsistencia = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asistencia/asistencia/'
  private apiAsitenciaAlumno = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignatura/asignaturaAlumno/'

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

  async detalleAsignatura(){
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

  async detalleAsistencia(id_asig : number){
    try {
      const respuesta = await fetch(this.apiAsistencia + this.usuService.inUsuario.id + '/' + id_asig);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log('datos')
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async detalleAsignaturaAlumno() {
    try {
      const respuesta = await fetch(this.apiAsitenciaAlumno + this.usuService.inUsuario.id);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log('datos')
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }


  }
