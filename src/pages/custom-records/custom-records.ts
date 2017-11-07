import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

import { Records } from '../../providers/providers';

/**
 * Generated class for the CustomRecordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-records',
  templateUrl: 'custom-records.html',
})
export class CustomRecordsPage {

  newRecord = {reps: 11, weight: 0, oneRM: 0, records: 0};
  sameRecord = false;

	private getDataObserver: any;
  public getData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private records: Records) {

  	this.getDataObserver = null;
    this.getData = Observable.create(observer => {
        this.getDataObserver = observer;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomRecordsPage');
  }

  tooManyAlert() {
    let alert = this.alertCtrl.create({
      title: 'You can only track 10 Records!',
      buttons: ['Ok']
    });
    alert.present();
  }

  duplicateAlert() {
    let alert2 = this.alertCtrl.create({
      title: 'You are already tracking this Record!',
      buttons: ['Ok']
    });
    alert2.present();
  }

  deleteRec(x) {
    this.records._records.forEach( (value, index) => {
      if (value.reps == x.reps) {
        this.records._records.splice(index, 1);
      }
    });
  }
  
  addRecord() {
    this.records._records.forEach( (value, index) => {
      if (value.reps == this.newRecord.reps) {
        this.sameRecord = true;
      }
    });
    if (this.records._records.length == 10){
      this.tooManyAlert();
    }
    else if (this.sameRecord) {
      this.duplicateAlert();
    } else {
      var n = this.newRecord
      this.records._records.push(n);
    }
    this.records._records = this.records._records.sort((a, b) => a.reps - b.reps);
    this.sameRecord = false;
  }

  saveRecord() {
    this.navCtrl.push('ItemDetailPage');
  }
}
