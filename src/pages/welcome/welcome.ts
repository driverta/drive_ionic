import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController, Alert, LoadingController, Keyboard } from 'ionic-angular';
import { ProvidersUserProvider, AuthProvider } from '../../providers/providers';
import { MainPage } from '../pages';
import firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase';

import { Error } from '@firebase/auth-types';
import { APIUser } from '../../models/APIUser'
// import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {Storage} from "@ionic/storage";
import { FcmProvider } from '../../providers/fcm/fcm';

import { tap } from 'rxjs/operators';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
@Injectable()

export class WelcomePage {

   account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  user: string;

  log: boolean;

  private buttonPressed: Boolean = false;
  private showFooter: boolean = true;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private authProvider: AuthProvider,
    private toastCtrl: ToastController,
    public httpClient: HttpClient,
    public keyboard: Keyboard,
    public firebaseNative: Firebase,
  ) { 
    keyboard.didShow.subscribe(() => {
      console.log("here");
      this.showFooter = false;
   });
   
   keyboard.didHide.subscribe(() => {
      this.showFooter = true;
   });
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  login() {

    this.buttonPressed = true;

    if(this.account.email == ''){
      let emptyEmail = this.alertCtrl.create({
        title: "Error",
        message: "Please enter your email!",
        buttons: ['Ok']
      });

      emptyEmail.present();
      this.buttonPressed = false;
    }
    else if(this.account.password == ''){
      let emptyPassword = this.alertCtrl.create({
        title: "Error",
        message: "Please enter your password!",
        buttons: ['Ok']
      });
      emptyPassword.present();
      this.buttonPressed = false;
    }
    else{
      this.authLogin()
        .then(value => {
          localStorage.setItem("email",this.account.email);
          firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
            localStorage.setItem("jwt_token", idToken);
            localStorage.setItem("stay","logged");
            this.authProvider.authUser.next(idToken);
          }).catch(function(error) {
            // Handle error
            console.log(error);
          });
        }).catch( error => {
          this.presentFirebaseError(error)
        });
    }
  }

  keyboardCheck() {
    console.log("KEYBOARD OPEN");
    if (this.keyboard.isOpen()) {
        // You logic goes here
        this.showFooter = false;
    }
  }

  handleError(error: any) {
    alert(error)
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

  stayLogged() {
    if (this.log == false){
      this.log = true;
    } else if (this.log == true){
      this.log = false;
    }
  }

  presentFirebaseError(error: Error){
    console.log(error.code);
    console.log(error.message);
    this.buttonPressed = false;
    let firebaseError: Alert = this.alertCtrl.create({
     title: "Error",
     message: "Something went wrong!",
     buttons: ['Ok']
   });
   if(error.code === "auth/email-already-in-use"){
     firebaseError.setMessage("There is an existing account associated with this email")
   }
   else if(error.code === "auth/invalid-email"){
     firebaseError.setMessage("Please enter a valid email")
   }
   else if(error.code === "auth/weak-password"){
     firebaseError.setMessage("Password must be at least 6 characters")
   }
   else if(error.code === "auth/wrong-password"){
    firebaseError.setMessage("Invalid password")
   }
    firebaseError.present();
  }
 
  authLogin() : Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password);
  }

  saveLogin() {
    localStorage.setItem("stay","logged");
    localStorage.setItem("email",this.account.email);
  }
}
