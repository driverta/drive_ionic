import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByMinutesPipe } from '../../pipes/sort-by-minutes/sort-by-minutes';

@Component({
  selector: 'cardio-profile-records',
  templateUrl: 'cardio-profile-records.html'
})
export class CardioProfileRecordsComponent {

  exercise: any;
  username: any;

  constructor(
    navParams: NavParams,
    public user: User,
    public records: Records
    ) {
    this.exercise = navParams.get('item');
    console.log(this.records._cardioRecords)
  }

}
