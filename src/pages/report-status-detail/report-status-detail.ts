import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportStatusPage} from '../../pages/report-status/report-status';


@IonicPage()
@Component({
  selector: 'page-report-status-detail',
  templateUrl: 'report-status-detail.html',
})
export class ReportStatusDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportStatusDetailPage');
  }

  public kembali(){
    this.navCtrl.setRoot(ReportStatusPage);
  }
}
