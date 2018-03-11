import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { MainPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';

import { DataService } from '../providers/api/firebase';
import firebase from 'firebase';

@Component({
  template: `
  <ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
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

  constructor(private translate: TranslateService,
    private platform: Platform,
    public user: User,
    settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    data: DataService) {
    this.initTranslate();
    data.init();

    this.tester = localStorage.getItem("stay");
      //alert(this.tester)
      if(this.tester == "logged"){
        this.setUser();
        this.rootPage = MainPage;
      }
  }

  setUser() {
    this.email = localStorage.getItem("email");
    var query1 = firebase.database().ref("/users");

    query1.once("value").then( snapshot => {
      
      snapshot.forEach( childSnapshot => {
        
        var childData1 = childSnapshot.val();
        if (childData1.email == this.email) {
          this.user._user = childData1.name;
          localStorage.setItem("username",childData1.name);
          //this.rootPage = MainPage;
        }
        //alert(this.user._user);      
      });
    });
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
