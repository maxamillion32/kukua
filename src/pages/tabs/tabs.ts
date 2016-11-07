import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';
import { PostsPage } from '../posts/posts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PostsPage;
  tab3Root: any = MapPage;
  tab4Root: any = ContactPage;
  tab5Root: any = AboutPage;
  

  constructor() {

  }
}
