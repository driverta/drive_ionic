import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import firebase from 'firebase';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  starterBench = {name: 'Bench Press', about: 'Chest'}
  starterSquat = {name: 'Squat', about: 'Legs'}
  starterDead = {name: 'Deadlift', about: 'Back'}

  bro: string = "bro";

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })

  }

  doSignUp() {
    var yo = firebase.database().ref('/' + this.account.name + '/info');
    yo.push(this.account);

    var doe = firebase.database().ref('/' + this.account.name + '/exercises');
    doe.push(this.starterBench);
    doe.push(this.starterSquat);
    doe.push(this.starterDead);

    firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
      .then(value => {
        this.user._user = this.account.name;
        this.navCtrl.push(MainPage);
      });
  }


}
