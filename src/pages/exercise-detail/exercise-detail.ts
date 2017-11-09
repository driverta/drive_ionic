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
  gains = 0;
  myRecords: any;
  username: any;
  segment: any;
  loop = 0;
  loop2 = 0;

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
    
    var query2 = firebase.database().ref('/' + this.username + '/exercises');
    query2.once("value").then( snapshot => {
      //this.loop = 0;
      snapshot.forEach( childSnapshot => {
        //this.loop2 = 0;
        this.loop++
        var childData2 = childSnapshot.val();
        var checkX = childData2.name;
        //alert(checkX);
        
        var query3 = firebase.database().ref('/' + this.username + '/exercises/' + checkX + '/history');
        query3.once("value").then( snapshot2 => {
          snapshot2.forEach( childSnapshot2 => {
            this.loop2++
            var childData3 = childSnapshot2.val()
            var setGains = childData3.gains;

            this.gains = this.gains + setGains;
            //alert(setGains);
            
            if (this.loop == snapshot.numChildren() && this.loop2 == snapshot2.numChildren()) {
              this.setLevel();
            }
            
          })
        })
      })
    })
  }

  setLevel () {
    alert(this.gains)
  }

  addSet() {
    var date = new Date().toISOString();
    var oneRM = this.weight / (1.0278- (this.reps * .0278));
    var gains = 5;
    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM, gains: gains}
    
    //alert(this.exercise);
    var yo = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    yo.push(set);
    this.ionViewDidLoad();
  }
}
