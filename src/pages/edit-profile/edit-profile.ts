import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { CustomRecordsPage } from '../custom-records/custom-records';
import { Storage } from '@ionic/storage';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  isReadyToSave: boolean;

  item: any;
  lifts = {};
  setlifts = {};
  myrecords: any
  info: { weight: number, height: number, gym: string, location: string} = { weight: null, height: null, gym: "", location: ""};
  username = "test";
  bool = true;
  edit = false;
  data: any;

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController, 
    formBuilder: FormBuilder,
    navParams: NavParams,
    public alertCtrl: AlertController,
    private storage: Storage) {

    this.form = formBuilder.group({
      weight: [''],
      height: [''],
      gym: [''],
      location: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    //this.myrecords = navParams.get('records') || records._records;
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
    this.username = localStorage.getItem("username");
    console.log(this.username);
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

  changeData(){

  	var weight = firebase.database().ref('/users/' + this.username + '/weight');
  	weight.set(this.info.weight);

  	var height = firebase.database().ref('/users/' + this.username + '/height');
  	height.set(this.info.height);

  	var gym = firebase.database().ref('/users/' + this.username + '/gym');
  	gym.set(this.info.gym);

  	var location = firebase.database().ref('/users/' + this.username + '/location');
  	location.set(this.info.location);

  	this.done();
  }
}