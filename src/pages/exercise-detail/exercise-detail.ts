import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { HistoryProvider } from '../../providers/providers';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps'

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {

  selectedValue = 0;
  exercise: any;
  username: any;
  segment = "set";
  loop = 0;
  checkRec = false;
  history = [];

  @ViewChild(BarChartComponent) barChart: BarChartComponent
  @ViewChild(LineChartComponent) lineChart: LineChartComponent

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public records: Records,
    public user: User,
    public levels: Levels,
    private storage: Storage) {

    this.exercise = navParams.get('item');
  }

  ionViewWillEnter() {
    this.records._records = [
      
    ];
    this.records._chart = [
      
    ];
    this.username = localStorage.getItem("username");
    
    this.getRecords();
  }

  getRecords() {
    this.getExercises().then((val) => {
      console.log('Your json is', val);
      var key = this.exercise.name + '-' + this.exercise.variation
      val[key].history.forEach( set => {
        this.checkRec = false;
        this.records._records.forEach( (value, index) => {
          if (set.reps == value.reps) {
            this.checkRec = true;
            if (set.weight > value.weight) {
              this.records._records[index].weight = set.weight;
              this.records._records[index].oneRM = set.oneRM;
              this.records._records[index].records++;
            }
          }
        });
        if (this.checkRec == false){
          this.records._records.push({reps: set.reps, weight: set.weight, oneRM: set.oneRM, records: 1})
        }
      })
      
    });
    /*
    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    queryHistory.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        this.checkRec = false;
        this.records._records.forEach( (value, index) => {
          if (childData1.reps == value.reps) {
            this.checkRec = true;
            if (childData1.weight > value.weight) {
              this.records._records[index].weight = childData1.weight;
              this.records._records[index].oneRM = childData1.oneRM;
              this.records._records[index].records++;
            }
          }
        });
        if (this.checkRec == false){
          this.records._records.push({reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: 1})
        }
      });
    });
    */
    this.barChart.makeChart();
    this.lineChart.makeChart2();
  }
  
  showBar() {
    this.selectedValue = 1;
  }


  test() {
    alert("Hi");
  }

  showLine() {
    this.selectedValue = 2;
  }

  hideCharts() {
    this.selectedValue = 0;
  }
  
  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }
}
