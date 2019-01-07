import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppReportPage} from '../../pages/app-report/app-report';


@IonicPage()
@Component({
  selector: 'page-report-sales-summary',
  templateUrl: 'report-sales-summary.html',
})
export class ReportSalesSummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportSalesSummaryPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }
}
