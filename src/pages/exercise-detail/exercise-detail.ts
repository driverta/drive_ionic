import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {
  item: any;
  xlevel = 1;
	xcurrent = 25;
	xtotal = 100;
	progress = 75;

  records = [
    { reps: 1, weight: 0, oneRM: 0, records: 0 },
    { reps: 2, weight: 0, oneRM: 0, records: 0 },
    { reps: 3, weight: 0, oneRM: 0, records: 0 },
    { reps: 4, weight: 0, oneRM: 0, records: 0 },
    { reps: 5, weight: 185, oneRM: 225, records: 1 },
    { reps: 6, weight: 0, oneRM: 0, records: 0 },
    { reps: 8, weight: 0, oneRM: 0, records: 0 },
    { reps: 10, weight: 135, oneRM: 225, records: 1 },
    { reps: 12, weight: 0, oneRM: 0, records: 0 },
    { reps: 15, weight: 0, oneRM: 0, records: 0 }
  ];

  history = [
    { date: '9-20-17', weight: 135, reps: 10, oneRM: 225},
    { date: '9-21-17', weight: 185, reps: 5, oneRM: 225}
  ]



  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

}
