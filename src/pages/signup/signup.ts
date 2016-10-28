import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {  private email: string;
  private password: string;
  private error: string;
  

  constructor(public navCtrl: NavController, public auth: Auth, public user: User, 
              public alertCtrl: AlertController) {}

  signup () {
      let details: UserDetails = {'email': this.email, 'password': this.password};
      this.auth.signup(details).then(() => {
        console.log ('User is now registred');
        // `this.user` is now registered
      },(err: IDetailedError<string[]>) => {
        for (let e of err.details) {
        this.error = e;  
        console.log ('Other errors ' + e);
        this.showAlert ();
        }
      });
  }

    showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: this.email +'Cannot log in',
      message: this.error,
      buttons: ['OK']
    });
    alert.present();
  }

}
