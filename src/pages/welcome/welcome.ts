import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import { User, ProvidersUserProvider } from '../../providers/providers';
import { MainPage } from '../pages';
import firebase from 'firebase';

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

  private buttonPressed: Boolean = false;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private userService: ProvidersUserProvider,
  ) { }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  setUser() {
    this.userService.getUserByEmail(this.account.email).subscribe(data =>{
      this.userService.setUser(data);
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
        this.saveLogin()
        this.setUser();
        this.navCtrl.push(MainPage);
      }).catch( error => {
        this.firebaseErrors(error)
      });
    }
  }

  firebaseErrors(error){
    
    this.buttonPressed = false;
    let alert3 = this.alertCtrl.create({
      title: error,
      buttons: ['Ok']
    });
    alert3.present();
    
  };
 
  authLogin() : Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password);
  }

  saveLogin() {
      localStorage.setItem("stay","logged");
      localStorage.setItem("email",this.account.email);
    }
}
