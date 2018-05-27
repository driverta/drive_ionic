import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';
import firebase from 'firebase';

import { SortByMinutesPipe } from '../../pipes/sort-by-minutes/sort-by-minutes';

@Component({
  selector: 'friend-cardio-profile-records',
  templateUrl: 'friend-cardio-profile-records.html'
})
export class FriendCardioProfileRecordsComponent {

  exercise: any;
  username: any;
  tempRec = [];
  loop = 0;
  rec = [];

  constructor(
    navParams: NavParams,
    public user: User,
    public records: Records
    ) {
    this.exercise = navParams.get('item');
    this.username = navParams.get("username");
    console.log(this.records._cardioRecords)
  }

  public makeTable() {
    alert("HI")
    this.tempRec = this.records._cardio;

    this.records._cardioRecords = [
      
    ];
    this.rec = [
      
    ];
    this.records._chart = [
      
    ];
    
    
    this.getRecords();
  }

  getRecords() {
    /*
    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    queryHistory.once("value").then( snapshot => {
      this.loop = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData1 = childSnapshot.val();
        this.tempRec.forEach( (value, index) => {
            
          if (childData1.minutes >= value.min && childData1.minutes < value.max) {
            //alert("in")
            if (childData1.mph > value.mph) {
              this.tempRec[index].miles = childData1.miles;
              this.tempRec[index].time = childData1.time;
              this.tempRec[index].mph = childData1.mph;
              this.tempRec[index].records++;
            }
          }
        });
        if ( snapshot.numChildren() == this.loop ) {
          this.tempRec.forEach ((value) => {
            if (value.records > 0){
              this.rec.push(value)
              console.log(this.rec)
            }
          })
        }
      });
    });
    */
  }
}
