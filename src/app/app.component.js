var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, user, settings, config, statusBar, splashScreen, data) {
        this.translate = translate;
        this.platform = platform;
        this.user = user;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = FirstRunPage;
        this.tester = "";
        this.email = "";
        this.pages = [
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
        ];
        this.initTranslate();
        data.init();
        this.tester = localStorage.getItem("stay");
        //alert(this.tester)
        if (this.tester == "logged") {
            this.setUser();
            this.rootPage = MainPage;
        }
    }
    MyApp.prototype.setUser = function () {
        var _this = this;
        this.email = localStorage.getItem("email");
        var query1 = firebase.database().ref("/users");
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                if (childData1.email == _this.email) {
                    _this.user._user = childData1.name;
                    localStorage.setItem("username", childData1.name);
                    //this.rootPage = MainPage;
                }
                //alert(this.user._user);      
            });
        });
    };
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            template: "\n  <ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>\n  "
        }),
        __metadata("design:paramtypes", [TranslateService,
            Platform,
            User,
            Settings,
            Config,
            StatusBar,
            SplashScreen,
            DataService])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map