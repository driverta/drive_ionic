import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-gains',
  templateUrl: 'friend-gains.html',
})
export class FriendGainsPage {

	username: string;
	gains = 0
	allTime = 0;
	month = 0;
	week = 0;
	today = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.username = navParams.get("username");
  }

  ionViewDidLoad() {
  	//alert(this.username)
    var todaysDate = new Date().toISOString().slice(0,10);
    var lastWeek = new Date();
    var lastMonth = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7)
    lastMonth.setDate(lastMonth.getDate() - 30)

    this.allTime = 0;
    this.month = 0;
    this.week = 0;
    this.today = 0;

    var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
      	var childData1 = childSnapshot.val();
      	var gains = childData1.gains;
      	var newDate = childData1.date.slice(0,10);
      	var testDate = new Date(newDate);

      	this.allTime = this.allTime + gains;

      	if(testDate > lastMonth) {
          this.month = this.month + gains;
        }

        if(testDate > lastWeek) {
          this.week = this.week + gains;
        }

        if(newDate == todaysDate) {
          this.today = this.today + gains;
        }

      })
    })
  }
}
