import { Component, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { CardioHistory } from '../../models/CardioHistory';
import { UserModel } from '../../models/users';
import { CardioTimeConvertPipe } from '../../pipes/cardio-time-convert/cardio-time-convert'

import firebase from 'firebase';

import * as d3 from 'd3-selection';

@Component({
  selector: 'cardio-history',
  templateUrl: 'cardio-history.html'
})
export class CardioHistoryComponent {

  cardioHistory: CardioHistory[];
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
    this.user = this.userService.getUser();
  }

  ngOnInit() {

    this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.cardioHistory = data;
      console.log(this.cardioHistory);
    })
  }

  presentConfirm(x) {
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
    this.historyService.removeCardioHistory(x).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
    // this.username = localStorage.getItem("username");
    
    // this.historyService._cardio.forEach ( (val, index) => {
    //   if(val.date == x.date){
    //     this.historyService._cardio.splice(index, 1);
    //     this.getExercises().then((val) => {
    //       var key = this.exercise.name + '-' + this.exercise.variation
    //       val[key].history = this.history._cardio
    //       this.storage.set(this.username + '/exercises', val).then(() => {
    //         this.ngOnInit();
    //         this.myEvent2.emit(null);
    //       });
    //     })
    //     this.getGains().then((gains) => {
    //       this.totalGains = gains;
    //       this.totalGains.forEach((set, index2) => {
    //         if (val.date == set.date){
              
    //           this.totalGains.splice(index2, 1);
    //           this.storage.set(this.username + '/gains', this.totalGains). then(() => {
              
    //           this.ngOnInit();
    //         });
    //         }
    //       })
    //     })
    //   }
    // })
  }
}
