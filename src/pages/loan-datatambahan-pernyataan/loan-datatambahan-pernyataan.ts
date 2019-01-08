import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppformAuthenticationPage } from '../../pages/appform-authentication/appform-authentication';

@IonicPage()
@Component({
  selector: 'page-loan-datatambahan-pernyataan',
  templateUrl: 'loan-datatambahan-pernyataan.html',
})
export class LoanDatatambahanPernyataanPage {

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