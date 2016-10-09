import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Camera, StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage = HomePage;
  imgSrc: string;

  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
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
