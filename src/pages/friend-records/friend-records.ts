import { Component } from '@angular/core';
import { IonicPage,
  AlertController,
  NavController,
  NavParams,
  ActionSheetController
} from 'ionic-angular';

import { KeysPipe } from '../../pipes/keys/keys';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-friend-records',
  templateUrl: 'friend-records.html',
})
export class FriendRecordsPage {

  username: string;
  myUsername: string;
	lifts:any = {};
  setlifts:any = {};
  myLifts:any = {};
  bool = true;

  filter= "All";

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
    private storage: Storage,
    public alertCtrl: AlertController,
    public actShtCtrl: ActionSheetController) {
  	this.username = navParams.get("username");
    this.myUsername = localStorage.getItem("username");

  }

  ionViewDidLoad() {
    /*
  	var query1 = firebase.database().ref('/' + this.username + '/exercises');
    query1.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        var key = childSnapshot.key;
        
        this.setlifts[key] = childData1;
        this.lifts = this.setlifts
      
      });
    });

    this.getExercises().then((val) => {
      console.log(val)
      this.myLifts = val;
    });
    */
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

  /*
  getExercises(): Promise<any> {
    this.storage.ready().then(() => {
      console.log(this.storage.get(this.myUsername + '/exercises'))
      
    })
    return this.storage.get(this.myUsername + '/exercises');
  }
  */

  saveExercise(exercise) {
    this.bool = true;
    
    Object.keys(this.myLifts).forEach ( (key) => {
      if(this.myLifts[key].name == exercise.name && this.myLifts[key].variation == exercise.variation){
        this.presentAlert();
        this.bool = false;
      }
    })

    if(this.bool){
      if (Array.isArray(exercise.history)){
        exercise.history = [];
      } else {
        exercise.history = {};
      }

      var key = exercise.name + '-' + exercise.variation
      
      this.myLifts[key] = exercise
      
      /*
      this.storage.set(this.myUsername + '/exercises', this.myLifts).then(() =>{
        this.exerciseAdded();
      });
      */

    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Duplicate Exercise',
      subTitle: 'You already have an exercise with this name and Variation',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  exerciseAdded() {
    let alert = this.alertCtrl.create({
      title: 'Exercise added to your list!',
      buttons: ['Ok']
    });
    alert.present();
  }

}
