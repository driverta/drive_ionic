import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-competitors',
  templateUrl: 'competitors.html',
})
export class CompetitorsPage {

	list = [];
	competing = [];
	username: string;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController) {

  	this.list = navParams.get('list');
  	this.competing = navParams.get('competing');
  	this.username = localStorage.getItem("username");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitorsPage');
  }

  addToLeaderboard(item){
    var check = true;
    
    this.competing.forEach( value => {

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

  openItem(item){
    this.navCtrl.push('FriendProfilePage', {
      item: item
    });
  }

}
