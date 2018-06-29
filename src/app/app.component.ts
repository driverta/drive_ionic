import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

import { FirstRunPage } from '../pages/pages';
import { MainPage, TutorialPage } from '../pages/pages';

import { Settings, ProvidersUserProvider } from '../providers/providers';
import { User } from '../providers/providers';

import { DataService } from '../providers/api/firebase';
import firebase from 'firebase';

import { FcmProvider } from '../providers/fcm/fcm';

import { ToastController, AlertController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthProvider } from "../providers/auth/auth";
import { AppVersion } from '@ionic-native/app-version';

import {Storage} from "@ionic/storage";
import { local } from 'd3';


@Component({
  template: `
  <ion-nav #content [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  rootPage = FirstRunPage;
  tester = ""
  email = ""

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Map', component: 'MapPage' },
    { title: 'Exercises', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Profile', component: 'SettingsPage' },
    { title: 'Leaderboard', component: 'SearchPage' },
    { title: 'AddCompetitors', component: 'AddCompetitorsPage' }
  ]

  constructor(public translate: TranslateService,
    private platform: Platform,
    public user: User,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private userService: ProvidersUserProvider,
    public fcm: FcmProvider,
    public toastCtrl: ToastController,
    public authProvider: AuthProvider,
    public alertCtrl: AlertController,
    private app: AppVersion,
    private storage: Storage) {

    this.initTranslate();

    this.tester = localStorage.getItem("stay");
    //alert(this.tester)
    // if(this.tester == "logged"){
    //   console.log("LOGGED");
    //   this.setUser();
    //   this.rootPage = MainPage;
    // }

    platform.ready().then(() => {
      this.app.getVersionNumber().then((version) =>{
        console.log(JSON.stringify(version));
        this.authProvider.getVersion().subscribe(currentVersion => {
          console.log(currentVersion);
          if (version != currentVersion) {
            let alert = this.alertCtrl.create({
              title: 'Your version is out of date',
              message: 'Please download the latest version',
              buttons: [{
                text: "OK",
                handler: () => { alert.dismiss() }
              }]
            })
            alert.present();
          }
        }, 
        err => alert(JSON.stringify(err)))
      });
    });

    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        console.log("HOME")
        this.userService.getUserByEmail(localStorage.getItem("email")).subscribe(data =>{
          this.userService.setUser(data);
          this.nav.push(MainPage);
          // Get a FCM token
          fcm.getToken();

          // Listen to incoming messages
          fcm.listenToNotifications().pipe(
            tap(msg => {
              console.log("FIRST MESSAGE" + JSON.stringify(msg));
              if (msg['tap'] == true) {
                console.log("here");
                userService.getOneUser(msg['user'].split(' ')[0]).subscribe(user => {
                  this.nav.push(MainPage).then(() => {
                    this.nav.push('FriendProfilePage', {
                      item: user
                    });
                  })
                })
              }
              // show a toast
              const toast = toastCtrl.create({
                message: msg['body'],
                duration: 3000,
                position: 'top'
              });
              toast.present();
            })
          ).subscribe()
          this.rootPage = MainPage;
        })
      }
      else {
        console.log("OI:JEWUFCK NIGGER SHIT")
        this.rootPage = TutorialPage;
      }
    });

    this.authProvider.checkLogin();
  }

  setUser() {
    this.email = localStorage.getItem("email");

    this.userService.getUserByEmail(this.email).subscribe(data =>{
      this.userService.setUser(data);
    })

    // var query1 = firebase.database().ref("/users");

    // query1.once("value").then( snapshot => {
      
    //   snapshot.forEach( childSnapshot => {
        
    //     var childData1 = childSnapshot.val();
    //     if (childData1.email == this.email) {
    //       this.user._user = childData1.name;
    //       localStorage.setItem("username",childData1.name);
    //       //this.rootPage = MainPage;
    //     }
    //     //alert(this.user._user);      
    //   });
    // });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
