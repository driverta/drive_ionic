import { Component, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { User } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';
import { LiftingHistory } from '../../models/LiftingHistory';
import { UserModel } from '../../models/users';

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  liftingHistory: LiftingHistory[];
  username: any;
  exercise: any;
  user: any;
  totalGains = [];

  @Output() myEvent2 = new EventEmitter();

  constructor(
    navParams: NavParams,
    private historyService: HistoryProvider,
    private alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider
    ) {
    this.exercise = navParams.get('exercise');
    this.user = userService.getUser();
  }



  ngOnInit() {
    this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.liftingHistory = data;
      console.log(this.liftingHistory);
    })
  }

  presentConfirm(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete this set (' + x.weight + ' x ' + x.reps + ') and lose these gains?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteSet(x);
          }
        }
      ]
    });
    alert.present();
  }

  deleteSet(x) {
    d3.selectAll("svg > *").remove();
    this.username = this.user.username
    this.historyService.removeLiftingHistory(x).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
  }
}
