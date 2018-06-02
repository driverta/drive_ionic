import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { CompetingModel } from '../../models/competing';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';

@IonicPage()
@Component({
  selector: 'page-competitors',
  templateUrl: 'competitors.html',
})
export class CompetitorsPage {

	list = [];
	competing = [];
	username: string;
  id: number;
  competingOne: CompetingModel[];
  userId: number;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
    private userService: ProvidersUserProvider) {

  	this.list = navParams.get('list');
  	this.username = this.userService.getUser().username;
    this.userId = this.userService.getUser().id;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitorsPage');
    this.list.forEach(player => {
      this.userService.getProfilePic(player.username).subscribe(pic => {
        player.profilePic = "data:image/jpeg;base64," + pic['_body'];
      })
    })
  }

  addToLeaderboard(item){
    this.id = item.id;
    let competing = new CompetingModel;
    competing.id = this.userId;
    competing.competingUser = this.id
    var check = true;
    
    /////// needs work /////
    this.competing.forEach( value => {

      if (value.name == item.name) {

        this.alreadyCompeting();
        check = false;
      } 
    })
  	/////////////

    if(check){
      this.userService.addCompetingUser(competing).subscribe(data => {

      })
      // var competing = firebase.database().ref('/' + this.username + '/competing');
      // competing.child(item.name).set(item);

      // var competitors = firebase.database().ref('/' + item.name + '/competitors');
      // competitors.child(this.username).set(this.username);
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
