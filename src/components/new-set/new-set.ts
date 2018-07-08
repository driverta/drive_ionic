import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { Records } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';
import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';
import { Flexibility } from '../../models/Flexibility';
import { History } from '../../models/History';


@Component({
  selector: 'new-set',
  templateUrl: 'new-set.html'
})
export class NewSetComponent {

  xlevel = 1;
	xcurrent = 0;
	xtotal = 0;
	progress = 0;
	user: any;
	loop = 0;
	gains = 0;
  g = 0;
  miles: any;
  hours: any;
  minutes: any;
  flexMinutes: any;
  seconds: any;
	weight: any;
  reps: any;
  bool = false;
  points = false;
  exercise: any;
  checkRec = false;
  history = [];
  totalGains = [];
  muscleGroup: any;
  liftingBool = true;
  cardioBool = false;
  flexBool = false;

  lf: LiftingHistory;
  cardioHistory: CardioHistory[];
  cardio: CardioHistory;
  historyModel: History;
  flex: Flexibility;

  private invalid: boolean = false;


  @Output() myEvent = new EventEmitter();

  constructor(
    public navCtrl: NavController,
  	navParams: NavParams,
    public alertCtrl: AlertController,
  	public levels: Levels,
  	private records: Records,
    private userService: ProvidersUserProvider,
    private historyService: HistoryProvider
  	) {


  	this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
    this.user = userService.getUser();

  }

  ngOnInit() {
    if (this.muscleGroup == "Cardio") {
      this.cardioBool = true;
      this.liftingBool = false;
      this.flexBool = false;
    } if (this.muscleGroup == "Flexibility") {
      this.cardioBool = false;
      this.liftingBool = false;
      this.flexBool = true;
    } else {
      this.cardioBool = false;
      this.liftingBool = true;
      this.flexBool = false;
    }

    this.userService.getTotalGains(this.user.id).subscribe(totalGains => {
      console.log(totalGains);
      this.gains = totalGains;
      this.setLevel();
    });;
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints - 1) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    })
  }

  addLiftingSet() {
    this.lf = new LiftingHistory();
    this.lf.reps = this.reps;
    this.lf.weight = this.weight;
    this.lf.user_id = this.userService.getUser().id;
    var date;
    date = new Date();
    // date = date.getUTCFullYear() + '-' +
    //         ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
    //         ('00' + date.getUTCDate()).slice(-2);   
    this.lf.date = date
    var oneRepMaxFirstStep =  (this.weight * this.reps * .033);
    this.lf.oneRepMax = parseInt(this.weight) + oneRepMaxFirstStep;
    this.lf.exercise = this.exercise;
    this.lf.gains = 5;
    this.g = 5;
    this.checkRec =false;
    this.points = true;
    for(let record of this.records._records){
      if(record.reps == this.lf.reps){
        this.checkRec = true;
        if (record.weight < this.lf.weight){
          this.lf.gains = 10;
          this.g = 10
          this.bool = true;
          record.weight = this.lf.weight;
          record.oneRepMax = this.lf.oneRepMax;
          record.records++;
        }
      }
    }
    if (this.checkRec == false){
      this.lf.gains = 10;
      this.g = 10;
      this.bool = true;
      this.records._records.push({reps: this.lf.reps, weight: this.lf.weight, oneRepMax: this.lf.oneRepMax, records: 1})
    }

    setTimeout(() => {
      this.bool = false;
      this.points = false;
    }, 2000);

    console.log(this.lf);
    this.userService.addLiftingHistory(this.lf).subscribe();
    this.myEvent.emit(null);
    this.ngOnInit(); 
  }

  addCardioSet() {

    if (this.miles == null && this.hours == null && this.minutes == null && this.seconds == null) {
      this.invalid = true;
    } else {

      if(this.hours == null){
        this.hours = 0;
      }
      if(this.minutes == null){
        this.minutes = 0;
      }
      if(this.seconds == null){
        this.seconds = 0;
      }

      this.cardio = new CardioHistory();
      this.cardio.user_id = this.userService.getUser().id;

      this.hours = Number(this.hours);
      this.minutes = Number(this.minutes);
      this.seconds = Number(this.seconds);

      d3.selectAll("svg > *").remove();
      let date = new Date().toISOString();
      var time = this.hours + ":" + this.minutes + ":" + this.seconds;
      var newMinutes = this.minutes / 60;
      var newSeconds = this.seconds / 360;
      var totalHours = this.hours + newMinutes + newSeconds;
      var mph = this.miles / totalHours;
      var newHours = this.hours * 60;
      var minSec = this.seconds / 60;
      var recordTime = this.minutes + newHours + minSec;
      var minTime = this.minutes + newHours
      this.g = minTime * 2
      this.bool = false;
      this.points = true;
      this.checkRec = false;
      console.log(date)
      this.cardio.date = date;
      this.cardio.minutes = recordTime;
      this.cardio.miles = this.miles;
      this.cardio.mph = mph;
      this.cardio.exercise = this.exercise;

      this.records._cardioRecs.forEach((value, index) => {
        if (this.cardio.minutes >= value.min && this.cardio.minutes < value.max) {
          if (this.cardio.mph > value.mph) {
            this.g = minTime * 4;
            this.bool = true;
          }
        }
      });

      this.cardio.gains = this.g;

      setTimeout(() => {
        this.bool = false;
        this.points = false;
      }, 2000);
      console.log(this.cardio);
      this.userService.addCardioHistory(this.cardio).subscribe();
      this.myEvent.emit(null);
      this.ngOnInit();
    }
  }

  addFlexibilitySet() {
    this.historyModel = new History();
    this.historyModel.date = new Date().toISOString();
    this.historyModel.exercise = this.exercise;
    this.historyModel.user_id = this.userService.getUser().id;
    this.flex = new Flexibility();
    this.flex.minutes = this.flexMinutes;
    this.historyService.addFlexHistory(this.historyModel, this.flex);
  }

  newLevel(level){
    let alert = this.alertCtrl.create({
      title: "CONGRATULATIONS!" ,
      message: "You are now a Level " + level,
      buttons: ['Ok']
    });
    alert.present();   
  }
}

