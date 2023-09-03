import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
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
  
  field: string = "";
 
  constructor(public navCtrl: NavController,private router: Router, 
    public toastController: ToastController, private apiService : ApiService, private loadingCtrl: LoadingController, private alertController: AlertController ) {
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
      const alert = await this.alertController.create({
        header: '¡ERROR!',
        subHeader: 'Error al ingresar',
        message: 'El email o la contraseña son incorrectos!',
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    }


    this.info_usuario = this.info_usuario.items[0]
    console.log(this.info_usuario)
    let nav: NavigationExtras = {
      state: { email : this.user.usuario}
    }
    this.router.navigate(['/home'],nav)

    const loading = await this.loadingCtrl.create({
      message: 'Cargando, Espere...',
      duration: 3000,
      keyboardClose: true,
      showBackdrop: true,
      spinner: "crescent" 
    });

    loading.present();

  }

  isValidEmail(): boolean {
    const emailPattern = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,4}/;
    return emailPattern.test(this.user.usuario);
  }

}
  
