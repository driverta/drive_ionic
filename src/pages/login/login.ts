import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, Alert } from 'ionic-angular';
import { Error } from '@firebase/auth-types';
import firebase from 'firebase';

import { User, ProvidersUserProvider } from '../../providers/providers';
import { MainPage } from '../pages';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  users = [];
  log: boolean = false;

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public translateService: TranslateService,
    public userService: ProvidersUserProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  setUser() {
    this.userService.getUserByEmail(this.account.email).subscribe(data =>{
      this.userService.setUser(data);
      this.doLogin();
    });
  }

  doLogin() {

    this.authLogin()
      .then(value => {
        this.checkLog()
        this.navCtrl.push(MainPage);
      }).catch( error => {
        this.presentFirebaseError(error)
      });
  }

  presentFirebaseError(error: Error){
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
   firebaseError.present();
 }
 

  authLogin() : Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password);
  }

  getThingy() {
    return this.username;
  }

  stayLogged() {
    if (this.log == false){
      
      this.log = true;
      
    } else if (this.log == true){
      
      this.log = false;
    }
    
  }

  checkLog() {
    if (this.log == true){
      localStorage.setItem("stay","logged");
      localStorage.setItem("email",this.account.email);
    }
  }
}
