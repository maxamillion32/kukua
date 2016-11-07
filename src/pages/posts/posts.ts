import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetPosts} from '../../providers/rest/getposts';
import { PostDetailsPage} from '../post-details/post-details';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
  providers:[GetPosts]
})

export class PostsPage {
  private posts: any;
  private selectedPost: any;
  private fromPage:number = 1;

  constructor( public navCtrl: NavController, public navParams: NavParams,  public getPosts: GetPosts) {
     this.selectedPost = navParams.get('post');
    this.loadPosts ();
  }

  loadPosts(){ 
    this.getPosts.load(this.fromPage)
    .then(data => {
      this.posts = data;
      });
  }
  

  doInfinite(infiniteScroll:any) {
    this.fromPage++;
    this.getPosts.load(this.fromPage)
    .then(data => {
      for (let i in data) { 
        this.posts.push (data [i] );
        infiniteScroll.complete();
        }
    }).catch (() => {
        infiniteScroll.complete();
      });
    }
   
 
  postSelected (event, post) {
    this.navCtrl.push(PostDetailsPage, {
      post: post
    });
  }


}
