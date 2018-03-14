import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-gains',
  templateUrl: 'gains.html',
})
export class GainsPage {

	username: string;
	gains = 0
	allTime = 0;
	month = 0;
	week = 0;
	today = 0;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private storage: Storage) {

  	this.username = localStorage.getItem("username");
  }

  ionViewDidLoad() {
    var todaysDate = new Date().toISOString().slice(0,10);
    var lastWeek = new Date();
    var lastMonth = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7)
    lastMonth.setDate(lastMonth.getDate() - 30)

    this.allTime = 0;
    this.month = 0;
    this.week = 0;
    this.today = 0;

    this.getGains().then((val) => {
      val.forEach((set) => {
      	var newDate = set.date.slice(0,10);
      	var testDate = new Date(newDate);

      	this.allTime = this.allTime + set.gains;

      	if(testDate > lastMonth) {
          this.month = this.month + set.gains;
        }

        if(testDate > lastWeek) {
          this.week = this.week + set.gains;
        }

        if(newDate == todaysDate) {
          this.today = this.today + set.gains;
        }

      })
    })
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

}
