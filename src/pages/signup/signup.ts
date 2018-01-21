import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

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
    name: '',
    email: '',
    password: ''
  };

  starterBench = {
    name: 'Bench Press',
    variation: 'Barbell', 
    muscle: 'Chest', 
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
    variation: 'Barbell',
    muscle: 'Legs', 
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
    variation: 'Barbell',
    muscle: 'Back', 
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
    public translateService: TranslateService,
    public alertCtrl: AlertController) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignUp() {
    if(this.account.name.length > 13){
      this.tooLong()
      return;
    }
    var name = firebase.database().ref('/users/' + this.account.name + '/name');
    name.set(this.account.name);
    var email = firebase.database().ref('/users/' + this.account.name + '/email');
    email.set(this.account.email);

    var setX = firebase.database().ref('/' + this.account.name);
    setX.child('exercises').set('Bench Press');
    setX.child('exercises').set('Squat');
    setX.child('exercises').set('Deadlift');

    var b = firebase.database().ref('/' + this.account.name + '/exercises/Bench Press-Barbell');
    b.set(this.starterBench);

    var s = firebase.database().ref('/' + this.account.name + '/exercises/Squat-Barbell');
    s.set(this.starterSquat);

    var d = firebase.database().ref('/' + this.account.name + '/exercises/Deadlift-Barbell');
    d.set(this.starterDead);

    var competitors = firebase.database().ref('/' + this.account.name + '/competing');
    competitors.child(this.account.name).set(this.account);

    firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
      .then(value => {
        this.user._user = this.account.name;
        this.navCtrl.push(MainPage);
      }).catch( error => {
        this.firebaseErrors(error)
      });
  }

  firebaseErrors(error){
    let alert3 = this.alertCtrl.create({
      title: error,
      buttons: ['Ok']
    });
    alert3.present();
    
  }

  tooLong(){
    let alert = this.alertCtrl.create({
      title: "Username cannot be more than 12 characters",
      buttons: ['Ok']
    });
    alert.present();
    
  }


}
