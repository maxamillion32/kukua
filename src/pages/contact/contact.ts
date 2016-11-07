import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestService} from '../../providers/rest/rest'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[RestService]
})
export class ContactPage {
  private people: any;

  constructor(public navCtrl: NavController, public restService:RestService) {
    this.loadPeople ();
  }

  loadPeople(){ 
    this.restService.load()
    .then(data => {
      this.people = data;
    });
  }


}
