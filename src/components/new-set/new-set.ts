import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';

import firebase from 'firebase';

/**
 * Generated class for the NewSetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
	weight = 100;
  reps = 10;
  bool = false;
  exercise: any;

  @ViewChild(BarChartComponent) barChart: BarChartComponent
  @ViewChild(LineChartComponent) lineChart: LineChartComponent

  constructor(
    public navCtrl: NavController,
  	navParams: NavParams,
  	public user: User,
  	public levels: Levels,
  	private records: Records
  	) {

  	this.exercise = navParams.get('item');
 
  }

  ngOnInit() {
  	this.username = this.user._user

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

    this.records._records.forEach( (value, index) => {
      if (this.reps == value.reps) {
        if (this.weight > value.weight) {
          this.records._records[index].weight = this.weight;
          this.records._records[index].oneRM = oneRM;
          this.records._records[index].records++;
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
    records.set(this.records._records);

    //this.bar.makeChart();
    //this.lineChart.makeChart2();
    //this.navParams.get.makeCharts();
    this.ngOnInit();
  }

}

