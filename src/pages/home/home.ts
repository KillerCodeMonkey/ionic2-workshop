import { Component, ViewChild } from '@angular/core';

import { Content, ModalController, NavController } from 'ionic-angular';
import { SubPage } from './../sub/sub';
import { Modal } from './../../components/modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  SubPage = SubPage;
  params = {
    id: 1
  };

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {

  }

  goToSub() {
    this.navCtrl.push(SubPage, {
      id: 1
    }).then(() => {
      console.log('Seitenwechsel abgeschlossen');
    });
  }

  openModal() {
    const modal = this.modalCtrl.create(Modal, { additional: true });

    modal.present();
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}
