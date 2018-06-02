import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User, ProvidersUserProvider } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { Records } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';

import { CardioHistory } from '../../models/CardioHistory';

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
  miles: any;
  hours: any;
  minutes: any;
  seconds: any;
  bool = false;
  points = false;
  exercise: any;
  checkRec = false;
  history = [];
  totalGains = [];
  user: any;
  tempRec = [];
  cardioRecords = [];

  cardioHistory: CardioHistory[];
  cardio: CardioHistory;

  private invalid: boolean = false;

  @Output() myEvent = new EventEmitter();

  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public levels: Levels,
    private records: Records,
    private storage: Storage,
    private userService: ProvidersUserProvider
  ) {

    this.exercise = navParams.get('exercise');
    this.user = userService.getUser();
  }

  ngOnInit() {
    this.tempRec = [
      {min: 0, max: 5, miles: 0, time: 0, mph: 0, records: 0},
      {min: 5, max: 10, miles: 0, time: 0, mph: 0, records: 0},
      {min: 10, max: 15, miles: 0, time: 0, mph: 0, records: 0},
      {min: 15, max: 20, miles: 0, time: 0, mph: 0, records: 0},
      {min: 20, max: 25, miles: 0, time: 0, mph: 0, records: 0},
      {min: 25, max: 30, miles: 0, time: 0, mph: 0, records: 0},
      {min: 30, max: 35, miles: 0, time: 0, mph: 0, records: 0},
      {min: 35, max: 40, miles: 0, time: 0, mph: 0, records: 0},
      {min: 40, max: 45, miles: 0, time: 0, mph: 0, records: 0},
      {min: 45, max: 50, miles: 0, time: 0, mph: 0, records: 0},
      {min: 50, max: 55, miles: 0, time: 0, mph: 0, records: 0},
      {min: 55, max: 60, miles: 0, time: 0, mph: 0, records: 0},
      {min: 60, max: 65, miles: 0, time: 0, mph: 0, records: 0},
      {min: 65, max: 70, miles: 0, time: 0, mph: 0, records: 0},
      {min: 70, max: 75, miles: 0, time: 0, mph: 0, records: 0},
      {min: 75, max: 80, miles: 0, time: 0, mph: 0, records: 0},
      {min: 80, max: 85, miles: 0, time: 0, mph: 0, records: 0},
      {min: 85, max: 90, miles: 0, time: 0, mph: 0, records: 0},
      {min: 90, max: 95, miles: 0, time: 0, mph: 0, records: 0},
      {min: 95, max: 100, miles: 0, time: 0, mph: 0, records: 0},
      {min: 100, max: 105, miles: 0, time: 0, mph: 0, records: 0},
      {min: 105, max: 110, miles: 0, time: 0, mph: 0, records: 0},
      {min: 110, max: 115, miles: 0, time: 0, mph: 0, records: 0},
      {min: 115, max: 120, miles: 0, time: 0, mph: 0, records: 0},
      {min: 120, max: 1000, miles: 0, time: 0, mph: 0, records: 0}
  
    ]

    this.records._records = [
      
    ];
    this.cardioRecords = [
    ];
    // this.username = localStorage.getItem("username");
    // //alert(this.username);
    // this.gains = 0
    // this.getGains().then((val) => {
    //   //console.log('Your json is', val);
    //   val.forEach((value) => {
    //     this.gains = this.gains + value.gains
    //   })
    // }).then(() => {
    //   this.setLevel();
    // })
    this.userService.getTotalGains(this.user.id).subscribe(totalGains => {
      console.log(totalGains);
      this.gains = totalGains;
      this.setLevel();
    });;

    this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.cardioHistory = data;
      //this.getRecords();
    })
  }

  setLevel() {
    console.log(this.records._cardioRecs)
    this.levels._levels.forEach((value, index) => {
      if (this.gains > value.totalPoints - 1) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    });
  }

  getRecords() {
    console.log(this.records._cardioRecs)
    for(let history of this.cardioHistory){
  
      this.checkRec =false;
      //console.log(this.tempRec)
      //for(let record of this.records._records){
        this.tempRec.forEach( (value, index) => {
          
          if (history.minutes >= value.min && history.minutes < value.max) {
            if (history.mph > value.mph) {
              
              this.tempRec[index].miles = history.miles;
              this.tempRec[index].mph = history.mph;
              this.tempRec[index].records++;
              this.tempRec[index].time = history.minutes;
            }
          }
        });
    }
    this.tempRec.forEach ((value) => {
      if (value.records > 0){
        this.cardioRecords.push(value)
      }
    })
  }

  addSet() {

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
      var date = new Date().toISOString();
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
      this.userService.addCardioHistory(this.cardio).subscribe();
      this.myEvent.emit(null);
      this.ngOnInit();
      
      // this.getExercises().then((val) => {
      //   //console.log('Your json is', val);
      //   var key = this.exercise.name + '-' + this.exercise.variation
      //   var history = val[key].history;
      //   if (!history) {
      //     val[key].history = {};
      //     this.storage.set(this.username + '/exercises', val)
      //   }
      // }).then(() => {
      //   this.getExercises().then((val) => {
      //     var key = this.exercise.name + '-' + this.exercise.variation
      //     var history = val[key].history;
      //     if (Array.isArray(history)) {
      //       val[key].history.push(workout)
      //     } else {

      //       val[key].history[newDate] = workout;
      //     }

      //     this.storage.set(this.username + '/exercises', val).then(() => {
      //       Object.keys(history).forEach((workout) => {
      //         this.records._cardio.forEach((value, index) => {
      //           if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
      //             if (history[workout].mph > value.mph) {
      //               this.records._cardio[index].miles = history[workout].miles;
      //               this.records._cardio[index].time = history[workout].time;
      //               this.records._cardio[index].mph = history[workout].mph;
      //               this.records._cardio[index].records++;
      //               this.g = minTime * 4;
      //               this.bool = true;
      //             }
      //           }
      //         });
      //       })
      //     }).then(() => {
      //       this.myEvent.emit(null);
      //       var g = { date: date, gains: this.g, muscle: this.exercise.muscle, exercise: this.exercise.name + '/' + this.exercise.variation };
      //       this.getGains().then((val) => {
      //         //console.log('Your json is', val);
      //         this.totalGains = val;
      //         this.totalGains.push(g);
      //         this.storage.set(this.username + '/gains', this.totalGains).then(() => {

      //           this.ngOnInit();
      //         });
      //       });
      //     });
      //   });
      //});
    }
  }

  validateTime(){
    var result = false;

    if(this.hours == null && (this.minutes != null || this.seconds != null)){
      this.hours = 0;
      result = true;
    }
    else if(this.minutes == null && (this.hours != null || this.seconds != null)){
      this.minutes = 0;
      result = true;
    }
    else if(this.seconds == null && (this.minutes != null || this.hours != null)){
      this.seconds = 0;
      result = true;
    }

    return result;
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

}
