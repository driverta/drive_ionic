import { Component } from '@angular/core';
import { 
  IonicPage,
  ModalController,
  NavController,
  ActionSheetController,
  AlertController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { KeysPipe } from '../../pipes/keys/keys'

import firebase from 'firebase';

import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ListMasterPage {
  lifts = {};
  setlifts = {};
  username = "bob";

  names = ["Lift 1"];
  about = ["nothing"];

  filter= "All";
  show = true;
  loop = 0;
  gains = 0;
  status = ""
  totalGains = [];


  constructor(
    public navCtrl: NavController,
    public user: User,
    public items: Items,
    public records: Records,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public actShtCtrl: ActionSheetController,
    private storage: Storage) {

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    /*
    if(this.user._user){
      localStorage.setItem("username",this.user._user);
    }
    */
    this.lifts = {};
    this.setlifts = {};
    this.username = localStorage.getItem("username");
    
    this.status = localStorage.getItem("status");
    //alert(this.status);
    if (this.status == "good") {
      this.getExercises().then((val) => {
        this.setlifts = val;
        this.lifts = this.setlifts;
        var exercises = firebase.database().ref('/' + this.username + '/exercises');
        exercises.set(this.setlifts);
      })
    } else {
      
      var query1 = firebase.database().ref('/' + this.username + '/exercises');
      query1.once("value").then( snapshot => {
        this.loop = 0;
        snapshot.forEach( childSnapshot => {
          this.loop++
          var childData1 = childSnapshot.val();
          var key = childSnapshot.key;
          
          this.setlifts[key] = childData1;
          this.lifts = this.setlifts
          
          

          if ( snapshot.numChildren() == this.loop ) {
            //alert("HERE")
            this.show = false;
            this.saveData();
            
          }

        });

      });
      
    }
    /*
    
    */
    /*
    this.getExercises().then((val) => {
      this.setlifts = val;
      this.lifts = this.setlifts;
      var exercises = firebase.database().ref('/' + this.username + '/exercises');
      exercises.set(this.setlifts);
    })
    */
  }

  saveData() {
    localStorage.setItem("status","good");
    this.storage.set(this.username + '/exercises', this.setlifts)
    this.storage.set(this.username + '/gains', this.totalGains)
    var queryGains = firebase.database().ref('/' + this.username + '/gains');

    queryGains.once("value").then( snapshot => {
      if (!snapshot) {
        //alert("nope")
      }
      this.loop = 0;
      this.gains = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData2 = childSnapshot.val();
        this.totalGains.push(childData2);
        if ( snapshot.numChildren() == this.loop ) {
          //alert("My Dear")
          this.storage.set(this.username + '/gains', this.totalGains)
        }
      })
    })
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

  ionViewDidEnter() {
    this.status = localStorage.getItem("status");
    if (this.status = "good") {
    
      this.getExercises().then((val) => {
        var exercises = firebase.database().ref('/local/' + this.username + '/exercises');
        exercises.set(val);
      })
      this.getGains().then((val) => {
        var gains  = firebase.database().ref('/local/' + this.username + '/gains');
        gains.set(val);
      })
    }
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

  presentConfirm(item) {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you want to delete ' + item.name + ' from you exercises? You will keep the gains',
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
            this.deleteItem(item);
          }
        }
      ]
    });
    alert.present();
  }

  deleteItem(item) {
    var name = item['name'];
    var variation = item['variation'];
    
    Object.keys(this.setlifts).forEach ( (key) => {
      if(this.setlifts[key].name == name && this.setlifts[key].variation == variation){
        delete this.setlifts[key];
        this.storage.set(this.username  + '/exercises', this.setlifts).then(() => {
          this.ionViewDidLoad();
        });
      }
    })
    
    /*
    var query1 = firebase.database().ref('/' + this.username + '/exercises');
    //alert(name);
    query1.once("value").then( snapshot => {

      snapshot.forEach( childSnapshot => {

        var childData1 = childSnapshot.val();
        if (childData1['name'].localeCompare(name) == 0) {
          childSnapshot.getRef().remove().then(() => {
            console.log('Write succeeded!');
            this.ionViewDidLoad();
          });
        }
      });
    });
    */
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
    this.lifts = {};
    //alert(this.lifts["Bench Press-Barbell"].name)
    Object.keys(this.setlifts).forEach( (key, index) => {
      if (this.setlifts[key].muscle == this.filter){
        this.lifts[key] = this.setlifts[key]
      }
    });
  }
}
