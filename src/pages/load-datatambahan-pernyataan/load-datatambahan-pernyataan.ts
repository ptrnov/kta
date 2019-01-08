import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppformAuthenticationPage } from '../../pages/appform-authentication/appform-authentication';
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

  public formAuth(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(AppformAuthenticationPage);
  }
}
