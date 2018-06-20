import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController, Alert } from 'ionic-angular';
import { ProvidersUserProvider } from '../../providers/providers';
import { MainPage } from '../pages';
import firebase from 'firebase';
import { Error } from '@firebase/auth-types';

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
export class WelcomePage {

   account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  log: boolean;

  private buttonPressed: Boolean = false;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private userService: ProvidersUserProvider,
  ) { }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  setUser() {
    console.log(this.account.email);
    this.userService.getUserByEmail(this.account.email).subscribe(data =>{
      this.userService.setUser(data);
      this.navCtrl.push(MainPage);
    });
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
        console.log(value);
        this.saveLogin()
        this.setUser();

      }).catch( error => {
        this.presentFirebaseError(error)
      });
    }
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
