import { Component } from '@angular/core';

import { ViewController, NavParams }  from 'ionic-angular';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class Modal {

  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    console.log('Hello Modal Component', navParams.get('additional'));
    this.text = 'Hello World';
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
