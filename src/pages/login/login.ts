import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Auth, UserDetails } from '@ionic/cloud-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  private form:any = {};
  private error:string;

  constructor(public navCtrl: NavController, public auth: Auth, public alertCtrl: AlertController){
  }

  signin () {
      let details: UserDetails = {'email': this.form.email, 'password': this.form.password};
      
      this.auth.login('basic', details).then(() => {
          this.navCtrl.setRoot(TabsPage);
        }, (err) => {
          this.error = err.message;
          this.showAlert ();
                });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: this.form.email +'Cannot log in',
      message: this.error,
      buttons: ['OK']
    });
    alert.present();
  }

}