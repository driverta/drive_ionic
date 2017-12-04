import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';

import firebase from 'firebase';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class AddCompetitorsPage {

	currentItems: any = [];
	users: any = [];
	username: any;
  players = [];
  loop = 0;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public user: User) {
  }

  ionViewWillEnter() {
  	this.users = [];
    var query1 = firebase.database().ref("/users");

    query1.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        this.users.push(childData1)
        //alert(this.user._user);      
      });
    });
    this.username = this.user._user
    this.players = [];
    var queryPlayers = firebase.database().ref('/' + this.username + '/competing');
    queryPlayers.once("value").then( snapshot => {
      this.loop = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData1 = childSnapshot.val();
        var data = {name: childData1.name, level: 0, gains: 0};
        this.players.push(data);
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
      var competitors = firebase.database().ref('/' + this.username + '/competing');
      competitors.child(item.name).set(item);
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
