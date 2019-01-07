import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProductPage } from '../../pages/app-product/app-product';

@IonicPage()
@Component({
  selector: 'page-prdinfo-crossellscrloan',
  templateUrl: 'prdinfo-crossellscrloan.html',
})
export class PrdinfoCrossellscrloanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdinfoCrossellscrloanPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppProductPage);
  }
}
