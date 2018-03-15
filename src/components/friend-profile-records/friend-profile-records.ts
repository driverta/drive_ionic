import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';

import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@Component({
  selector: 'friend-profile-records',
  templateUrl: 'friend-profile-records.html'
})
export class FriendProfileRecordsComponent {

  exercise: any;
  username: any;

  constructor(
    navParams: NavParams,
    public records: Records
    ) {
    this.exercise = navParams.get('item');
  }

}
