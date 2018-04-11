import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-competing',
  templateUrl: 'competing.html',
})
export class CompetingPage {

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

  presentConfirm(x) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to remove ' + x.name + ' from your leaderboard?',
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
            this.deleteSet(x);
          }
        }
      ]
    });
    alert.present();
  }

  deleteSet(x) {

    var set = x;
    var query1 = firebase.database().ref('/' + this.username + '/competing');
    query1.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        if (x.name == childData1.name) {
          childSnapshot.getRef().remove().then(() => {
            console.log('Write succeeded!');
            this.list.forEach( (val, index) => {
            	if (val.name == childData1.name){
            		this.list.splice(index, 1);
            		this.ionViewDidLoad();
            	}
            })
          });
        }
      });
    });
  }

}
