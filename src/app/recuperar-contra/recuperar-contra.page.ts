import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  usuario : string = '';
  contra : any
  gmail : string = ''
  rut :  string = ''
  comprobante : any
  activar : boolean = false;
  nuevaPw : string = ''
  mensaje : any = ''

  constructor(private apiService : ApiService,
    private alertController: AlertController ) { }

  ngOnInit() {
  }

  isValido(): boolean {
    const emailPattern = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,4}/;
    const rutPattern = /[0-9]*/
    return emailPattern.test(this.gmail) && this.rut !== '';
  }

  isValidCambiar() {
    return this.nuevaPw !== '';
  }

  async cambiarContra(){
    if(this.gmail.includes('profesor')){ 
      this.mensaje = await this.apiService.cambiarPwProfesor(this.gmail, this.rut, this.nuevaPw)
    }else{
      this.mensaje = await this.apiService.cambiarPwAlumno(this.gmail, this.rut, this.nuevaPw)
    }

    this.mensaje = this.mensaje.mensaje;

    if(this.mensaje === 'Contraseña cambiada con exito') {
      this.gmail = ''
      this.rut = ''
      this.nuevaPw = ''
      this.activar = false
    } 
  

  }

  activarRecuperar() {
    return this.activar
  }

  async comprobar(){

    if(this.gmail.includes('profesor')){ 
      this.comprobante = await this.apiService.comprobarRecuperarProfesor(this.gmail, this.rut)
    }else{
      this.comprobante = await this.apiService.comprobarRecuperarAlumno(this.gmail, this.rut)
    }

    if (this.comprobante.items.length !== 0){
      this.activar = true
    }else{
      this.activar = false
      this.mensaje = 'El gmail o el rut son incorrectos.'
    }

  }

  async recuperar() {
    if (this.usuario.includes('profesor')) {
      this.contra = await this.apiService.recuperarProfe(this.usuario)
    }else{
      this.contra = await this.apiService.recuperarAlum(this.usuario)
    }

    if (this.contra.items.length === 0){
      this.contra = ''
      const alert = await this.alertController.create({
        header: '¡ERROR!',
        subHeader: 'Error al ingresar',
        message: 'El email no existe incorrectos!',
        buttons: ['OK'],
      });
  
      await alert.present();
      
      return;
    }

    this.contra = this.contra.items[0].contrasenia
    console.log(this.contra)
    
  }

}
