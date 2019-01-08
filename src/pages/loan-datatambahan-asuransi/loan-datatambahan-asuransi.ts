import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoanDatatambahanPernyataanPage } from '../../pages/loan-datatambahan-pernyataan/loan-datatambahan-pernyataan';
  import { from } from 'rxjs/observable/from';

@IonicPage()
@Component({
  selector: 'page-loan-datatambahan-asuransi',
  templateUrl: 'loan-datatambahan-asuransi.html',
})
export class LoanDatatambahanAsuransiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadDatatambahanAsuransiPage');
  }

  public pernyataan(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(LoanDatatambahanPernyataanPage);
  }

}
