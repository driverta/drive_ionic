import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ActionSheetController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';

import firebase from 'firebase';

import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ListMasterPage {
  lifts = [{name: "Bench", muscle: "chest"}];
  setlifts = [];
  username = "test";

  names = ["Lift 1"];
  about = ["nothing"];

  filter: string;


  constructor(
    public navCtrl: NavController,
    public user: User,
    public items: Items,
    public records: Records,
    public modalCtrl: ModalController,
    public actShtCtrl: ActionSheetController) {

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewWillEnter() {
    this.lifts = [];
    this.setlifts = [];
    this.username = this.user._user
    var query1 = firebase.database().ref('/' + this.username + '/exercises');

    query1.once("value").then( snapshot => {

      snapshot.forEach( childSnapshot => {

        var childData1 = childSnapshot.val();
        
        this.setlifts.push(childData1);
        this.lifts = this.setlifts

      });

    });
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    this.records._records = [
      { reps: 1, weight: 0, oneRM: 0, records: 0 },
      { reps: 2, weight: 0, oneRM: 0, records: 0 },
      { reps: 3, weight: 0, oneRM: 0, records: 0 },
      { reps: 4, weight: 0, oneRM: 0, records: 0 },
      { reps: 5, weight: 0, oneRM: 0, records: 0 },
      { reps: 6, weight: 0, oneRM: 0, records: 0 },
      { reps: 8, weight: 0, oneRM: 0, records: 0 },
      { reps: 10, weight: 0, oneRM: 0, records: 0 },
      { reps: 12, weight: 0, oneRM: 0, records: 0 },
      { reps: 15, weight: 0, oneRM: 0, records: 0 }
    ];
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.ionViewWillEnter();
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.username = this.user._user
    var name = item['name'];
    var query1 = firebase.database().ref('/' + this.username + '/exercises');
    //alert(name);
    query1.once("value").then( snapshot => {

      snapshot.forEach( childSnapshot => {

        var childData1 = childSnapshot.val();
        if (childData1['name'].localeCompare(name) == 0) {
          childSnapshot.getRef().remove().then(() => {
            console.log('Write succeeded!');
            this.ionViewWillEnter();
          });
        }
      });
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
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
    this.lifts = [];
    this.setlifts.forEach( (value, index) => {
      if (value.muscle == this.filter){
        this.lifts.push(value);
      }
    });
  }
}
