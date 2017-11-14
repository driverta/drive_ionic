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
  myRecords: any;
  username: any;
  segment: any;
  loop = 0;

  history = [];

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
    this.myRecords = this.exercise.records;
    this.history = [];

    var query1 = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');

    query1.once("value").then( snapshot => {
      
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        
        this.history.push(childData1);
              
      });
      
    });
    
    var query2 = firebase.database().ref('/' + this.username + '/gains');
    query2.once("value").then( snapshot => {
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
    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM, gains: gains};
    var g = { date: date, gains: gains};
    //alert(this.exercise);
    var history = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    history.push(set);

    var points = firebase.database().ref('/' + this.username + '/gains');
    points.push(g);
    this.ionViewDidLoad();
  }
}
