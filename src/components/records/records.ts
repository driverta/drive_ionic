import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

import firebase from 'firebase';

@Component({
  selector: 'records',
  templateUrl: 'records.html'
})
export class RecordsComponent {

  exercise: any;
  username: any;

  constructor(
    navParams: NavParams,
    public user: User,
    private records: Records
    ) {

    this.exercise = navParams.get('item');
 
  }

  ngOnInit() {
    this.username = this.user._user;
    var count = 0; 
    var queryRecords = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/records');
    queryRecords.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        var r = {reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: childData1.records};
        this.records._records[count] = r;
        //alert(this.records._records[count].records);
        count++     
      });
    });
  }

}
