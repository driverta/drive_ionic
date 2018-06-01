import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';

import { ProfileBarComponent } from '../../components/profile-bar/profile-bar';
import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';

@IonicPage()
@Component({
  selector: 'page-record-detail',
  templateUrl: 'record-detail.html',
})
export class RecordDetailPage {

	exercise: any;
  username: any;
  checkRec = false;

  @ViewChild(ProfileBarComponent) barChart: ProfileBarComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
  	private storage: Storage
  	) {
  	this.exercise = navParams.get('exercise');
  }

  ionViewWillEnter() {
    this.barChart.makeChart();
  }
}
