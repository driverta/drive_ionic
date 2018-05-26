import { Component, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider } from '../../providers/providers';
import { User } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';

@Component({
  selector: 'cardio-history',
  templateUrl: 'cardio-history.html'
})
export class CardioHistoryComponent {

  username: any;
  exercise: any;
  totalGains = [];

  @Output() myEvent2 = new EventEmitter();

  constructor(
    navParams: NavParams,
    public user: User,
    private history: HistoryProvider,
    private alertCtrl: AlertController,
    private storage: Storage
    ) {
    this.exercise = navParams.get('item');
  }

  ngOnInit() {

    this.username = localStorage.getItem("username");
    
    /*
    this.getExercises().then((val) => {
      this.history._cardio = [];
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach ( (keyTwo) => {
          var workout = {date: history[keyTwo].date, miles: history[keyTwo].miles, time: history[keyTwo].time, mph: history[keyTwo].mph, minutes: history[keyTwo].minutes}
          this.history._cardio.push(workout)
        })
      }
    });
    */
    console.log(this.history._cardio)
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
    this.username = localStorage.getItem("username");
    
    this.history._cardio.forEach ( (val, index) => {
      if(val.date == x.date){
        this.history._cardio.splice(index, 1);
        /*
        this.getExercises().then((val) => {
          var key = this.exercise.name + '-' + this.exercise.variation
          val[key].history = this.history._cardio
          this.storage.set(this.username + '/exercises', val).then(() => {
            this.ngOnInit();
            this.myEvent2.emit(null);
          });
        })

        this.getGains().then((gains) => {
          this.totalGains = gains;
          this.totalGains.forEach((set, index2) => {
            if (val.date == set.date){
              
              this.totalGains.splice(index2, 1);
              this.storage.set(this.username + '/gains', this.totalGains). then(() => {
              
              this.ngOnInit();
            });
            }
          })
        })
        */
      }
    })

  }
  /*
  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }
  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }
  */
}
