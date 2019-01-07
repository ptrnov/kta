import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppReportPage} from '../../pages/app-report/app-report';


@IonicPage()
@Component({
  selector: 'page-report-sales-summaryprogram',
  templateUrl: 'report-sales-summaryprogram.html',
})
export class ReportSalesSummaryprogramPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportSalesSummaryprogramPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }
}
