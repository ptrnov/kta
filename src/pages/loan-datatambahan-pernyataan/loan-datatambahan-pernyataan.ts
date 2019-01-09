import { Component } from '@angular/core';
import { IonicPage, App,Platform,NavController, NavParams } from 'ionic-angular';
import { AppformAuthenticationPage } from '../../pages/appform-authentication/appform-authentication';
import { LoanDatatambahanAsuransiPage } from '../../pages/loan-datatambahan-asuransi/loan-datatambahan-asuransi'
@IonicPage()
@Component({
  selector: 'page-loan-datatambahan-pernyataan',
  templateUrl: 'loan-datatambahan-pernyataan.html',
})
export class LoanDatatambahanPernyataanPage {

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
      if(activeView.name === 'LoanDatatambahanPernyataanPage') {
          if (nav.canGoBack()){}else{
            // this.tabRef.select(0);
            // this.navCtrl.parent.select(4);
            this.navCtrl.setRoot(LoanDatatambahanAsuransiPage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadDatatambahanPernyataanPage');
  }

  public formAuth(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(AppformAuthenticationPage);
  }


}
