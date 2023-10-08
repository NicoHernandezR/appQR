import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cantante/cantante'; // Reemplaza con la URL real de tu API
  private apiListaAsignatura = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/alumno/listaAsignaturas/'
  private apiAsistencia = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asistencia/asistencia/'
  private apiAsitenciaAlumno = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignatura/asignaturaAlumno/'
  private apiAsignaturasProfe = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignatura/asignaturasProfe/'
  private apiClasesAsignatura = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignaturaSemana/vincularAsignatura/'
  private apiDetalleAsignatura = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignatura/detalleAsignatura/';
  private apiAsignatura = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignatura/asignatura/'
  private apiComprobarAlumno = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/alumno/comprobarAlumno/'
  private apiComprobarProfesor = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/profesor/comprobarUsuario/'
  private apiDetalleAlumno = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/alumno/detalleAlumno/'
  private apiDetalleProfesor = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/profesor/detalleProfesor/'
  private apiAumentarClasesHechas = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asignatura/asignatura/'
  private apiAumentarAsistencia = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/asistencia/aumentarAsistencia'
  private apiRecuperarProfe = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/profesor/recuperar/'
  private apiRecuperarAlum = 'https://g8293fa264833e2-appqrapex.adb.sa-saopaulo-1.oraclecloudapps.com/ords/usu_api/alumno/recuperar/'

 
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
      const respuesta = await fetch(this.apiListaAsignatura + this.usuService.inUsu.id);

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
      const respuesta = await fetch(this.apiListaAsignatura + this.usuService.inUsu.id);

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
      const respuesta = await fetch(this.apiAsistencia + this.usuService.inUsu.id + '/' + id_asig);
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
      const respuesta = await fetch(this.apiAsitenciaAlumno + this.usuService.inUsu.id);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log('datos')
      return datos;
    } catch (error) {
      return error
      console.error('Error:', error);
    }
  }

  async cargarAsignaturasProfe() {
    try {
      const respuesta = await fetch(this.apiAsignaturasProfe + this.usuService.inUsu.id);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log('datos')
      return datos;
    } catch (error) {
    }
  }

  async cargarHorasClases(id : number) {
    try {
      const respuesta = await fetch(this.apiClasesAsignatura + id);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
    }
  }

  async detalleAsignaturaProfe(id : number) {
    try {
      const respuesta = await fetch(this.apiDetalleAsignatura + id);
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

  async asignatura(id: number) {
    try {
      const respuesta = await fetch(this.apiAsignatura + id);
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

  async aumentarClases(id : number) {
    try {
      const url = this.apiAumentarClasesHechas + id;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Especifica el tipo de contenido del cuerpo
        },
        body: JSON.stringify({}), // Puedes enviar un objeto vacío si no necesitas enviar datos específicos en el cuerpo
      });
  
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }
  
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async aumentarAsistencia(id_asignatura : number, hora_alum : string, 
    dia_asig : string | undefined, id_hora : number) {
    try {
      const url = this.apiAumentarAsistencia;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Especifica el tipo de contenido del cuerpo
        },
        body: JSON.stringify({
          "id_asignatura" : id_asignatura,
          "hora_alum" : hora_alum,
          "dia_asig" : dia_asig,
          "id_alumno" : this.usuService.inUsu.id,
          "id_hora" : id_hora
        }), // Puedes enviar un objeto vacío si no necesitas enviar datos específicos en el cuerpo
      });
  
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }
  
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async comprobarAlumno(gmail : string, contrasenia : string) {
    try {
      const respuesta = await fetch(this.apiComprobarAlumno + gmail + '/' + contrasenia);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log(datos)
      console.log('datos')
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async detalleAlumno(gmail: string){
    try{
      const respuesta = await fetch(this.apiDetalleAlumno + gmail);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log(datos)
      console.log('datos')
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
    }
  
  async comprobarProfesor(gmail : string, contrasenia : string) {
    try {
      const respuesta = await fetch(this.apiComprobarProfesor + gmail + '/' + contrasenia);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log(datos)
      console.log('datos')
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async detalleProfesor(gmail: string){
    try{
      const respuesta = await fetch(this.apiDetalleProfesor + gmail);
        console.log('respuesta')
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const datos = await respuesta.json();
        console.log(datos)
        console.log('datos')
        return datos;
      } catch (error) {
        console.error('Error:', error);
      }
      }

  async recuperarProfe(gmail: string){
    try{
      const respuesta = await fetch(this.apiRecuperarProfe + gmail);
      console.log('respuesta')
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await respuesta.json();
      console.log(datos)
      console.log('datos')
      return datos;
    } catch (error) {
      console.error('Error:', error);
    }
    }      

  async recuperarAlum(gmail: string){
      try{
        const respuesta = await fetch(this.apiRecuperarAlum + gmail);
        console.log('respuesta')
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const datos = await respuesta.json();
        console.log(datos)
        console.log('datos')
        return datos;
      } catch (error) {
        console.error('Error:', error);
      }
      }    
    }

