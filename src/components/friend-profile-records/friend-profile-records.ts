import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { ProvidersUserProvider } from '../../providers/providers';
import { LiftingHistory } from '../../models/LiftingHistory';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@Component({
  selector: 'friend-profile-records',
  templateUrl: 'friend-profile-records.html'
})
export class FriendProfileRecordsComponent {

  exercise: any;
  user: any;
  checkRec = false;

  liftingHistory: LiftingHistory[];

  constructor(
    navParams: NavParams,
    public records: Records,
    private userService: ProvidersUserProvider
    ) {
    this.exercise = navParams.get('item');
    this.user = navParams.get('user')
    console.log(this.user)
  }

  ngOnInit() {
    this.records._records = [
      
    ];
    this.records._chart = [
      
    ];
    console.log("data")
    this.userService.getCompetingUsersLiftingHistoryByIdAndExercise(this.exercise, this.user.id).subscribe(data =>{
      this.liftingHistory = data;
      console.log(data)
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
