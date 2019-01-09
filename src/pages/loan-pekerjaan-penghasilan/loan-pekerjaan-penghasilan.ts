import { Component } from '@angular/core';
import { IonicPage, Platform,App,NavController, NavParams } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform:Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'LoanPekerjaanPenghasilanPage') {
          if (nav.canGoBack()){}else{
            // this.tabRef.select(0);
            this.navCtrl.parent.select(2);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanPekerjaanPenghasilanPage');
  }

  btnNext() {
    this.navCtrl.parent.select(4);
  }
}
