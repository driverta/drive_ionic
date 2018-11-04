import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { CustomRecordsPage } from '../custom-records/custom-records';
import { Storage } from '@ionic/storage';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';


import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  isReadyToSave: boolean;

  item: any;
  loop = 0;
  show = false;
  lifts = {};
  setlifts = {};
  gains = {};
  myrecords: any;
  users = [];
  username = "test";
  info: { username: any, weight: number, height: number, gym: string, location: string} = { username: this.username, weight: null, height: null, gym: "", location: ""};
  bool = true;
  edit = false;
  data: any;
  competitorsList = [];
  competingList = [];
  userData: any;

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController, 
    formBuilder: FormBuilder,
    navParams: NavParams,
    public alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider) {

    this.userData = this.userService.getUser();

    this.form = formBuilder.group({
      username: [''],
      weight: [''],
      height: [''],
      gym: [''],
      location: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewWillEnter() {
    // this.viewCtrl.showBackButton(false);
    this.info.weight = this.userData.weight;
    this.info.height = this.userData.height;
    this.info.gym = this.userData.gym;
    this.info.location = this.userData.location;
  }

  ionViewDidLoad() {
  }

  changeData(){
    this.userData.weight = this.info.weight;
    this.userData.height = this.info.height;
    this.userData.gym = this.info.gym;
    this.userData.location = this.info.location;
    this.userService.createUser(this.userData).subscribe(response => console.log(response));
  	this.done();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
