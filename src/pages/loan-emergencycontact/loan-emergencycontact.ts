import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-loan-emergencycontact',
  templateUrl: 'loan-emergencycontact.html',
})
export class LoanEmergencycontactPage {

  serialDataEmergency = {
    "data_emergency":{
      "nama": "",
      "hubungan": "",
      "alamat_tinggal_sekarang": "",
      "kota": "",
      "kodepos": "",
      "telepon_rumah": "",
      "nomor_ponsel": ""
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanEmergencycontactPage');
  }

  btnNext() {
    this.navCtrl.parent.select(3);
  }

}
