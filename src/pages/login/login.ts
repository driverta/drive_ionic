import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, LoadingController } from 'ionic-angular';

import firebase from 'firebase';

import { ProvidersUserProvider } from '../../providers/providers';
import { MainPage } from '../pages';

import {AuthProvider} from "../../providers/auth/auth";

import { finalize } from 'rxjs/operators';

import { APIUser } from '../../models/APIUser';
import { tap } from 'rxjs/operators';


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
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public translateService: TranslateService,
    public userService: ProvidersUserProvider,
    private readonly authProvider: AuthProvider,
    private readonly loadingCtrl: LoadingController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  setUser() {
    this.userService.getUserByEmail(this.account.email).subscribe(data => {
      alert(data);
      this.userService.setUser(data);
      this.doLogin();
    }, err => {
      alert(err)
    });
  }

  doLogin() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authLogin()
      .then(value => {  
        let user = new APIUser;
        user.email = this.account.email
        user.password = this.account.password
        user.username = this.account.email.split('@')[0]
        this.signup(user);
      }).catch( error => {

        this.firebaseErrors(error)
      });
  }

  login(value: any) {
    this.authProvider
      .login(value)
      .subscribe(
        (jwt) => {
          this.checkLog();
          this.navCtrl.push(MainPage);
        },
        err => this.handleError(err));
  }

  signup(value: any) {

    this.authProvider
      .signup(value)
      .subscribe(
        (jwt) => {
          alert("here")
          this.login(value);
        },
        err => alert("here"));
  }

  firebaseErrors(error){
    let alert3 = this.alertCtrl.create({
      title: error,
      buttons: ['Ok']
    });
    alert3.present();
    
  };

  handleError(error: any) {
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
