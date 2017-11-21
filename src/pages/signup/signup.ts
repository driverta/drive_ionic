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

  starterBench = {
    name: 'Bench Press', 
    about: 'Chest', 
    records: [
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
    ]};
    //history: [{ date: 0, reps: 0, weight: 0, oneRM: 0, gains: 0 }]};
  starterSquat = {
    name: 'Squat', 
    about: 'Legs', 
    records: [
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
    ]};
    //history: [{ date: 0, reps: 0, weight: 0, oneRM: 0, gains: 0 }]};
  starterDead = {
    name: 'Deadlift', 
    about: 'Back', 
    records: [
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
    ]};
    //history: [{ date: 0, reps: 0, weight: 0, oneRM: 0, gains: 0 }]};

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
    var lifter = firebase.database().ref('/users');
    lifter.push(this.account);

    var setX = firebase.database().ref('/' + this.account.name);
    setX.child('exercises').set('Bench Press');
    setX.child('exercises').set('Squat');
    setX.child('exercises').set('Deadlift');

    var b = firebase.database().ref('/' + this.account.name + '/exercises/Bench Press');
    b.set(this.starterBench);

    var s = firebase.database().ref('/' + this.account.name + '/exercises/Squat');
    s.set(this.starterSquat);

    var d = firebase.database().ref('/' + this.account.name + '/exercises/Deadlift');
    d.set(this.starterDead);

    /* Tried to set History without a zero value but it ovverrides other exercise data

    var setHistory = firebase.database().ref('/' + this.account.name + '/exercises');
    setHistory.child('Bench').set('history');
    setHistory.child('Squat').set('history');
    setHistory.child('Deadlift').set('history');
    */

    firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
      .then(value => {
        this.user._user = this.account.name;
        this.navCtrl.push(MainPage);
      });
  }


}
