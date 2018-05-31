import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

import { ProvidersUserProvider } from '../../providers/providers';
import { LiftingHistory } from '../../models/LiftingHistory';


@Component({
  selector: 'records',
  templateUrl: 'records.html'
})
export class RecordsComponent {

  exercise: any;
  username: any;
  checkRec = false;
  
  liftingHistory: LiftingHistory[];

  constructor(
    navParams: NavParams,
    public user: User,
    public records: Records,
    private userService: ProvidersUserProvider
    ) {
    this.exercise = navParams.get('exercise');
    console.log(this.exercise);
    console.log(records._records);
  }

  ionViewWillEnter() {
    this.records._records = [
      
    ];
    this.records._chart = [
      
    ];
    
    this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.liftingHistory = data;
      console.log("Here");
        
      this.getRecords();
    })
  }

  getRecords() {

    for(let history of this.liftingHistory){
      //console.log("here");
  
      this.checkRec =false;
      for(let record of this.records._records){
        if(history.reps == record.reps){
          this.checkRec = true;
          if(history.weight > record.weight){
            record.weight = history.weight;
            record.oneRepMax = history.oneRepMax;
            record.records++;
          }
          //console.log(this.checkRec);
        }
      }
      if (this.checkRec == false){

        this.records._records.push({reps: history.reps, weight: history.weight, oneRepMax: history.oneRepMax, records: 1})
      }
      console.log(this.records._records);
      
    }
  }

}
