webpackJsonp([19],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorsPageModule", function() { return CompetitorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competitors__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompetitorsPageModule = (function () {
    function CompetitorsPageModule() {
    }
    return CompetitorsPageModule;
}());
CompetitorsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__competitors__["a" /* CompetitorsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__competitors__["a" /* CompetitorsPage */]),
        ],
    })
], CompetitorsPageModule);

//# sourceMappingURL=competitors.module.js.map

/***/ }),

/***/ 835:
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

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_competing__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_user_providers_user__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitorsPage = (function () {
    function CompetitorsPage(navCtrl, navParams, alertCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.list = [];
        this.competing = [];
        this.list = navParams.get('list');
        this.username = this.userService.getUser().username;
        this.userId = this.userService.getUser().id;
    }
    CompetitorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CompetitorsPage');
        this.list.forEach(function (player) {
            _this.userService.getProfilePic(player.username).subscribe(function (pic) {
                if (pic['_body'] == "NahNigga") {
                    player.profilePic = null;
                }
                else {
                    player.profilePic = "data:image/jpeg;base64," + pic['_body'];
                }
            });
        });
    };
    CompetitorsPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        this.id = item.id;
        var competing = new __WEBPACK_IMPORTED_MODULE_2__models_competing__["a" /* CompetingModel */];
        competing.id = this.userId;
        competing.competingUser = this.id;
        this.userService.addCompetingUser(competing).subscribe(function (data) {
            console.log(data);
            if (data === "already_exists") {
                _this.alreadyCompeting();
            }
            else {
                _this.playerAdded();
            }
        });
    };
    CompetitorsPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    CompetitorsPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    CompetitorsPage.prototype.openItem = function (item) {
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    return CompetitorsPage;
}());
CompetitorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-competitors',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/competitors/competitors.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Competitors</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n    <ion-item (click)="openItem(item)" no-lines *ngFor="let item of list">\n      \n      <ion-avatar item-start>\n                    <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n      </ion-avatar>\n      \n	    <h1 >{{item.username}}\n	    	<button ion-button icon-only (click)="addToLeaderboard(item)">\n	        <ion-icon name="add"></ion-icon>\n	      </button>\n	    </h1>\n	      \n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/competitors/competitors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */]])
], CompetitorsPage);

//# sourceMappingURL=competitors.js.map

/***/ })

});
//# sourceMappingURL=19.js.map