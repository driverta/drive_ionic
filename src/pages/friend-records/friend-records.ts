import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from 'ionic-angular';

import { KeysPipe } from '../../pipes/keys/keys';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-records',
  templateUrl: 'friend-records.html',
})
export class FriendRecordsPage {

  username: string;
	lifts:any = {};
  setlifts:any = {};

  filter= "All";

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
    public actShtCtrl: ActionSheetController) {
  	this.username = navParams.get("username");

  }

  ionViewDidLoad() {
  	var query1 = firebase.database().ref('/' + this.username + '/exercises');
    query1.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        var key = childSnapshot.key;
        
        this.setlifts[key] = childData1;
        this.lifts = this.setlifts
      
      });
    });
  }

  openItem(item) {
    if (item.muscle == "Cardio"){
      this.navCtrl.push('FriendCardioRecordDetailPage', {
        item: item,
        username: this.username
      });
    }else {
      this.navCtrl.push('FriendRecordDetailPage', {
        item: item,
        username: this.username
      });
    }
  }

  filterExercises(){
    let actionSheet = this.actShtCtrl.create({
      title: 'Filter Exercises By Muscle Group',
      buttons: [
        {
          text: 'All',
          handler: () => {
            this.lifts = this.setlifts
          }
        },{
          text: 'Chest',
          handler: () => {
            this.filter = "Chest";
            this.executeFilter()
          }
        },{
          text: 'Back',
          handler: () => {
            this.filter = "Back";
            this.executeFilter()          
          }
        },{
          text: 'Legs',
          handler: () => {
            this.filter = "Legs";
            this.executeFilter()          
          }
        },{
          text: 'Core',
          handler: () => {
            this.filter = "Core";
            this.executeFilter()          
          }
        },{
          text: 'Shoulders',
          handler: () => {
           this.filter = "Shoulders";
            this.executeFilter()
          }
        },{
          text: 'Arms',
          handler: () => {
            this.filter = "Arms";
            this.executeFilter()          
          }
        },{
          text: 'Cardio',
          handler: () => {
            this.filter = "Cardio";
            this.executeFilter()          
          }
        },{
          text: 'Other',
          handler: () => {
            this.filter = "Other";
            this.executeFilter()          
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  executeFilter(){
    this.lifts = {};
    //alert(this.lifts["Bench Press-Barbell"].name)
    Object.keys(this.setlifts).forEach( (key, index) => {
      if (this.setlifts[key].muscle == this.filter){
        this.lifts[key] = this.setlifts[key]
      }
    });
  }

}
