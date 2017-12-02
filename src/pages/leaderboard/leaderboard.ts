import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html'
})
export class SearchPage {

  currentItems: any = [];
  timeFilter = "All Time"
  username: any;
  loop = 0;
  gains = 0;

  players = [
    {name: "tdriver369", level: 7, gains: 375},
    {name: "battleblake", level: 4, gains: 235},
    {name: "fratdromazos", level: 2, gains: 105}
  ]

  constructor(public user: User, public levels: Levels, public navCtrl: NavController, public navParams: NavParams) { }

  addCompetitors() {
    this.navCtrl.push('AddCompetitorsPage')
  }

  ionViewWillEnter(){
    this.username = this.user._user;
    this.players = [];

    var queryPlayers = firebase.database().ref('/' + this.username + '/competing');
    queryPlayers.once("value").then( snapshot => {
      this.loop = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData1 = childSnapshot.val();
        var data = {name: childData1.name, level: 0, gains: 0};
        this.players.push(data);
        if ( snapshot.numChildren() == this.loop ) {
          this.getGains()
        }
      });
    });
  }

  getGains() {
    this.players.forEach( (value, index) => {
      var queryGains = firebase.database().ref('/' + value.name + '/gains');
      queryGains.once("value").then( snapshot => {
        this.loop = 0;
        this.gains = 0;
        snapshot.forEach( childSnapshot => {
          this.loop++
          var childData1 = childSnapshot.val();
          var gains = childData1.gains;
          this.gains = this.gains + gains
          if ( snapshot.numChildren() == this.loop ) {
            value.gains = this.gains
            this.setLevel(this.gains, index)
          }
        });
      });
    })
  }

  setLevel (gains, i) {
    this.levels._levels.forEach( value => {
      if (gains > value.totalPoints) {
        this.players[i].level = value.level;
      }
    });
  }

}
