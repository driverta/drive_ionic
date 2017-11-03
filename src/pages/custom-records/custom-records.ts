import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

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

	sampleRecords = [1,2,3,4,5,6,8,10,12,15];

	private getDataObserver: any;
  public getData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.getDataObserver = null;
    this.getData = Observable.create(observer => {
        this.getDataObserver = observer;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomRecordsPage');
  }

  deleteRec(x) {
  	for (let i of this.sampleRecords) {
  		if (this.sampleRecords[i] == x) {
  			this.sampleRecords.splice(i);
  		}
  	}
  	setTimeout(() => {
      // The next method will notify all the subscribers and will 
      // send the data.
      this.getDataObserver.next(this.sampleRecords);
    }, 1000);

  }

}
