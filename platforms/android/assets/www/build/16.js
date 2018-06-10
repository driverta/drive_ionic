webpackJsonp([16],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetingPageModule", function() { return CompetingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competing__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompetingPageModule = (function () {
    function CompetingPageModule() {
    }
    return CompetingPageModule;
}());
CompetingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__competing__["a" /* CompetingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__competing__["a" /* CompetingPage */]),
        ],
    })
], CompetingPageModule);

//# sourceMappingURL=competing.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetingModel; });
var CompetingModel = (function () {
    function CompetingModel() {
    }
    return CompetingModel;
}());

//# sourceMappingURL=competing.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_user_providers_user__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_competing__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetingPage = (function () {
    function CompetingPage(navCtrl, navParams, alertCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.list = [];
        //this.list = navParams.get('list');
        this.user = this.userService.getUser();
        this.username = this.user.name;
    }
    CompetingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getCompetingUsers(this.user.id).subscribe(function (data) {
            _this.list = data;
            _this.list.forEach(function (player) {
                _this.userService.getProfilePic(player.username).subscribe(function (pic) {
                    player.profilePic = "data:image/jpeg;base64," + pic['_body'];
                    if (pic['_body'] == "NahNigga") {
                        player.profilePic = null;
                    }
                    else {
                        player.profilePic = "data:image/jpeg;base64," + pic['_body'];
                    }
                });
            });
        });
    };
    CompetingPage.prototype.openItem = function (item) {
        console.log(item);
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    CompetingPage.prototype.presentConfirm = function (x) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete?',
            message: 'Do you want to remove ' + x.username + ' from your leaderboard?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.removeCompetingUser(x);
                    }
                }
            ]
        });
        alert.present();
    };
    CompetingPage.prototype.removeCompetingUser = function (competingUser) {
        var _this = this;
        var competing = new __WEBPACK_IMPORTED_MODULE_3__models_competing__["a" /* CompetingModel */];
        competing.id = this.user.id;
        competing.competingUser = competingUser.id;
        this.userService.removeCompetingUser(competing).subscribe(function (data) {
            console.log(data);
            _this.ionViewDidLoad();
        });
    };
    return CompetingPage;
}());
CompetingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-competing',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/competing/competing.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Competing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n      <ion-item-sliding no-lines *ngFor="let item of list" >\n        <ion-item (click)="openItem(item)" no-lines [ngClass]="{red: item.name == username}">\n\n        \n          <ion-avatar item-start>\n                        <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n          </ion-avatar>\n         \n          <h1>{{item.username}}</h1>\n          \n        </ion-item>\n      	\n        <ion-item-options>\n          <button ion-button color="danger" (click)="presentConfirm(item)">\n            {{ \'Remove\' }}\n          </button>\n        </ion-item-options>\n        \n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/competing/competing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */]])
], CompetingPage);

//# sourceMappingURL=competing.js.map

/***/ })

});
//# sourceMappingURL=16.js.map