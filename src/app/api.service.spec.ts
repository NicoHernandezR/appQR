import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { UsuarioService } from './usuario.service';

describe('ApiService', () => {
  let service: ApiService;
  let usuService: UsuarioService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
    usuService = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //
  it('detalleAsignatura should return an array with objects', async () => {
    usuService.inUsu.id = 1;
    let resultado = await service.detalleAsignatura()
    let resultadoList = resultado.items
    const expectedArray = [
      { nombre: 'Base de Datos', seccion: '005D', p_nombre: 'Ariel', ap_paterno: 'Cancino', id_asignatura: 1 },
      { nombre: 'Química', seccion: '012D', p_nombre: 'Mariana', ap_paterno: 'Castro', id_asignatura: 6 },
      { nombre: 'Economía', seccion: '015D', p_nombre: 'Diego', ap_paterno: 'González', id_asignatura: 7 },
      { nombre: 'Filosofía', seccion: '030D', p_nombre: 'Catalina', ap_paterno: 'Pérez', id_asignatura: 15 },
      { nombre: 'Medicina', seccion: '007V', p_nombre: 'Valentina', ap_paterno: 'Ramírez', id_asignatura: 19 },
      { nombre: 'Deporte', seccion: '010V', p_nombre: 'Felipe', ap_paterno: 'Castro', id_asignatura: 16 }
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('detalleAsignatura should return an empty array', async () => {
    usuService.inUsu.id = 100;
    let resultado = await service.detalleAsignatura()
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('detalleAsignaturaAlumno should return an array with objects', async () => {
    usuService.inUsu.id = 1;
    let resultado = await service.detalleAsignaturaAlumno()
    let resultadoList = resultado.items
    const expectedArray = [
        {"cant_asis": 4,"id_asignatura": 1,"porc_asis": 66.67,"clases_hechas": 6,"asig_nom": "Base de Datos","seccion": "005D","pro_nom": "Ariel Cancino"},
        {"cant_asis": 9,"id_asignatura": 6,"porc_asis": 81.82,"clases_hechas": 11,"asig_nom": "Química","seccion": "012D","pro_nom": "Mariana Castro"},
        {"cant_asis": 1,"id_asignatura": 7,"porc_asis": 100,"clases_hechas": 1,"asig_nom": "Economía","seccion": "015D","pro_nom": "Diego González"},
        {"cant_asis": 6,"id_asignatura": 15,"porc_asis": 33.33,"clases_hechas": 18,"asig_nom": "Filosofía","seccion": "030D","pro_nom": "Catalina Pérez"},
        {"cant_asis": 3,"id_asignatura": 19,"porc_asis": 11.54,"clases_hechas": 26,"asig_nom": "Medicina","seccion": "007V","pro_nom": "Valentina Ramírez"},
        {"cant_asis": 8,"id_asignatura": 16,"porc_asis": 80,"clases_hechas": 10,"asig_nom": "Deporte","seccion": "010V","pro_nom": "Felipe Castro"}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('detalleAsignaturaAlumno should return an empty array', async () => {
    usuService.inUsu.id = 100;
    let resultado = await service.detalleAsignaturaAlumno()
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('cargarAsignaturasProfe should return an array with objects', async () => {
    usuService.inUsu.id = 1;
    let resultado = await service.cargarAsignaturasProfe()
    let resultadoList = resultado.items
    const expectedArray = [
      {"id_asignatura": 2,"nombre": "Programacion","seccion": "005D","max_alumnos": 30,"total_clases": 20,"profesor_id_profesor": 1},
    {"id_asignatura": 1,"nombre": "Base de Datos","seccion": "005D","max_alumnos": 30,"total_clases": 20,"profesor_id_profesor": 1}];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('cargarAsignaturasProfe should return an empty array', async () => {
    usuService.inUsu.id = 100;
    let resultado = await service.cargarAsignaturasProfe()
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('cargarHorasClases should return an array with objects', async () => {
    let resultado = await service.cargarHorasClases(1)
    let resultadoList = resultado.items
    const expectedArray = [
        {"dia_nombre": "Viernes","hora_ini": "14:00","hora_fin": "16:00","id": 1},
        {"dia_nombre": "Martes","hora_ini": "10:00","hora_fin": "14:00","id": 13},
        {"dia_nombre": "Sábado","hora_ini": "10:30","hora_fin": "12:00","id": 23},
        {"dia_nombre": "Lunes","hora_ini": "09:00","hora_fin": "10:30","id": 32}
  ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('cargarHorasClases should return an empty array', async () => {
    let resultado = await service.cargarHorasClases(100)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('detalleAsignaturaProfe should return an array with objects', async () => {
    let resultado = await service.detalleAsignaturaProfe(1)
    let resultadoList = resultado.items
    const expectedArray = [
      {"cant_asis":1,"rut":"21456789-K","alum_nom":"Laura Silva","porc_asis":17},
      {"cant_asis":2,"rut":"20659874-3","alum_nom":"Mariana Rodríguez","porc_asis":33},
      {"cant_asis":4,"rut":"21508955-K","alum_nom":"Nicolas Hernandez","porc_asis":67},
      {"cant_asis":1,"rut":"22213456-0","alum_nom":"Roberto González","porc_asis":17},
      {"cant_asis":2,"rut":"18954321-6","alum_nom":"Camila López","porc_asis":33}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('detalleAsignaturaProfe should return an empty array', async () => {
    let resultado = await service.detalleAsignaturaProfe(199)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('comprobarAlumno should return an array with objects', async () => {
    let gmail = 'nic.hernandezr@duocuc.cl'
    let pw = 'nic.her1'
    let resultado = await service.comprobarAlumno(gmail, pw)
    let resultadoList = resultado.items
    const expectedArray = [
      {"id":1,"p_nombre":"Nicolas","ap_paterno":"Hernandez","rut":21508955,"dv":"K","gmail":"nic.hernandezr@duocuc.cl"}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('comprobarAlumno should return an empty array', async () => {
    let gmail = 'nic.hernandezr@duocuc.l'
    let pw = 'nic.her1'
    let resultado = await service.comprobarAlumno(gmail, pw)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('detalleAlumno should return an array with objects', async () => {
    let gmail = 'nic.hernandezr@duocuc.cl'
    let resultado = await service.detalleAlumno(gmail)
    let resultadoList = resultado.items
    const expectedArray = [
      {"p_nombre":"Nicolas","ap_paterno":"Hernandez","gmail":"nic.hernandezr@duocuc.cl","id":1}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('detalleAlumno should return an empty array', async () => {
    let gmail = 'nic.hernandezr@duocuc.l'
    let resultado = await service.detalleAlumno(gmail)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('comprobarProfesor should return an array with objects', async () => {
    let gmail = 'gonzalo.hernandez@profesor.duoc.cl'
    let pw = 'gon.sil14'
    let resultado = await service.comprobarProfesor(gmail, pw)
    let resultadoList = resultado.items
    const expectedArray = [
      {"id":14,"p_nombre":"Gonzalo","ap_paterno":"Silva","rut":6942058,"dv":"6","gmail":"gonzalo.hernandez@profesor.duoc.cl"}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('comprobarProfesor should return an empty array', async () => {
    let gmail = 'gonzalo.hernandez@profesor.duoc.c'
    let pw = 'gon.sil14'
    let resultado = await service.comprobarProfesor(gmail, pw)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('detalleProfesor should return an array with objects', async () => {
    let gmail = 'gonzalo.hernandez@profesor.duoc.cl'
    let resultado = await service.detalleProfesor(gmail)
    let resultadoList = resultado.items
    const expectedArray = [
      {"p_nombre":"Gonzalo","ap_paterno":"Silva","gmail":"gonzalo.hernandez@profesor.duoc.cl","id":14}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('detalleProfesor should return an empty array', async () => {
    let gmail = 'gonsasdadzalo.hernandez@profesor.duoc.cl'
    let resultado = await service.detalleProfesor(gmail)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('comprobarRecuperarAlumno should return an array with objects', async () => {
    let gmail = 'nic.hernandezr@duocuc.cl'
    let rut = '21508955'
    let resultado = await service.comprobarRecuperarAlumno(gmail, rut)
    let resultadoList = resultado.items
    const expectedArray = [
      {"gmail":"nic.hernandezr@duocuc.cl"}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('comprobarRecuperarAlumno should return an empty array', async () => {
    let gmail = 'gonsasdadzalo.hernandez@profesor.duoc.cl'
    let rut = '21508953'
    let resultado = await service.comprobarRecuperarAlumno(gmail, rut)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
  it('comprobarRecuperarProfesor should return an array with objects', async () => {
    let gmail = 'gonzalo.hernandez@profesor.duoc.cl'
    let rut = '6942058'
    let resultado = await service.comprobarRecuperarProfesor(gmail, rut)
    let resultadoList = resultado.items
    const expectedArray = [
      {"gmail":"gonzalo.hernandez@profesor.duoc.cl"}
    ];

    expect(resultadoList).toEqual(expectedArray);
  });

  it('comprobarRecuperarProfesor should return an empty array', async () => {
    let gmail = 'gonsasdadzalo.hernandez@profesor.duoc.cl'
    let rut = '21508953'
    let resultado = await service.comprobarRecuperarProfesor(gmail, rut)
    let resultadoList = resultado.items

    expect(resultadoList).toEqual([]);
  });

  //
});
