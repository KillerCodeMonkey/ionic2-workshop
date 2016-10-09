import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubPage } from '../pages/sub/sub';
import { Modal } from '../components/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    SubPage,
    HomePage,
    Modal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubPage,
    HomePage,
    Modal
  ],
  providers: []
})
export class AppModule {}
