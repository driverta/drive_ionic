import { Component, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider } from '../../providers/providers';
import { User } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  username: any;
  exercise: any;

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
    this.history._history = [];

    /*
    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    queryHistory.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        var s = {date: childData1.date, reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM};
        this.history._history.push(s); 
      });
    });
    */
    this.getExercises().then((val) => {
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach ( (keyTwo) => {
          var set = {date: history[keyTwo].date, reps: history[keyTwo].reps, weight: history[keyTwo].weight, oneRM: history[keyTwo].oneRM}
          this.history._history.push(set)
        })
      }
    });
  }

  presentConfirm(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete this set (' + x.weight + ' x ' + x.reps + ') and loose these gains?',
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
    
    this.history._history.forEach ( (val, index) => {
      if(val.date == x.date){
        this.history._history.splice(index, 1);
        this.getExercises().then((val) => {
          var key = this.exercise.name + '-' + this.exercise.variation
          val[key].history = this.history._history
          this.storage.set(this.username + '/exercises', val).then(() => {
            this.ngOnInit();
            this.myEvent2.emit(null);
          });
        })
      }
    })
    /*
    var query1 = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    query1.once("value").then( snapshot => {

      snapshot.forEach( childSnapshot => {

        var childData1 = childSnapshot.val();
        if (x.date == childData1.date) {
          childSnapshot.getRef().remove().then(() => {
            console.log('Write succeeded!');
            this.ngOnInit();
            this.myEvent2.emit(null);
          });
        }
      });
    });
    */
  }
  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }
}
