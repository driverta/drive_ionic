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

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
    private userService: ProvidersUserProvider) {
  	
  	//this.list = navParams.get('list');
  	this.user = this.userService.getUser();
    this.username = this.user.name;
  }

  ionViewDidLoad() {
    this.userService.getCompetingUsers(this.user.id).subscribe(data => {
      this.list = data
      this.list.forEach(player => {
        this.userService.getProfilePic(player.username).subscribe(pic => {
          player.profilePic = "data:image/jpeg;base64," + pic['_body'];
          if (pic['_body'] != "NahNigga"){
            //this.show = false;
          }
        })
      })
    })
  }

  openItem(item){
    console.log(item)
    this.navCtrl.push('FriendProfilePage', {
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
      this.ionViewDidLoad();
    })
  }
}
