import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { CompetingModel } from '../../models/competing';

@IonicPage()
@Component({
  selector: 'page-competing',
  templateUrl: 'competing.html',
})
export class CompetingPage {

	list = [];
	username: string;
  user: any;
  listType: string;
  showDelete: boolean = true;
  canAddFriend: boolean = true;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
    private userService: ProvidersUserProvider) {
  	
    //this.list = navParams.get('list');
    this.listType = navParams.get('listType');
    
  	this.user = navParams.get('user');
    this.username = this.user.name;
  }

  ionViewDidLoad() {
    if (this.listType == "competing"){
      if (this.user == this.userService.getUser()){
        this.canAddFriend = false;
      }
      this.userService.getCompetingUsers(this.user.id).subscribe(data => {
        this.list = data
      })
    }
    if (this.listType == "competitors"){  
      this.userService.getCompetitors(this.user.id).subscribe(data => {
        this.list = data
        this.showDelete = false;
      })
    }
    this.list.forEach(player => {
      this.userService.getProfilePic(player.username).subscribe(pic => {
        player.profilePic = "data:image/jpeg;base64," + pic;
        if (pic['_body'] == "NahNigga"){
          player.profilePic = null
        } else {
          player.profilePic = "data:image/jpeg;base64," + pic;
        }
      })
    })  
  }

  openItem(item){
    this.navCtrl.push('ProfilePage', {
      item: item
    });
  }

  presentConfirm(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to remove ' + x.username + ' from your leaderboard?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
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
      this.ionViewDidLoad();
    })
  }

  addToLeaderboard(item) {
    var id = item.id;
    let competing = new CompetingModel;
    competing.id = this.userService.getUser().id;
    competing.competingUser = id

    this.userService.addCompetingUser(competing).subscribe(data => {
      if (data === "already_exists") {
        this.alreadyCompeting();
      }
      else {
        this.playerAdded();
      }
    })
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
