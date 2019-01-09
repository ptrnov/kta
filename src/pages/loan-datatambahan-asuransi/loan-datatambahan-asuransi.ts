import { Component } from '@angular/core';
import { IonicPage,App,Platform, NavController, NavParams } from 'ionic-angular';
import { LoanDatatambahanPernyataanPage } from '../../pages/loan-datatambahan-pernyataan/loan-datatambahan-pernyataan';
import { LoanDatatambahanEvidancePage } from '../../pages/loan-datatambahan-evidance/loan-datatambahan-evidance';
@IonicPage()
@Component({
  selector: 'page-loan-datatambahan-asuransi',
  templateUrl: 'loan-datatambahan-asuransi.html',
})
export class LoanDatatambahanAsuransiPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'LoanDatatambahanAsuransiPage') {
          if (nav.canGoBack()){}else{
            // this.tabRef.select(0);
            // this.navCtrl.parent.select(4);
            this.navCtrl.setRoot(LoanDatatambahanEvidancePage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadDatatambahanAsuransiPage');
  }

  public pernyataan(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(LoanDatatambahanPernyataanPage);
  }

}
