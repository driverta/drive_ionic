import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByMinutesPipe } from '../../pipes/sort-by-minutes/sort-by-minutes';


@Component({
  selector: 'cardio-records',
  templateUrl: 'cardio-records.html'
})
export class CardioRecordsComponent {

  exercise: any;
  username: any;

  constructor(
    navParams: NavParams,
    public user: User,
    public records: Records
    ) {
    this.exercise = navParams.get('item');
  }

}
