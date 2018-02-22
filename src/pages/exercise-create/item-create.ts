import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { CustomRecordsPage } from '../custom-records/custom-records';
import { Storage } from '@ionic/storage';

import firebase from 'firebase';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  customPage = CustomRecordsPage;

  isReadyToSave: boolean;

  item: any;
  lifts = {};
  setlifts = {};
  myrecords: any
  exercise: { name: string, variation: string, muscle: string} = {name: "", variation: "", muscle: "Chest"};
  username = "test";
  bool = true;

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public viewCtrl: ViewController, 
    formBuilder: FormBuilder, 
    public camera: Camera,
    navParams: NavParams,
    private records: Records,
    public alertCtrl: AlertController,
    private storage: Storage) {


    this.form = formBuilder.group({
      name: ['', Validators.required],
      variation: [''],
      muscle: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    //this.myrecords = navParams.get('records') || records._records;
  }

  ionViewDidLoad() {
    this.lifts = {};
    this.setlifts = {};
    this.username = this.user._user
    this.storage.get(this.username + '/exercises').then((val) => {
      this.setlifts = val;
      this.lifts = this.setlifts;
    });
    /*
    var query1 = firebase.database().ref('/' + this.username + '/exercises');

    query1.once("value").then( snapshot => {

      snapshot.forEach( childSnapshot => {

        var childData1 = childSnapshot.val();
        
        this.setlifts.push(childData1);
        this.lifts = this.setlifts

      });

    });
    */
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  saveExercise() {
    this.bool = true;
    Object.keys(this.lifts).forEach ( (key) => {
      if(this.lifts[key].name == this.exercise.name && this.lifts[key].variation == this.exercise.variation){
        this.presentAlert();
        this.bool = false;
      }
    })

    if(this.bool){
      /*
      var setX = firebase.database().ref('/' + this.username + '/exercises');
      setX.child(this.exercise.name + '-' + this.exercise.variation).set(this.exercise);
      */
      var key = this.exercise.name + '-' + this.exercise.variation
      this.lifts[key] = this.exercise
      console.log(this.lifts);
      this.storage.set(this.username + '/exercises', this.lifts).then(() =>{
        this.done();
      });
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
}
