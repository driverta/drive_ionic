import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../providers/providers';

/**
 * Generated class for the MedalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medals',
  templateUrl: 'medals.html',
})
export class MedalsPage {

	medal1: number;
	username: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedalsPage');
    this.username = this.username = localStorage.getItem("username");
    this.getExercises().then((val) => {
    	console.log(val);
    	this.medal1 = Object.keys(val).length;
        });
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
	}
}
