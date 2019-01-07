import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoanDatadiriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loan-datadiri',
  templateUrl: 'loan-datadiri.html',
})
export class LoanDatadiriPage {
  serialDataDiri = {
    "data_diri":{
      "nama_lengkap_ktp": "",
      "nama_lengkap_akte": "",
      "nomor_ktp": "",
      "tempat_tgl_lahir": "",
      "kewarganegaraan": "",
      "jenis_kelamin": "",
      "status_pernikahan": "",
      "pendidikan_terakhir": "",
      "alamat_sekarang": "",
      "kota": "",
      "kodepos": "",
      "rt": "",
      "rw": "",
      "lama_tinggal": "",
      "telepon_rumah": "",
      "nomor_ponsel": "",
      "email": "",
      "nama_gadis_ibu": "",
      "npwp": "",
      "namalengkap_suami_istri": "",
      "no_ktp_suami_istri": "",
      "tempat_tinggal_suami_istri": "",
      "perjanjian_pisah_harta": ""
    }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanDatadiriPage');
  }

  btnNext() {
    this.navCtrl.parent.select(2);
  }
}
