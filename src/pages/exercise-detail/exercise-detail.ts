import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {
  exercise: any;
  xlevel = 1;
	xcurrent = 25;
	xtotal = 100;
	progress = 75;
  i: any;

  history = [
    { date: '9-20-17', weight: 135, reps: 10, oneRM: 225},
    { date: '9-21-17', weight: 185, reps: 5, oneRM: 225}
  ]

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    private records: Records) {

    this.exercise = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    this.i = this.exercise.records
  }
}
