import { Component,ViewChild } from '@angular/core';
import { IonicPage, Platform,App,NavController, NavParams,Tabs } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-loan-datadiri',
  templateUrl: 'loan-datadiri.html',
})
export class LoanDatadiriPage {
  @ViewChild('myTabs') tabRef:Tabs;
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
      if(activeView.name === 'LoanDatadiriPage') {
          if (nav.canGoBack()){}else{
            // this.tabRef.select(0);
            this.navCtrl.parent.select(0);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanDatadiriPage');
  }

  btnNext() {
    this.navCtrl.parent.select(2);
  }
}
