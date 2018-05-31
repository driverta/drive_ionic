import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User, ProvidersUserProvider } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { SortByGainsPipe } from '../../pipes/sort-by-gains/sort-by-gains'

import firebase from 'firebase';
import { UserModel } from '../../models/users';
import { CompetingModel } from '../../models/competing';

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html'
})
export class SearchPage {

  currentItems: any = [];
  timeFilter = "All Time"
  user: any;
  username: String;
  rank = "Frail Body"
  loop = 0;
  gains = 0;
  loop2 = 0;
  show = true;
  total = false;
  week = false;
  month = false;
  day = false;
  competingUsers: UserModel[] = new Array<UserModel>();

  players= [
    {name: "tom", level: 3, gains: 100, profilePic: "", totalGains: [], rank: "Frail Body"}
  ]

  constructor(
    public alertCtrl: AlertController, 
    public levels: Levels, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userService: ProvidersUserProvider) {
      this.user = this.userService.getUser();
    }

  addCompetitors() {
    this.navCtrl.push('AddCompetitorsPage')
  }

  ionViewWillEnter(){
    this.show = true;
    this.username = this.user.username;
    this.players = [];
    this.timeFilter = "All Time"


    this.userService.getLeaderboardData(this.userService.getUser().id).subscribe(data =>{
      this.competingUsers = data;
      this.show = false;
      this.filterDay('All Time');
    });
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
    this.competingUsers.forEach((user) =>{
      switch(ev) {
        case "Today":
          user.gains = user.gainsToday;
          break;
        case "Week":
          user.gains = user.gainsWeek;
          break;
        case "Month":
          user.gains = user.gainsMonth;
          break;
        default:
          user.gains = user.gainsTotal;
          break;
      }
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
            this.removeCompetingUser(x);
          }
        }
      ]
    });
    alert.present();
  }

  removeCompetingUser(competingUser) {
    let competing = new CompetingModel;
    competing.id = this.user.id;
    competing.competingUser = competingUser.id
    this.userService.removeCompetingUser(competing).subscribe(data => {
      console.log(data);
      this.ionViewWillEnter();
    })
  }

  openItem(item){
    this.navCtrl.push('FriendProfilePage', {
      item: item
    });
  }
}
