import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import firebase from 'firebase';

import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ListMasterPage {
  lifts = [{name: "Bench", about: "chest"}];

  username = "test";

  names = ["Lift 1"];
  about = ["nothing"];
  

  constructor(
    public navCtrl: NavController,
    public user: User,
    public items: Items,
    public modalCtrl: ModalController) {

    
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.lifts = [];
    this.username = this.user._user
    var query1 = firebase.database().ref('/' + this.username + '/exercises');
      
    query1.once("value").then( snapshot => {
        
      snapshot.forEach( childSnapshot => {

        var childData1 = childSnapshot.val();
        
        this.lifts.push(childData1);
        
      });
      
    });
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.ionViewDidLoad();
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
