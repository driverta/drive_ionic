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

  history = [];

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public user: User,
    private records: Records) {

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

  }

  addSet() {
    var date = new Date().toISOString();
    var oneRM = this.weight / (1.0278- (this.reps * .0278));
    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM}
    
    //alert(this.exercise);
    var yo = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    yo.push(set);
    this.ionViewDidLoad();
  }
}
