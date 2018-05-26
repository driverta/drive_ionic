webpackJsonp([17],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* AddCompetitorsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* AddCompetitorsPage */]),
        ],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompetitorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCompetitorsPage = (function () {
    function AddCompetitorsPage(alertCtrl, navCtrl, navParams, user) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.currentItems = [];
        this.users = [];
        this.players = [];
        this.loop = 0;
        this.show = true;
    }
    AddCompetitorsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.show = true;
        this.users = [];
        this.players = [];
        this.username = localStorage.getItem("username");
        console.log(this.username);
        var query1 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/users");
        query1.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.loop++;
                _this.users.push(childData1);
                if (snapshot.numChildren() == _this.loop) {
                    _this.show = false;
                }
                //alert(this.user._user);      
            });
        });
        var query2 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/" + this.username + '/competing');
        query2.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.players.push(childData1);
                //alert(this.user._user);      
            });
        });
    };
    AddCompetitorsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.users.filter(function (v) {
            if (v.name && val) {
                if (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AddCompetitorsPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        var check = true;
        console.log(this.players);
        this.players.forEach(function (value) {
            if (value.name == item.name) {
                _this.alreadyCompeting();
                check = false;
            }
        });
        if (check) {
            var competing = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competing');
            competing.child(item.name).set(item);
            var competitors = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + item.name + '/competitors');
            competitors.child(this.username).set(this.username);
            this.playerAdded();
        }
    };
    AddCompetitorsPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddCompetitorsPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return AddCompetitorsPage;
}());
AddCompetitorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-searchbar (ionInput)="getItems($event)" placeholder="search usernames to compete with friends"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item no-lines *ngFor="let item of currentItems">\n\n      \n\n      <ion-avatar item-start>\n\n            <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n\n      </ion-avatar>\n\n      \n\n	    <h2>{{item.name}}\n\n	    	<button ion-button icon-only (click)="addToLeaderboard(item)">\n\n	        <ion-icon name="add"></ion-icon>\n\n	      </button>\n\n	    </h2>\n\n	      \n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n  <h3 *ngIf="show" id="loading">Loading</h3>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* User */]])
], AddCompetitorsPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=17.js.map