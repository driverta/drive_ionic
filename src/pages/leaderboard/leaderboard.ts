import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User, ProvidersUserProvider } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { SortByGainsPipe } from '../../pipes/sort-by-gains/sort-by-gains'

import firebase from 'firebase';
import { UserModel } from '../../models/users';

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html'
})
export class SearchPage {

  currentItems: any = [];
  timeFilter = "All Time"
  username: any;
  rank = "Frail Body"
  loop = 0;
  gains = 0;
  loop2 = 0;
  show = true;
  competingUsers: UserModel[] = new Array<UserModel>();

  players= [
    {name: "tom", level: 3, gains: 100, profilePic: "", totalGains: [], rank: "Frail Body"}
  ]

  constructor(public alertCtrl: AlertController, public user: User, public levels: Levels, public navCtrl: NavController, public navParams: NavParams, public userService: ProvidersUserProvider) { }

  addCompetitors() {
    this.navCtrl.push('AddCompetitorsPage')
  }

  ionViewWillEnter(){
    this.show = true;
    this.username = localStorage.getItem("username");
    this.players = [];
    this.timeFilter = "All Time"


    this.userService.getCompetingUsers(this.userService.getUser().id).subscribe(data =>{
      this.competingUsers = data;
      this.show = false;
      console.log(data)
    });

    // var queryPlayers = firebase.database().ref('/' + this.username + '/competing');
    // queryPlayers.once("value").then( snapshot => {
    //   this.loop = 0;
    //   snapshot.forEach( childSnapshot => {
    //     this.loop++
    //     var childData1 = childSnapshot.val();
    //     var data = {name: childData1.name, level: 0, gains: 0, profilePic: "", totalGains: [], rank: "Frail Body"};
    //     this.players.push(data);
    //     if ( snapshot.numChildren() == this.loop ) {
    //       this.getGains();
    //       this.getPic();
    //     }
    //   });
    // });
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
          this.players[index].totalGains.push(childData1)
          var gains = childData1.gains;
          this.gains = this.gains + gains
          if ( snapshot.numChildren() == this.loop ) {
            this.show = false;
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
        var xlevel = this.players[i].level
      }
      if (xlevel < 10){
        this.players[i].rank = "Frail Body"
      } else if ( xlevel >= 10 && xlevel < 20){
        this.players[i].rank = "Gym Rat"
      } else if ( xlevel >= 20 && xlevel < 30){
        this.players[i].rank = "Bodybuilder"
      } else if ( xlevel > 30){
        this.players[i].rank = "Olympian"
      }
    });
  }

  filterDay(ev) {
    var todaysDate = new Date().toISOString().slice(0,10);
    var lastWeek = new Date();
    var lastMonth = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7)

    lastMonth.setDate(lastMonth.getDate() - 30)
    
    this.players.forEach( (value, index) => {
      this.gains = 0
      value.totalGains.forEach( childData1 => {
        this.loop++
        
        var gains = childData1.gains;
        var date = childData1.date;
        var newDate = date.slice(0,10);
        //alert(newDate);
        var testDate = new Date(newDate);

        if(ev == "All Time"){
          this.gains = this.gains + gains;
        }
        
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
        value.gains = this.gains;
      });
    });
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
    var query1 = firebase.database().ref('/' + this.username + '/competing');
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

  openItem(item){
    this.navCtrl.push('FriendProfilePage', {
      item: item
    });
  }
}
