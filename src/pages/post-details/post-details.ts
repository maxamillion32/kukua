import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PostDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html'
})
export class PostDetailsPage {
  selectedPost: any;
  
  constructor(public navCtrl: NavController, private navParams: NavParams) {
     this.selectedPost = navParams.get('post');
  
  }

    ionViewDidLoad() {
      console.log('Hello PostDetail Page');
    }
}
