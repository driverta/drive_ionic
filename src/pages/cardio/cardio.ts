import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { HistoryProvider } from '../../providers/providers';

import { CardioBarComponent } from '../../components/cardio-bar/cardio-bar';
import { CardioLineComponent } from '../../components/cardio-line/cardio-line';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cardio',
  templateUrl: 'cardio.html',
})
export class CardioPage {

	selectedValue = 0;
  exercise: any;
  username: any;
  segment = "workout";
  loop = 0;
  checkRec = false;
  history = [];
  tempRec = [];

  @ViewChild(CardioBarComponent) cardioBar: CardioBarComponent
  @ViewChild(CardioLineComponent) cardioLine: CardioLineComponent

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
    //alert("HEY")
    this.tempRec = this.records._cardio;

    this.records._cardioRecords = [
      
    ];
    this.records._chart = [
      
    ];
    this.username = localStorage.getItem("username");
    console.log(this.username)
    console.log(this.exercise)
    this.getRecords();
  }

  getRecords() {
    this.getExercises().then((val) => {
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach( (workout) => {
          //alert(history[workout].minutes)
          this.tempRec.forEach( (value, index) => {
            
            if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
              //alert("in")
              if (history[workout].mph > value.mph) {
                this.tempRec[index].miles = history[workout].miles;
                this.tempRec[index].time = history[workout].time;
                this.tempRec[index].mph = history[workout].mph;
                this.tempRec[index].records++;
              }
            }
          });
        })
      }
    }).then(() => {
      this.tempRec.forEach ((value) => {
        if (value.records > 0){
          //alert(value.records)
          this.records._cardioRecords.push(value)
        }
      })
      //console.log(this.records._cardioRecords)  
    })

    this.cardioBar.makeChart();
    this.cardioLine.makeChart2();
  }
  
  showBar() {
    
    this.selectedValue = 1;
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
