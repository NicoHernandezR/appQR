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

  constructor(private apiService : ApiService,
    private alertController: AlertController ) { }

  ngOnInit() {
  }

  isValidEmail(): boolean {
    const emailPattern = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,4}/;
    return emailPattern.test(this.usuario);
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
