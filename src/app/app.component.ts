import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { Camera, StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { SubPage } from '../pages/sub/sub';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage = HomePage;
  imgSrc: string;
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  goToSub() {
    this.nav.push(SubPage);
  }

  takePicture() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then(imageData => {
        this.imgSrc = 'data:image/jpeg;base64,' + imageData;
      })
    });
  }
}
