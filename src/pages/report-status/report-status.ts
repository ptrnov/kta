import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getDataCustomer} from "./data";
import { AppReportPage} from '../../pages/app-report/app-report';
import { from } from 'rxjs/observable/from';
import { ReportStatusDetailPage} from '../../pages/report-status-detail/report-status-detail';

@IonicPage()
@Component({
  selector: 'page-report-status',
  templateUrl: 'report-status.html',
})
export class ReportStatusPage {
  timelinePic

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.timelinePic=getDataCustomer;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportStatusPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }

  public btnview(){
    this.navCtrl.setRoot(ReportStatusDetailPage);
  }


}
