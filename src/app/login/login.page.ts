import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    usuario: "",
    password: ""
  }
  usuarios: string[];
  info_usuario : any;
  email: string = ''
  
  field: string = "";
  constructor(public navCtrl: NavController,private router: Router, 
    public toastController: ToastController, private apiService : ApiService ) {
    this.usuarios = [this.user.usuario];

   }

  ngOnInit() {
  }

  async aceptar() {
    console.log(this.user.usuario)
    console.log(this.user.password)
    this.info_usuario = await this.apiService.comprobarAlumno(this.user.usuario, this.user.password)

    console.log(this.info_usuario.items.length)

    if (this.info_usuario.items.length === 0){
      return;
    }

    this.info_usuario = this.info_usuario.items[0]
    console.log(this.info_usuario)
    this.router.navigate(['/home'])

  }
  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }
  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }
  isValidEmail(): boolean {
    const emailPattern = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,4}/;
    return emailPattern.test(this.email);
  }
}
  
