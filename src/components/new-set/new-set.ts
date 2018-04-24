import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
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
	weight: any;
  reps: any;
  bool = false;
  points = false;
  exercise: any;
  checkRec = false;
  history = [];
  totalGains = [];

  private invalid: boolean = false;

  @Output() myEvent = new EventEmitter();

  constructor(
    public navCtrl: NavController,
  	navParams: NavParams,
  	public user: User,
    public alertCtrl: AlertController,
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
    })
    this.getLevel().then((val) => {
      if (val){
        if (this.xlevel > val){
          this.newLevel(this.xlevel)
        }
      }
      this.storage.set(this.username + '/level', this.xlevel);
    })
  }

  addSet() {
    if(this.weight == null || this.reps == null){
        this.invalid = true; 
    }
    else{
      
  	d3.selectAll("svg > *").remove();
    var date = new Date().toISOString();
    var newDate = date.replace(".", "-")
    //alert(newDate)
    var oneRM = (Number(this.weight) * Number(this.reps) * .033) + Number(this.weight);
    if(this.reps == 1){
      oneRM = this.weight;
    }
    this.g = 5;
    this.bool = false;
    this.points = true;
    this.checkRec = false;

    setTimeout(() => {
      this.bool = false;
      this.points = false;
    }, 2000);

    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM};

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
          val[key].history.push(set)
        } else {
          
          val[key].history[newDate] = set;
        }
        
        this.storage.set(this.username + '/exercises', val).then(() => {
          Object.keys(history).forEach( (set) => {
            this.checkRec = false;
            this.records._records.forEach( (value, index) => {
              if (history[set].reps == value.reps) {
                this.checkRec = true;
                if (history[set].weight > value.weight) {
                  this.records._records[index].weight = history[set].weight;
                  this.records._records[index].oneRM = history[set].oneRM;
                  this.records._records[index].records++;
                  this.g = 10;
                  this.bool = true;
                }
              }
            });
            if (this.checkRec == false){
              this.records._records.push({reps: history[set].reps, weight: history[set].weight, oneRM: history[set].oneRM, records: 1})
              this.g = 10;
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
  }  
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

  getLevel(): Promise<any> {
    return this.storage.get(this.username + '/level');
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

