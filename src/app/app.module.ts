import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import {Keyboard} from '@ionic-native/keyboard';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LoanPage } from '../pages/loan/loan';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { SelectSearchableModule  } from 'ionic-select-searchable';
import { DatabaseProvider } from '../providers/database/database';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Base64 } from '@ionic-native/base64';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RestProvider } from '../providers/rest/rest';
import { LoanPengajuanPage} from '../pages/loan-pengajuan/loan-pengajuan';
import { LoanDatadiriPage} from '../pages/loan-datadiri/loan-datadiri';
import { LoanEmergencycontactPage} from '../pages/loan-emergencycontact/loan-emergencycontact';
import { LoanPekerjaanPenghasilanPage} from '../pages/loan-pekerjaan-penghasilan/loan-pekerjaan-penghasilan';
import { LoanDatatambahanPage} from '../pages/loan-datatambahan/loan-datatambahan';
import { AppformPage} from '../pages/appform/appform';
import { AppReportPage} from '../pages/app-report/app-report';
import { AppProductPage} from '../pages/app-product/app-product';
import { ReportStatusPage} from '../pages/report-status/report-status';
import { ReportStatusDetailPage} from '../pages/report-status-detail/report-status-detail';
import { ReportSalesSummaryPage} from '../pages/report-sales-summary/report-sales-summary';
import { ReportSalesSummaryprogramPage} from '../pages/report-sales-summaryprogram/report-sales-summaryprogram';
import { ReportTopagentPage} from '../pages/report-topagent/report-topagent';
import { PrdinfoPayrollPage} from '../pages/prdinfo-payroll/prdinfo-payroll';
import { PrdinfoPayrollTopupPage} from '../pages/prdinfo-payroll-topup/prdinfo-payroll-topup';
import { PrdinfoCrossellccPage} from '../pages/prdinfo-crossellcc/prdinfo-crossellcc';
import { PrdinfoCrosselllabilitiPage} from '../pages/prdinfo-crosselllabiliti/prdinfo-crosselllabiliti';
import { PrdinfoCrossellscrloanPage} from '../pages/prdinfo-crossellscrloan/prdinfo-crossellscrloan';
import { PrdinfoCrossellntpPage} from '../pages/prdinfo-crossellntp/prdinfo-crossellntp';
import { PrdinfoCrossellntbPage} from '../pages/prdinfo-crossellntb/prdinfo-crossellntb';
import { LoanDatatambahanEvidancePage } from '../pages/loan-datatambahan-evidance/loan-datatambahan-evidance';
import { LoadDatatambahanAsuransiPage } from '../pages/load-datatambahan-asuransi/load-datatambahan-asuransi'
import { LoadDatatambahanPernyataanPage } from '../pages/load-datatambahan-pernyataan/load-datatambahan-pernyataan';
import { AppformAuthenticationPage } from '../pages/appform-authentication/appform-authentication';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    AppformPage,
    AppReportPage,
    AppProductPage,
    LoanPage,
    LoanPengajuanPage,
    LoanDatadiriPage,
    LoanEmergencycontactPage,
    LoanPekerjaanPenghasilanPage,
    LoanDatatambahanPage,
    ReportStatusPage,
    ReportStatusDetailPage,
    ReportSalesSummaryPage,
    ReportSalesSummaryprogramPage,
    ReportTopagentPage,
    PrdinfoPayrollPage,
    PrdinfoPayrollTopupPage,
    PrdinfoCrossellccPage,
    PrdinfoCrosselllabilitiPage,
    PrdinfoCrossellscrloanPage,
    PrdinfoCrossellntpPage,
    PrdinfoCrossellntbPage,
    LoanDatatambahanEvidancePage,
    LoadDatatambahanAsuransiPage,
    LoadDatatambahanPernyataanPage,
    AppformAuthenticationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      // preloadModules: false,
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false,
      bulan: 10,
      tahun: 2018,
      real_name:'none',
      user_group:'none'
    }),
    // SelectSearchableModule,
    NgxDatatableModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    AppformPage,
    AppReportPage,
    AppProductPage,
    LoanPage,
    LoanPengajuanPage,
    LoanDatadiriPage,
    LoanEmergencycontactPage,
    LoanPekerjaanPenghasilanPage,
    LoanDatatambahanPage,
    ReportStatusPage,
    ReportStatusDetailPage,
    ReportSalesSummaryPage,
    ReportSalesSummaryprogramPage,
    ReportTopagentPage,
    PrdinfoPayrollPage,
    PrdinfoPayrollTopupPage,
    PrdinfoCrossellccPage,
    PrdinfoCrosselllabilitiPage,
    PrdinfoCrossellscrloanPage,
    PrdinfoCrossellntpPage,
    PrdinfoCrossellntbPage,
    LoanDatatambahanEvidancePage,
    LoadDatatambahanAsuransiPage,
    LoadDatatambahanPernyataanPage,
    AppformAuthenticationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    SQLite,
    DatabaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Camera,
    DatePicker,
    Base64,
    BarcodeScanner,
    RestProvider
  ]
})
export class AppModule {}
