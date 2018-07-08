import { Component, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { User } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { UserModel } from '../../models/users';

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  liftingHistory: LiftingHistory[];
  cardioHistory: CardioHistory[];
  username: any;
  exercise: any;
  user: any;
  totalGains = [];
  muscleGroup: any;
  liftingBool = true;
  cardioBool = false;

  @Output() myEvent2 = new EventEmitter();

  constructor(
    navParams: NavParams,
    private historyService: HistoryProvider,
    private alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider
    ) {
    this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
    this.user = userService.getUser();
  }

  ngOnInit() {
    if (this.muscleGroup == "Cardio") {
      this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.cardioHistory = data;
        this.cardioHistory = this.cardioHistory.reverse();
        this.cardioBool = true;
        this.liftingBool = false;
      });
    } else {
      this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.liftingHistory = data;
        this.liftingHistory = this.liftingHistory.reverse();
      })
    }
  }

  presentConfirmLifting(x) {
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
            this.deleteLifting(x);
          }
        }
      ]
    });
    alert.present();
  }

  presentConfirmCardio(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete this workout (' + x.miles + ' miles in ' + x.time + ') and loose these gains?',
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
            this.deleteCardio(x);
          }
        }
      ]
    });
    alert.present();
  }

  deleteLifting(x) {
    this.username = this.user.username
    this.historyService.removeLiftingHistory(x).subscribe(data => {
      this.myEvent2.emit(null);
      this.ngOnInit();
    });
  }

  deleteCardio(x) {
    this.username = this.user.username
    this.historyService.removeCardioHistory(x).subscribe(data => {
      this.myEvent2.emit(null);
      this.ngOnInit();
    });
  }
}
