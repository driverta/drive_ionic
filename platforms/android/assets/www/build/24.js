webpackJsonp([24],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendCompetingPageModule", function() { return FriendCompetingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_competing__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendCompetingPageModule = (function () {
    function FriendCompetingPageModule() {
    }
    return FriendCompetingPageModule;
}());
FriendCompetingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friend_competing__["a" /* FriendCompetingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friend_competing__["a" /* FriendCompetingPage */]),
        ],
    })
], FriendCompetingPageModule);

//# sourceMappingURL=friend-competing.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendCompetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendCompetingPage = (function () {
    function FriendCompetingPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.list = [];
        this.list = navParams.get('list');
        this.username = localStorage.getItem("username");
    }
    FriendCompetingPage.prototype.ionViewDidLoad = function () {
        console.log(this.list);
    };
    FriendCompetingPage.prototype.openItem = function (item) {
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    FriendCompetingPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        var check = true;
        this.list.forEach(function (value) {
            if (value.name == item.name) {
                _this.alreadyCompeting();
                check = false;
            }
        });
        if (check) {
            var competing = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + this.username + '/competing');
            competing.child(item.name).set(item);
            var competitors = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + item.name + '/competitors');
            competitors.child(this.username).set(this.username);
            this.playerAdded();
        }
    };
    FriendCompetingPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    FriendCompetingPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return FriendCompetingPage;
}());
FriendCompetingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friend-competing',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\friend-competing\friend-competing.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Competing</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n    <ion-item (click)="openItem(item)" no-lines *ngFor="let item of list">\n\n      \n\n      <ion-avatar item-start>\n\n                    <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n\n      </ion-avatar>\n\n      \n\n	    <h1 >{{item.name}}\n\n	    	<button ion-button icon-only (click)="addToLeaderboard(item)">\n\n	        <ion-icon name="add"></ion-icon>\n\n	      </button>\n\n	    </h1>\n\n	      \n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\friend-competing\friend-competing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], FriendCompetingPage);

//# sourceMappingURL=friend-competing.js.map

/***/ })

});
//# sourceMappingURL=24.js.map