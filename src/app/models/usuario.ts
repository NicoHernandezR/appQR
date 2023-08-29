export class Usuario {
    id_usuario: number;
    nombre_usuario: string;
    tipo_usuario: string;
  
    constructor(id: number, nombre: string, tipo: string) {
      this.id_usuario = id;
      this.nombre_usuario = nombre;
      this.tipo_usuario = tipo;
    }
  }