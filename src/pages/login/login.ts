import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import firebase from 'firebase';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  users = [];

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  setUser() {
    var query1 = firebase.database().ref("/user");

    query1.once("value").then( snapshot => {
      //$timeout(function() {
        snapshot.forEach( childSnapshot => {

          var childData1 = childSnapshot.val();
          if (childData1.email == this.account.email) {
            this.user._user = childData1.name;
          }
                
        });
    });
  }

  doLogin() {

    this.authLogin()
      .then(value => {
        this.navCtrl.push(MainPage);
      });
  }

  authLogin() : Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password);
  }

  getThingy() {
    return this.username;
  }
}
