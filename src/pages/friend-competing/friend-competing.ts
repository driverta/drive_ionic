import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-competing',
  templateUrl: 'friend-competing.html',
})
export class FriendCompetingPage {

  list = [];
  username: string;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController) {
  	
  	this.list = navParams.get('list');
  	this.username = localStorage.getItem("username");
  }

  ionViewDidLoad() {
    console.log(this.list);
  }

  openItem(item){
    this.navCtrl.push('FriendProfilePage', {
      item: item
    });
  }

  addToLeaderboard(item){
    var check = true;
    
    this.list.forEach( value => {

      if (value.name == item.name) {

        this.alreadyCompeting();
        check = false;
      } 
    })
  	
    if(check){
      /*
      var competing = firebase.database().ref('/' + this.username + '/competing');
      competing.child(item.name).set(item);

      var competitors = firebase.database().ref('/' + item.name + '/competitors');
      competitors.child(this.username).set(this.username);
      */
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
