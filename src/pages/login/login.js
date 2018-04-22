var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, alertCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.users = [];
        this.log = false;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '',
            password: ''
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.setUser = function () {
        var _this = this;
        var query1 = firebase.database().ref("/users");
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                if (childData1.email == _this.account.email) {
                    _this.user._user = childData1.name;
                    localStorage.setItem("username", childData1.name);
                    _this.doLogin();
                }
                //alert(this.user._user);      
            });
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.authLogin()
            .then(function (value) {
            _this.checkLog();
            _this.navCtrl.push(MainPage);
        }).catch(function (error) {
            _this.firebaseErrors(error);
        });
    };
    LoginPage.prototype.firebaseErrors = function (error) {
        var alert3 = this.alertCtrl.create({
            title: error,
            buttons: ['Ok']
        });
        alert3.present();
    };
    ;
    LoginPage.prototype.authLogin = function () {
        return firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password);
    };
    LoginPage.prototype.getThingy = function () {
        return this.username;
    };
    LoginPage.prototype.stayLogged = function () {
        if (this.log == false) {
            this.log = true;
        }
        else if (this.log == true) {
            this.log = false;
        }
    };
    LoginPage.prototype.checkLog = function () {
        if (this.log == true) {
            localStorage.setItem("stay", "logged");
            localStorage.setItem("email", this.account.email);
        }
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            User,
            ToastController,
            AlertController,
            TranslateService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map