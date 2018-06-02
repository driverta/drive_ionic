import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { UserModel } from '../../models/users';
import { CompetingModel } from '../../models/competing';

@IonicPage()
@Component({
  selector: 'page-friend-competing',
  templateUrl: 'friend-competing.html',
})
export class FriendCompetingPage {

  list = [];
  username: string;
  users: UserModel[];
  competing: CompetingModel[];
  userId: number;
  id: number;
  user: any;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
    private userService: ProvidersUserProvider) {
  	
  	//this.list = navParams.get('list');
  	this.username = this.userService.getUser().username;
    this.userId = this.userService.getUser().id;
    this.user = navParams.get('item');
    this.list = navParams.get('list');
  }

  ionViewDidLoad() {
    console.log(this.list);
    this.list.forEach(player => {
      alert("here")
      this.userService.getProfilePic(player.username).subscribe(pic => {
        player.profilePic = "data:image/jpeg;base64," + pic['_body'];
      })
    })
  }

  openItem(item){
    this.navCtrl.push('FriendProfilePage', {
      item: item
    });
  }

  addToLeaderboard(item){
    this.id = item.id;
    let competing = new CompetingModel;
    competing = {id: this.userId, competingUser: this.id}
    var check = true;
    
    this.list.forEach( value => {

      if (value.name == item.name) {

        this.alreadyCompeting();
        check = false;
      } 
    })
  	
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

}
