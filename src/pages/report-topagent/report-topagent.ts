import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppReportPage} from '../../pages/app-report/app-report';


@IonicPage()
@Component({
  selector: 'page-report-topagent',
  templateUrl: 'report-topagent.html',
})
export class ReportTopagentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportTopagentPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }
}
