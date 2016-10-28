import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { Geolocation } from 'ionic-native';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import {Secret} from '../../app/secret';
/* 

  Thanks to https://github.com/dobrud/typed-mapbox-gl for install mapboxgl from npm and typed defintions
  Add  this to index.html:
    <link href='https://api.mapbox.com/mapbox-gl-js/v0.25.0/mapbox-gl.css' rel='stylesheet' />

*/

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
  private lat: number;
  private long: number;
  
  constructor(navCtrl: NavController) {
  }
 
  ngOnInit() { this.loadMap(); }

  loadMap(){
    
    let secret = new Secret();
    mapboxgl.accessToken = secret.getSecret();
  /* 
  Get current position from ionic cordova Geolocation plugin (cordova-plugin-geolocation must be installed)
  Create the map 
  Add controls to the map 
  */ 
    Geolocation.getCurrentPosition().then((position) => {
      this.long =  position.coords.longitude;
      this.lat =  position.coords.latitude;

      let map = new mapboxgl.Map ({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v9',
      center: [this.long, this.lat],
      zoom: 15,
      attributionControl: true
      });

      map.addControl(new mapboxgl.GeolocateControl({position: 'top-left'}));

    }
    , (error) => {
        alert('code: ' + error.code    + '\n' + 'message: ' + error.message + '\n');

    });
  }
}