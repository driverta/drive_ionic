import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Levels } from '../../providers/providers';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-profile',
  templateUrl: 'friend-profile.html',
})
export class FriendProfilePage {

	username: any;
	user: any;
	xlevel = 1;
  xcurrent = 25;
  xtotal = 100;
  progress = 25;
  gains = 0;
  records = 0;
  competing = 0;
  competitors = 0;
  loop = 0;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public levels: Levels) {

  	this.user = navParams.get('item');
  	this.username = this.user.name;
  }

  ionViewDidLoad() {
    var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      this.loop = 0;
      this.gains = 0;
      this.records = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData1 = childSnapshot.val();
        var gains = childData1.gains;
        this.gains = this.gains + gains
        if (gains == 10){
          this.records++;
        }
        if ( snapshot.numChildren() == this.loop )
          this.setLevel()
      })
    })

    var queryCompeting = firebase.database().ref('/' + this.username + '/competing');
    queryCompeting.once("value").then( snapshot => {
      this.competing = 0;
      snapshot.forEach( childSnapshot => {
        this.competing++
      })
    })

    var queryCompetitors = firebase.database().ref('/' + this.username + '/competitors');
    queryCompetitors.once("value").then( snapshot => {
      this.competitors = 0;
      snapshot.forEach( childSnapshot => {
        this.competitors++
      })
    })
  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    });
  }

  getProfileImageStyle() {

    try {
      //this.noLoad();
      return 'url(' + this.user.profilePic + ')'
    }
    catch(err){

    }
    finally{
      
    }
    
  }

}
