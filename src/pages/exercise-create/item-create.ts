import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { CustomRecordsPage } from '../custom-records/custom-records';

import firebase from 'firebase';

import { User } from '../../providers/providers';

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
  exercise: { name: string, about: string, records: any} = {name: "",about: "", records: [1,2,3,4,5,6,8,10,12,15]};
  username = "test";

  form: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public user: User,
    public viewCtrl: ViewController, 
    formBuilder: FormBuilder, 
    public camera: Camera) {

    this.form = formBuilder.group({
      name: ['', Validators.required],
      about: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push('CustomRecordsPage');
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
    this.username = this.user._user
    var yo = firebase.database().ref('/' + this.username + '/exercises');
    yo.push(this.exercise);
  }


}
