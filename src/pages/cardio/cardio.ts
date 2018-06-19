import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Items, ProvidersUserProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { HistoryProvider } from '../../providers/providers';
import { CardioHistory } from '../../models/CardioHistory';

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
  user: any;
  segment = "workout";
  loop = 0;
  checkRec = false;
  history = [];
  tempRec = [];

  cardioHistory: CardioHistory[];

  @ViewChild(CardioBarComponent) cardioBar: CardioBarComponent
  @ViewChild(CardioLineComponent) cardioLine: CardioLineComponent

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public records: Records,
    public levels: Levels,
    private storage: Storage,
    private userService: ProvidersUserProvider) {
    
    this.user = userService.getUser();
    this.exercise = navParams.get('exercise');
  }

  ionViewWillEnter() {
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
    this.records._chart = [
      
    ];
    this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.cardioHistory = data;
      console.log(this.records._cardioRecs)
      this.cardioBar.makeChart();
      this.cardioLine.makeChart2();
      //this.getRecords();
    })
  }

  // getRecords() {
  //   for(let history of this.cardioHistory){
  //     //console.log("here");
  
  //     this.checkRec =false;
  //     for(let record of this.records._records){
  //       this.tempRec.forEach( (value, index) => {
          
  //         if (history.minutes >= value.min && history.minutes < value.max) {
  //           if (history.mph > value.mph) {
  //             this.tempRec[index].miles = history.miles;
  //             this.tempRec[index].mph = history.mph;
  //             this.tempRec[index].records++;
  //             // this.tempRec[index].min = value.min;
  //             // this.tempRec[index].max = value.max;
  //           }
  //         }
  //       });
  //     }
  //     this.tempRec.forEach ((value) => {
  //       if (value.records > 0){
  //         this.records._cardioRecords.push(value)
  //       }
  //     })
  //     if (this.checkRec == false){
  //       this.records._records.push({mph: history.mph, miles: history.miles, minutes: history.minutes , records: 1})
  //     }
  //     console.log(this.records._records);
      
  //   }

    // this.getExercises().then((val) => {
    //   var keyOne = this.exercise.name + '-' + this.exercise.variation
    //   var history = val[keyOne].history;
    //   //console.log(val[keyOne].history);
    //   if (history) {
    //     Object.keys(history).forEach( (workout) => {
    //       //alert(history[workout].minutes)
    //       this.tempRec.forEach( (value, index) => {
            
    //         if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
    //           //alert("in")
    //           if (history[workout].mph > value.mph) {
    //             this.tempRec[index].miles = history[workout].miles;
    //             this.tempRec[index].time = history[workout].time;
    //             this.tempRec[index].mph = history[workout].mph;
    //             this.tempRec[index].records++;
    //           }
    //         }
    //       });
    //     })
    //   }
    // }).then(() => {
    //   this.tempRec.forEach ((value) => {
    //     if (value.records > 0){
    //       //alert(value.records)
    //       this.records._cardioRecords.push(value)
    //     }
    //   })
    //   //console.log(this.records._cardioRecords)  
    // })

    // 
    // 
//  }
  
  showBar() {
    
    this.selectedValue = 1;
  }

  showLine() {
    this.selectedValue = 2;
  }

  hideCharts() {
    this.selectedValue = 0;
  }
}
