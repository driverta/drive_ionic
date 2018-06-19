import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import firebase from 'firebase';

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
  show = true;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.show = true;
  	this.users = [];
    this.players = [];
    this.username = localStorage.getItem("username");
    console.log(this.username)
    var query1 = firebase.database().ref("/users");

    query1.once("value").then( snapshot => {
      this.loop = 0;
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        this.loop++;
        this.users.push(childData1)
        if ( snapshot.numChildren() == this.loop ) {
          this.show = false;
        }
        //alert(this.user._user);      
      });
    });

    var query2 = firebase.database().ref("/" + this.username + '/competing');

    query2.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        
        this.players.push(childData1)
        //alert(this.user._user);      
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
    console.log(this.players)
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
