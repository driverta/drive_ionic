import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { CardioProfileBarComponent } from '../../components/cardio-profile-bar/cardio-profile-bar';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@IonicPage()
@Component({
  selector: 'page-record-cardio-detail',
  templateUrl: 'record-cardio-detail.html',
})
export class RecordCardioDetailPage {

  exercise: any;
  username: any;
  checkRec = false;
  tempRec = [];

  @ViewChild(CardioProfileBarComponent) cardioBar: CardioProfileBarComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
  	private storage: Storage
  	) {
  	this.exercise = navParams.get('exercise');
  }

  ionViewWillEnter() {
    this.cardioBar.makeChart();
  }
}
