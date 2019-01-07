import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-loan-pekerjaan-penghasilan',
  templateUrl: 'loan-pekerjaan-penghasilan.html',
})
export class LoanPekerjaanPenghasilanPage {
  serialDataPenghasilan = {
    "data_penghasilan":{
      "pekerjaan": "",
      "status_karyawan": "",
      "bidang_usaha": "",
      "alamat_kantor": "",
      "kota": "",
      "kodepos": "",
      "telpon_kantor": "",
      "nik": "",
      "jabatan": "",
      "lama_usaha_kerja": "",
      "jumlah_karyawan": "",
      "penghasilankotor_pertahun": "",
      "penghasilantambahan_pertahun": ""
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanPekerjaanPenghasilanPage');
  }

  btnNext() {
    this.navCtrl.parent.select(4);
  }
}
