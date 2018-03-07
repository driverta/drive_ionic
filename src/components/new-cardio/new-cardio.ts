import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { Records } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';

@Component({
  selector: 'new-cardio',
  templateUrl: 'new-cardio.html'
})
export class NewCardioComponent {

  xlevel = 1;
	xcurrent = 0;
	xtotal = 0;
	progress = 0;
	username: any;
	loop = 0;
	gains = 0;
  g = 0;
	miles = 100;
  hours = 10;
  minutes = 10;
  seconds = 10;
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
  	this.username = localStorage.getItem("username");
    //alert(this.username);
    this.gains = 0
    this.getGains().then((val) => {
      //console.log('Your json is', val);
      val.forEach ( (value) => {
        this.gains = this.gains + value.gains
      })
    }).then(() => {
      this.setLevel();
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
  	
  	d3.selectAll("svg > *").remove();
    var date = new Date().toISOString();
    var newDate = date.replace(".", "-")
    var time = this.hours + ":" + this.minutes + ":" + this.seconds;
    var newMinutes = this.minutes / 60;
    var newSeconds = this.seconds / 360;
    var totalHours = this.hours + newMinutes + newSeconds;
    var mph = this.miles / totalHours;
    var newHours = this.hours * 60;
    var minTime = this.minutes + newHours;
    this.g = minTime
    this.bool = false;
    this.checkRec = false;

    setTimeout(() => {
      this.bool = false;
    }, 2000);

    var workout = { date: date, time: time, miles: this.miles, mph: mph, minutes: minTime};

    this.getExercises().then((val) => {
      //console.log('Your json is', val);
      var key = this.exercise.name + '-' + this.exercise.variation
      var history = val[key].history;
      if(!history){
        val[key].history = {};
        this.storage.set(this.username + '/exercises', val)
      }
    }).then(() => {
      this.getExercises().then((val) => {
        var key = this.exercise.name + '-' + this.exercise.variation
        var history = val[key].history;
        if (Array.isArray(history)){
          val[key].history.push(workout)
        } else {
          
          val[key].history[newDate] = workout;
        }
        
        this.storage.set(this.username + '/exercises', val).then(() => {
          Object.keys(history).forEach( (workout) => {
            this.checkRec = false;
            this.records._records.forEach( (value, index) => {
              if (history[workout].minutes > value.min && history[workout].minutes < value.max) {
                this.checkRec = true;
                if (history[workout].mph > value.mph) {
                  this.records._records[index].miles = history[workout].miles;
                  this.records._records[index].time = history[workout].time;
                  this.records._records[index].mph = history[workout].mph;
                  this.records._records[index].records++;
                  this.g = minTime + 100;
                  this.bool = true;
                }
              }
            });
            if (this.checkRec == false){
              this.records._records.push({reps: history[workout].reps, weight: history[workout].weight, oneRM: history[workout].oneRM, records: 1})
              this.g = minTime + 100;
              this.bool = true;
            }
          })
        }).then(() => {
          this.myEvent.emit(null);
          var g = { date: date, gains: this.g, muscle: this.exercise.muscle, exercise: this.exercise.name + '/' + this.exercise.variation};
          this.getGains().then((val) => {
            //console.log('Your json is', val);
            this.totalGains = val;
            this.totalGains.push(g);
            this.storage.set(this.username + '/gains', this.totalGains). then(() => {
              
              this.ngOnInit();
            });
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

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

}
