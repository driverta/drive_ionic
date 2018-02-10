import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

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
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  setUser() {
    var query1 = firebase.database().ref("/users");

    query1.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        if (childData1.email == this.account.email) {
          this.user._user = childData1.name;
        }
        //alert(this.user._user);      
      });
    });
  }

  doLogin() {

    this.authLogin()
      .then(value => {
        this.checkLog()
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
    
  };
 

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
      localStorage.setItem("var_4","HI");
      localStorage.setItem("email",this.account.email);
    }
  }
}
