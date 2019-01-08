import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadDatatambahanPernyataanPage } from '../../pages/load-datatambahan-pernyataan/load-datatambahan-pernyataan';
  import { from } from 'rxjs/observable/from';

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

  public pernyataan(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(LoadDatatambahanPernyataanPage);
  }

}
