import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoadDatatambahanAsuransiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-load-datatambahan-asuransi',
  templateUrl: 'load-datatambahan-asuransi.html',
})
export class LoadDatatambahanAsuransiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadDatatambahanAsuransiPage');
  }

}
