import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {
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
  	this.username = this.user._user
  	var competitors = firebase.database().ref('/' + this.username + '/competing');
  	competitors.child(item.name).set(item);
  }


}
