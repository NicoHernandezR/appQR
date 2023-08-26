import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';


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

  
  field: string = "";
  constructor(public navCtrl: NavController,private router: Router, public toastController: ToastController) {
    this.usuarios = [this.user.usuario];

   }

  ngOnInit() {
  }

  aceptar() {
    if (this.validateModel(this.user)) {
      this.presentToast("Bienvenido " + this.user.usuario);
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user 
        }
      };
      this.router.navigate(['home.page.hmtl'], navigationExtras); 
    }else{
      this.presentToast("Falta ingresar: "+this.field, 4500);
    }


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

}
