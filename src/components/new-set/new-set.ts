import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { Records } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';

@Component({
  selector: 'new-set',
  templateUrl: 'new-set.html'
})
export class NewSetComponent {

  xlevel = 1;
	xcurrent = 0;
	xtotal = 0;
	progress = 0;
	username: any;
	loop = 0;
	gains = 0;
  g = 0;
	weight = 100;
  reps = 10;
  bool = false;
  exercise: any;
  checkRec = false;
  history = [];
  totalGains = [];

  @Output() myEvent = new EventEmitter();

  constructor(
    public navCtrl: NavController,
  	navParams: NavParams,
  	public user: User,
  	public levels: Levels,
  	private records: Records,
    private storage: Storage
  	) {

  	this.exercise = navParams.get('item');
 
  }

  ngOnInit() {
  	this.username = this.user._user
    this.gains = 0
    this.storage.get('gains').then((val) => {
      //console.log('Your json is', val);
      if (val) {
        val.forEach ( (value) => {
          this.gains = this.gains + value.gains
        })
      }
    }).then(() => {
      this.setLevel();
    })

    /*
  	var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      this.loop = 0;
      this.gains = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData2 = childSnapshot.val();
        var gains = childData2.gains;
        this.gains = this.gains + gains
        if ( snapshot.numChildren() == this.loop ) {
          this.setLevel()
        }
      })
    })
    */
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
  	d3.selectAll("svg > *").remove();
    var date = new Date().toISOString();
    var oneRM = (this.weight * this.reps * .033) + this.weight;
    if(this.reps == 1){
      oneRM = this.weight;
    }
    this.g = 5;
    this.bool = false;
    this.checkRec = false;

    setTimeout(() => {
      this.bool = false;
    }, 2000);

    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM, gains: this.g};

    this.storage.get('exercises').then((val) => {
      console.log('Your json is', val);
      var key = this.exercise.name + '-' + this.exercise.variation
      val[key].history.push(set);
      this.storage.set('exercises', val).then(() => {
        val[key].history.forEach( set => {
          this.checkRec = false;
          this.records._records.forEach( (value, index) => {
            if (set.reps == value.reps) {
              this.checkRec = true;
              if (set.weight > value.weight) {
                this.records._records[index].weight = set.weight;
                this.records._records[index].oneRM = set.oneRM;
                this.records._records[index].records++;
                this.g = 10;
                this.bool = true;
              }
            }
          });
          if (this.checkRec == false){
            this.records._records.push({reps: set.reps, weight: set.weight, oneRM: set.oneRM, records: 1})
            this.g = 10;
            this.bool = true;
          }
        })
      }).then(() => {
        this.myEvent.emit(null);
        var g = { date: date, gains: this.g, muscle: this.exercise.muscle, exercise: this.exercise.name + '/' + this.exercise.variation};
        this.storage.get('gains').then((val) => {
          //console.log('Your json is', val);
          if (val) {
            this.totalGains = val;
          }

          this.totalGains.push(g);
          this.storage.set('gains', this.totalGains). then(() => {
            
            this.ngOnInit();
          });
        });
      });
    });
    /*
    var history = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    history.push(set);

    var points = firebase.database().ref('/' + this.username + '/gains');
    points.push(g);
    */
    
  }

}

