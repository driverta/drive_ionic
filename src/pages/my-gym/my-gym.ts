import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyGymPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-gym',
  templateUrl: 'my-gym.html',
})
export class MyGymPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGymPage');
  }

  toMedals(){
    // this.navCtrl.push('ExercisesPage', {
      
    // });
  }

  toWorkouts(){
    // this.navCtrl.push('ExercisesPage', {
      
    // });
  }

}
