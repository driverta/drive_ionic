import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';

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
    console.log(competingUser);
    this.userService.getCompetingUsers(competingUser.id).subscribe(data => {
      this.ionViewDidLoad();
    })
    // var set = x;
    // var query1 = firebase.database().ref('/' + this.username + '/competing');
    // query1.once("value").then( snapshot => {
    //   snapshot.forEach( childSnapshot => {
    //     var childData1 = childSnapshot.val();
    //     if (x.name == childData1.name) {
    //       childSnapshot.getRef().remove().then(() => {
    //         console.log('Write succeeded!');
    //         this.list.forEach( (val, index) => {
    //         	if (val.name == childData1.name){
    //         		this.list.splice(index, 1);
    //         		this.ionViewDidLoad();
    //         	}
    //         })
    //       });
    //     }
    //   });
    // });
  }

}
