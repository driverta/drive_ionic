import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';
import firebase from 'firebase';

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
	users: any = [];
	username: any;
  players = [];
  loop = 0;
  possibleFriends: any = []; 
  competingFriends: any = []; 
  competingFriendsOfFriends: any = []; 


  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public user: User) {
  }
  
  fetchLikelyFriends() { 
    console.log(this.competingFriends)
  }

  ionViewWillEnter() {
  	this.users = [];
    this.username = this.user._user;
    var query1 = firebase.database().ref("/users");
    var query2 = firebase.database().ref('/' + this.username + '/competing');

    query1.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        this.users.push(childData1);
      });
    });
    
    query2.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData2 = childSnapshot.val();
        this.competingFriends.push(childData2.name);
      });
    });
  }
  
  getFriendOfFriends(friend) {
    var query = firebase.database().ref('/' + friend + '/competing');
    
    query.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData2 = childSnapshot.val();
        this.competingFriends.push(childData2.name);
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
    if(v.name && val) {
      if (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        return true;
	      }
	    return false;
	    }
	  });
  }
    
  addToLeaderboard(item){
    var check = true;
    
    this.players.forEach( value => {

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
