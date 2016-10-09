import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Sub page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html'
})
export class SubPage {
  id: number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
  }

}
