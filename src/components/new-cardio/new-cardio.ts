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
	miles = 2.5;
  hours = 0;
  minutes = 25;
  seconds = 0;
  bool = false;
  points = false;
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
      if (this.gains > value.totalPoints - 1) {
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
    var minSec = this.seconds / 60;
    var recordTime = this.minutes + newHours + minSec;
    var minTime = this.minutes + newHours
    this.g = minTime
    this.bool = false;
    this.points = true;
    this.checkRec = false;

    setTimeout(() => {
      this.bool = false;
      this.points = false;
    }, 2000);
    
    var workout = { date: date, time: time, miles: this.miles, mph: mph, minutes: recordTime};

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
            this.records._cardio.forEach( (value, index) => {
              if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
                if (history[workout].mph > value.mph) {
                  this.records._cardio[index].miles = history[workout].miles;
                  this.records._cardio[index].time = history[workout].time;
                  this.records._cardio[index].mph = history[workout].mph;
                  this.records._cardio[index].records++;
                  this.g = minTime + 100;
                  this.bool = true;
                }
              }
            });
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
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

}
