import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoadDatatambahanPernyataanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-load-datatambahan-pernyataan',
  templateUrl: 'load-datatambahan-pernyataan.html',
})
export class LoadDatatambahanPernyataanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadDatatambahanPernyataanPage');
  }

}
