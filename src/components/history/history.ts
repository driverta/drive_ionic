import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { User } from '../../providers/providers';

import * as d3 from 'd3-selection';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { UserModel } from '../../models/users';
import { Flexibility } from '../../models/Flexibility';
import { BodyLift } from '../../models/BodyLift';
import { CardioTimeConvertPipe } from '../../pipes/cardio-time-convert/cardio-time-convert'

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  liftingHistory: LiftingHistory[];
  cardioHistory: CardioHistory[];
  bodyLiftHistory: BodyLift[];
  flexHistory: Flexibility[];
  username: any;
  exercise: any;
  user: any;
  totalGains = [];
  muscleGroup: any;
  liftingBool = true;
  cardioBool = false;
  bodyLiftBool = false;
  flexBool = false

  @Output() myEvent2 = new EventEmitter();

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    private history: HistoryProvider,
    private alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider
    ) {
    this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
    this.user = userService.getUser();
  }

  public showHistory() {
    if (this.muscleGroup == "Cardio") {
        this.cardioBool = true;
        this.liftingBool = false;
        if (this.history.cardioHistory){
          this.cardioHistory = this.history.cardioHistory.reverse()
        }
    } else if (this.exercise.bodyLift) {
      this.liftingBool = false
      this.bodyLiftBool = true // TODO: GET Body Lift History 
      if (this.history.bodyLift) {
        this.bodyLiftHistory = this.history.bodyLift.reverse()
      }
    } else if (this.muscleGroup == "Flexibility") {
      this.liftingBool = false
      this.flexBool = true // TODO: GET flex history
      this.flexHistory = this.history.flexHistory
    } else {
      if (this.history.liftingHistory) {
        console.log("Yoo")
        this.liftingHistory = this.history.liftingHistory.reverse()
      }
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

  presentConfirmBodyLift(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete this workout at (' + x.date + ' for ' + x.reps + 'reps) and loose these gains?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteBodyLift(x);
          }
        }
      ]
    });
    alert.present();
  }
  
  presentConfirmFlex(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete this workout at (' + x.date + ' for ' + x.minutes + ' minutes) and loose these gains?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteFlex(x);
          }
        }
      ]
    });
    alert.present();
  }

  deleteLifting(x) {
    this.username = this.user.username
    this.history.removeLiftingHistory(x).subscribe(data => {
      this.myEvent2.emit(null);
      this.showHistory();
    });
  }

  deleteCardio(x) {
    this.username = this.user.username
    this.history.removeCardioHistory(x).subscribe(data => {
      this.myEvent2.emit(null);
      this.showHistory();
    });
  }

  deleteBodyLift(x) {
    this.username = this.user.username
    this.history.removeBodyLift(x).subscribe(data => {
      this.myEvent2.emit(null);
      this.showHistory();
    });
  }

  deleteFlex(x) {
    this.username = this.user.username
    this.history.removeflex(x).subscribe(data => {
      this.myEvent2.emit(null);
      this.showHistory();
    });
  }
}
