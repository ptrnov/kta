import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AppTaskPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-task',
  templateUrl: 'app-task.html'
})
export class AppTaskPage {

  taskListRoot = 'TaskListPage'
  taskDraftRoot = 'TaskDraftPage'
  taskHistoryRoot = 'TaskHistoryPage'


  constructor(public navCtrl: NavController) {}

}
