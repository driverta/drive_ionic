import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { SortByGainsPipe } from '../../pipes/sort-by-gains/sort-by-gains'

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
  loop2 = 0;

  players= [
    {name: "tom", level: 3, gains: 100, profilePic: ""}
  ]

  constructor(public alertCtrl: AlertController, public user: User, public levels: Levels, public navCtrl: NavController, public navParams: NavParams) { }

  addCompetitors() {
    this.navCtrl.push('AddCompetitorsPage')
  }

  ionViewWillEnter(){
    this.username = this.user._user;
    this.players = [];

    var queryPlayers = firebase.database().ref('/local/' + this.username + '/competing');
    queryPlayers.once("value").then( snapshot => {
      this.loop = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData1 = childSnapshot.val();
        var data = {name: childData1.name, level: 0, gains: 0, profilePic: ""};
        this.players.push(data);
        if ( snapshot.numChildren() == this.loop ) {
          this.getGains();
          this.getPic();
        }
      });
    });
  }

  getGains() {
    this.players.forEach( (value, index) => {
      var queryGains = firebase.database().ref('/local/' + value.name + '/gains');
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

  getPic() {
    this.players.forEach( value => {
      var queryGains = firebase.database().ref('/users');
      queryGains.once("value").then( snapshot => {
        snapshot.forEach( childSnapshot => {
          var childData1 = childSnapshot.val();
          if (childData1.name == value.name){
            value.profilePic = childData1.profilePic;
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

  filterDay(ev) {
    var todaysDate = new Date().toISOString().slice(0,10);
    var lastWeek = new Date();
    var lastMonth = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7)

    lastMonth.setDate(lastMonth.getDate() - 30)
    if(ev == "All Time"){
      this.ionViewWillEnter();
    }else{
      this.players.forEach( (value, index) => {
      var queryGains = firebase.database().ref('/local' + value.name + '/gains');
      queryGains.once("value").then( snapshot => {
        this.loop = 0;
        this.gains = 0;
        snapshot.forEach( childSnapshot => {
          this.loop++
          var childData1 = childSnapshot.val();
          var gains = childData1.gains;
          var date = childData1.date;
          var newDate = date.slice(0,10);
          //alert(newDate);
          var testDate = new Date(newDate);
          
          //alert(testDate);
          if(ev == "Today"){

            if(newDate == todaysDate) {
              this.gains = this.gains + gains;
            }
          }
          if(ev == "Week"){
            
            if(testDate > lastWeek) {
              this.gains = this.gains + gains;
            }
          }
          if(ev == "Month"){
            if(testDate > lastMonth) {
              this.gains = this.gains + gains;
            }
          }
          
          if ( snapshot.numChildren() == this.loop ) {
            value.gains = this.gains;
            
          }
        });
      });
    })
    }
  }

  presentConfirm(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to remove ' + x.name + ' from your leaderboard?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteSet(x);
          }
        }
      ]
    });
    alert.present();
  }

  deleteSet(x) {

    var set = x;
    var query1 = firebase.database().ref('/local/' + this.username + '/competing');
    query1.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        if (x.name == childData1.name) {
          childSnapshot.getRef().remove().then(() => {
            console.log('Write succeeded!');
            this.ionViewWillEnter();
          });
        }
      });
    });
  }
}
