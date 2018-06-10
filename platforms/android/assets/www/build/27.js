webpackJsonp([27],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, alertCtrl, translateService, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.userService = userService;
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
        this.userService.getUserByEmail(this.account.email).subscribe(function (data) {
            _this.userService.setUser(data);
            _this.doLogin();
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.authLogin()
            .then(function (value) {
            _this.checkLog();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
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
        return __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithEmailAndPassword(this.account.email, this.account.password);
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
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (submit)="setUser();">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" placeholder="{{ \'testUser@example.com\' | translate }}"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Keep me logged in</ion-label>\n        <ion-checkbox (ionChange)="stayLogged()"></ion-checkbox>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["h" /* User */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* ProvidersUserProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=27.js.map