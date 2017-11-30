import { Component, Output, EventEmitter } from '@angular/core';
import  { StatsLineChart } from '../../models/item';
import  { NavParams } from 'ionic-angular';

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
    private history: HistoryProvider
    ) {
    this.exercise = navParams.get('item');
  }

  ngOnInit() {
    this.username = this.user._user;
    this.history._history = [];

    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    queryHistory.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        var s = {date: childData1.date, reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM};
        this.history._history.push(s); 
      });
    });
  }

  deleteSet(x) {
    d3.selectAll("svg > *").remove();
    this.username = this.user._user
    var set = x;
    var query1 = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
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
  }
}
