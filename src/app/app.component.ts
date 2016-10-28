import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { WelcomePage } from '../pages/welcome/welcome';
import { Auth } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
   
  rootPage: any;
//  menuItems: Array<{title: string, component: any}>;
  menuItems: Array <any>;
  
  constructor(public auth: Auth, public platform: Platform) {

    this.menuItems = [
      { title: 'Profile', component: ProfilePage },
      { title: 'About', component: AboutPage },
      { title: 'Logout'}
    ];
    
    if (!this.auth.isAuthenticated()) 
      { this.rootPage = WelcomePage;}
    else 
      { this.rootPage = TabsPage;}

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      });
  }
   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title === "Logout") {
        this.auth.logout();
        this.nav.goToRoot(WelcomePage);      
    } else {
        this.nav.push(page.component);
    }
  }
}