import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {
  exercise: any;
  xlevel = 1;
	xcurrent = 25;
	xtotal = 100;
	progress = 75;
  weight = 100;
  reps = 10;
  myRecords: any;
  username: any;
  segment: any;

  history = [
    { date: '9-20-17', weight: 135, reps: 10, oneRM: 225},
    { date: '9-21-17', weight: 185, reps: 5, oneRM: 225}
  ]

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public user: User,
    private records: Records) {

    this.exercise = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    this.myRecords = this.exercise.records
  }

  addSet() {
    var date = new Date().toISOString();
    var oneRM = this.weight / (1.0278- (this.reps * .0278));
    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM}
    this.username = this.user._user
    alert(this.exercise);
    var yo = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise + '/history');
    yo.push(set);
  }
}
