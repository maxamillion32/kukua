import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { PostsPage } from '../pages/posts/posts';
import { PostDetailsPage } from '../pages/post-details/post-details';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';


import { RestService } from '../providers/rest/rest';
import { GetPosts } from '../providers/rest/getposts';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '54d42a31'
  }
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MapPage,
    PostsPage,
    PostDetailsPage,
    ProfilePage,
    SignupPage,
    TabsPage,
    WelcomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MapPage,
    PostsPage,
    PostDetailsPage,
    ProfilePage,
    SignupPage,
    TabsPage,
    WelcomePage
  ],
  providers: [
    RestService,
    GetPosts
    ]
})
export class AppModule {
  
}
