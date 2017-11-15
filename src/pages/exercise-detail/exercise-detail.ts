import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';

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
  gains = 0;
  username: any;
  segment = "set";
  loop = 0;
  bool = false;

  history = [];
  myRecords = [];

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public user: User,
    private records: Records,
    public levels: Levels) {

    this.exercise = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    this.username = this.user._user
    this.myRecords = [];
    this.history = [];

    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    queryHistory.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        this.history.push(childData1);     
      });
    });
    
    var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      this.loop = 0;
      this.gains = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData2 = childSnapshot.val();
        var gains = childData2.gains;
        this.gains = this.gains + gains
        if ( snapshot.numChildren() == this.loop )
          this.setLevel()
      })
    })

    var queryRecords = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/records');
    queryRecords.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        this.myRecords.push(childData1);     
      });
    });
    
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    });
  }

  addSet() {
    var date = new Date().toISOString();
    var oneRM = this.weight / (1.0278- (this.reps * .0278));
    var gains = 5;
    this.bool = false;

    this.myRecords.forEach( (value, index) => {
      if (this.reps == value.reps) {
        if (this.weight > value.weight) {
          this.myRecords[index].weight = this.weight;
          this.myRecords[index].oneRM = oneRM;
          this.myRecords[index].records++;
          gains = 10;
          this.bool = true;
        }
      }
    });

    setTimeout(() => {
      this.bool = false;
    }, 2000);

    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM, gains: gains};
    var g = { date: date, gains: gains};
    
    var history = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    history.push(set);

    var points = firebase.database().ref('/' + this.username + '/gains');
    points.push(g);

    var records = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/records');
    records.set(this.myRecords);

    this.ionViewDidLoad();
  }
}
