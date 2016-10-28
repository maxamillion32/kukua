import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '@ionic/cloud-angular';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public name: string;
  private email: string;

  constructor(public navCtrl: NavController, public user:User) {
    this.getUserData ();
  }
  getUserData () {
    this.user.load().then(() => {
      this.email = this.user.details.email;
      this.name = this.user.details.name;
  // success!
    });
  }
  
  updateUserData () {
      this.user.set('name', this.name);    
      this.user.save();
  }
}
