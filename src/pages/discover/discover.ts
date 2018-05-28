import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';
import firebase from 'firebase';

import { SortByGainsPipe } from '../../pipes/sort-by-gains/sort-by-gains'

import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { UserModel } from '../../models/users';

/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  
  currentItems: any = [];
	users: UserModel[];
	username: any;
  loop = 0;
  likelyFriends: any = []; 
  competingFriends: any = []; 
  competingFriendsOfFriends: any = [];
  show = true;
  segment = "discover_people";

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public user: User, private userService: ProvidersUserProvider) {
  }

  ionViewWillEnter() {
    this.show = true;
  	this.users = [];
    this.likelyFriends = [];
    this.competingFriends = [];
    this.competingFriendsOfFriends = [];
    this.username = this.user._user;
    var query1 = firebase.database().ref("/users");
    var query2 = firebase.database().ref('/' + this.username + '/competing');

    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });


    
    query2.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var competingFriend = childSnapshot.val();
        this.competingFriends.push(competingFriend.name);
        this.getFriendsOfFriends(competingFriend.name);
      });
    });
  }
  
  getFriendsOfFriends(friend) {
    var query = firebase.database().ref('/' + friend + '/competing');
  
    query.once("value").then( snapshot => {
      var loop = 0;
      snapshot.forEach( childSnapshot => {
        var competingFriendOfFriend = childSnapshot.val().name;
        if (!this.competingFriendsOfFriends.includes(competingFriendOfFriend) && !this.competingFriends.includes(competingFriendOfFriend)) {
          this.competingFriendsOfFriends.push(competingFriendOfFriend);
          var likelyFriend = {
            name: competingFriendOfFriend,
            profilePic: '',
            gains: 0,
          };
          var queryGains = firebase.database().ref('/' + competingFriendOfFriend + '/gains');
          var loop = 0;
          queryGains.once("value").then( snapshot => {
            loop++;
            var totalGains = 0;
            snapshot.forEach( childSnapshot => {
              var childData1 = childSnapshot.val();
              totalGains = totalGains + childData1.gains;
            });
            likelyFriend.gains = totalGains;
            var queryGains = firebase.database().ref('/users/' + competingFriendOfFriend + '/profilePic');
            queryGains.once("value").then( profilePic => {
              likelyFriend.profilePic = profilePic.val();
              console.log(likelyFriend);
              this.likelyFriends.push(likelyFriend);
              if (loop == snapshot.numChildren()) {
                this.show = false;
              }
            });
          });      
        }  
      });
    });
  }
  
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.users.filter((v) => {
    if(v.username && val) {
      if (v.username.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        return true;
	      }
	    return false;
	    }
	  });
    console.log(this.currentItems);
  }
    
  addToLeaderboard(item){
    var check = true;
    
    this.competingFriends.forEach( value => {
    
      if (value.name == item.name) {
    
        this.alreadyCompeting();
        check = false;
      } 
    })
    
    if(check){
      var competing = firebase.database().ref('/' + this.username + '/competing');
      competing.child(item.name).set(item);

      var competitors = firebase.database().ref('/' + item.name + '/competitors');
      competitors.child(this.username).set(this.username);
      this.playerAdded();
    }
  }
  
  // getGains(username): Promise<any> {
  //   var queryGains = firebase.database().ref('/' + username + '/gains');
  //   queryGains.once("value").then( snapshot => {
  //     var totalGains = 0;
  //     snapshot.forEach( childSnapshot => {
  //       var childData1 = childSnapshot.val();
  //       totalGains = totalGains + childData1.gains;
  //     });
  //     console.log(totalGains);
  //     return totalGains;
  //   });
  // }
  
  // getPic(username): Promise<any> {
  //   var queryGains = firebase.database().ref('/users/' + username + '/profilePic');
  //   queryGains.once("value").then( profilePic => {
  //     return profilePic.val()
  //   });
  // }

  alreadyCompeting() {
    let alert = this.alertCtrl.create({
      title: 'You are already Cometing with this player!',
      buttons: ['Ok']
    });
    alert.present();
  }

  playerAdded() {
    let alert = this.alertCtrl.create({
      title: 'Player added to your leaderboard!',
      buttons: ['Ok']
    });
    alert.present();
  }
}
