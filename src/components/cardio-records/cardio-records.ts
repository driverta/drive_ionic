import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { ProvidersUserProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByMinutesPipe } from '../../pipes/sort-by-minutes/sort-by-minutes';

import { CardioHistory } from '../../models/CardioHistory';

@Component({
  selector: 'cardio-records',
  templateUrl: 'cardio-records.html'
})
export class CardioRecordsComponent {

  exercise: any;
  username: any;
  tempRec = [];
  checkRec = false;
  cardioRecords = [];
  cardioHistory: CardioHistory[];

  constructor(
    navParams: NavParams,
    public records: Records,
    private userService: ProvidersUserProvider
    ) {
    this.exercise = navParams.get('exercise');
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
    console.log(this.exercise.exerciseName)
    this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.cardioHistory = data;
      this.getRecords();
    })
  }

  getRecords() {
    for(let history of this.cardioHistory){
  
      //this.checkRec =false;
      //console.log(this.tempRec)
      //for(let record of this.records._records){
        this.tempRec.forEach( (value, index) => {
          
          if (history.minutes >= value.min && history.minutes < value.max) {
            //console.log("history")
            //console.log(history)
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
    //console.log(this.cardioRecords)
  }

}
