import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { MainPage, TutorialPage } from '../pages/pages';

import { ProvidersUserProvider } from '../providers/providers';
import { User } from '../providers/providers';


import { FcmProvider } from '../providers/fcm/fcm';

import { ToastController, AlertController } from 'ionic-angular';
import { tap } from 'rxjs/operators';

import { AuthProvider } from "../providers/auth/auth";
import { AppVersion } from '@ionic-native/app-version';

import {Storage} from "@ionic/storage";
import { Keyboard } from '@ionic-native/keyboard'


@Component({
  template: `
  <ion-nav #content [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  rootPage = FirstRunPage;
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
    { title: 'AddCompetitors', component: 'AddCompetitorsPage' },
    { title: 'Home', component: 'HomePage'}
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
    private storage: Storage,
    private keyboard: Keyboard) {
    this.initTranslate();


    platform.ready().then(() => {
      this.keyboard.onKeyboardShow().subscribe(() => {
        document.body.classList.add('keyboard-is-open');
      });

      this.keyboard.onKeyboardHide().subscribe(() => {
          document.body.classList.remove('keyboard-is-open');
      });
      this.authProvider.checkLogin();

      authProvider.authUser.subscribe(jwtToken => {

        if (jwtToken) {
          this.storage.set("jwt_token", jwtToken).then(
            () => {},
          ).catch((error) => {
            console.log(error);
          });

          this.storage.get("email").then(
            (email) => {
              this.userService.getUserByEmail(email).subscribe(data =>{
                this.userService.setUser(data);
                this.nav.push(MainPage);
                // Get a FCM token
                fcm.getToken();
                this.rootPage = MainPage;
      
                // Listen to incoming messages
                fcm.listenToNotifications().pipe(
                  tap(msg => {
                    if (msg['tap'] == true) {
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
              })
            }
          ).catch(
            (error) => {}
          );
        }
        else {
          this.rootPage = TutorialPage;
        }
      });
    });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(true);
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#000000');
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
