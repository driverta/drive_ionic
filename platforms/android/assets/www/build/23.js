webpackJsonp([23],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendProfilePageModule", function() { return FriendProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_profile__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendProfilePageModule = (function () {
    function FriendProfilePageModule() {
    }
    return FriendProfilePageModule;
}());
FriendProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friend_profile__["a" /* FriendProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friend_profile__["a" /* FriendProfilePage */]),
        ],
    })
], FriendProfilePageModule);

//# sourceMappingURL=friend-profile.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendProfilePage; });
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




var FriendProfilePage = (function () {
    function FriendProfilePage(navCtrl, navParams, levels, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.levels = levels;
        this.alertCtrl = alertCtrl;
        this.players = [];
        this.rank = "Frail Body";
        this.weight = 0;
        this.height = 0;
        this.gym = "gym";
        this.location = "location";
        this.xlevel = 1;
        this.xcurrent = 25;
        this.xtotal = 100;
        this.progress = 25;
        this.gains = 0;
        this.records = 0;
        this.competing = 0;
        this.competitors = 0;
        this.competingList = [];
        this.competitorsList = [];
        this.realCompetitorsList = [];
        this.loop = 0;
        this.user = navParams.get('item');
        this.username = this.user.name;
        this.myUsername = localStorage.getItem("username");
    }
    FriendProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var queryGains = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/gains');
        queryGains.once("value").then(function (snapshot) {
            _this.loop = 0;
            _this.gains = 0;
            _this.records = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                var gains = childData1.gains;
                _this.gains = _this.gains + gains;
                if (gains == 10) {
                    _this.records++;
                }
                if (snapshot.numChildren() == _this.loop)
                    _this.setLevel();
            });
        });
        var queryCompeting = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competing');
        queryCompeting.once("value").then(function (snapshot) {
            _this.competing = 0;
            _this.competingList = [];
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.competingList.push(childData1);
                //console.log(this.competingList)
                _this.competing++;
                //console.log(this.competing)
            });
        });
        var queryCompetitors = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competitors');
        queryCompetitors.once("value").then(function (snapshot) {
            _this.competitors = 0;
            _this.competitorsList = [];
            snapshot.forEach(function (childSnapshot) {
                _this.competitors++;
                var childData1 = childSnapshot.val();
                _this.competitorsList.push(childData1);
            });
        });
        var queryWeight = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users/' + this.username + '/weight');
        queryWeight.once("value").then(function (snapshot) {
            var weight = snapshot.val();
            if (weight) {
                _this.weight = weight;
            }
        });
        var queryHeight = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users/' + this.username + '/height');
        queryHeight.once("value").then(function (snapshot) {
            var height = snapshot.val();
            if (height) {
                _this.height = height;
            }
        });
        var queryGym = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users/' + this.username + '/gym');
        queryGym.once("value").then(function (snapshot) {
            var gym = snapshot.val();
            if (gym) {
                _this.gym = gym;
            }
        });
        var queryLocation = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users/' + this.username + '/location');
        queryLocation.once("value").then(function (snapshot) {
            var location = snapshot.val();
            if (location) {
                _this.location = location;
            }
        });
        var query2 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/" + this.username + '/competing');
        query2.once("value").then(function (snapshot) {
            _this.players = [];
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.players.push(childData1);
                //alert(this.user._user);      
            });
        });
    };
    FriendProfilePage.prototype.setLevel = function () {
        var _this = this;
        this.levels._levels.forEach(function (value, index) {
            if (_this.gains > value.totalPoints) {
                _this.xcurrent = _this.gains - value.totalPoints;
                _this.xlevel = value.level;
                _this.xtotal = value.levelPoints;
                _this.progress = _this.xcurrent / _this.xtotal * 100;
            }
            if (_this.xlevel < 10) {
                _this.rank = "FRAIL BODY";
            }
            else if (_this.xlevel >= 10 && _this.xlevel < 20) {
                _this.rank = "GYM RAT";
            }
            else if (_this.xlevel >= 20 && _this.xlevel < 30) {
                _this.rank = "BODYBUILDER";
            }
            else if (_this.xlevel > 30) {
                _this.rank = "OLYMPIAN";
            }
        });
    };
    FriendProfilePage.prototype.getProfileImageStyle = function () {
        try {
            //this.noLoad();
            return 'url(' + this.user.profilePic + ')';
        }
        catch (err) {
        }
        finally {
        }
    };
    FriendProfilePage.prototype.goToCompeting = function () {
        console.log(this.competingList);
        this.navCtrl.push('FriendCompetingPage', {
            list: this.competingList
        });
    };
    FriendProfilePage.prototype.goToCompetitors = function () {
        var _this = this;
        this.realCompetitorsList = [];
        console.log(this.competitorsList);
        this.competitorsList.forEach(function (val) {
            _this.loop = 0;
            var queryPic = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users/' + val + '/profilePic');
            queryPic.once("value").then(function (snapshot) {
                var pic = snapshot.val();
                _this.realCompetitorsList.push({ name: val, profilePic: pic });
                _this.loop++;
                if (_this.loop == _this.competitorsList.length) {
                    _this.navCtrl.push('CompetitorsPage', {
                        list: _this.realCompetitorsList,
                        competing: _this.competingList,
                    });
                }
            });
        });
    };
    FriendProfilePage.prototype.goToRecords = function () {
        this.navCtrl.push('FriendRecordsPage', {
            username: this.username
        });
    };
    FriendProfilePage.prototype.goToGains = function () {
        this.navCtrl.push('FriendGainsPage', {
            username: this.username
        });
    };
    FriendProfilePage.prototype.addToLeaderboard = function () {
        var _this = this;
        var check = true;
        this.players.forEach(function (value) {
            if (value.name == _this.username) {
                _this.alreadyCompeting();
                check = false;
            }
        });
        if (check) {
            var competing = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competing');
            competing.child(this.username).set(this.user);
            var competitors = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competitors');
            competitors.child(this.username).set(this.username);
            this.playerAdded();
        }
    };
    FriendProfilePage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    FriendProfilePage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return FriendProfilePage;
}());
FriendProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friend-profile',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\friend-profile\friend-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{username}}</ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="addToLeaderboard();">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="levels">\n\n      <h3>{{rank}} <span class="sick">{{xlevel}}</span> : <span class="sick">{{xcurrent}}</span> / <span class="sick">{{xtotal}}</span> GAINS</h3>\n\n    </div>\n\n    <div id="myProgress">\n\n    <div id="myBar" [ngStyle]="{\'width.%\' : progress}"></div>\n\n  </div>\n\n  <br>\n\n    \n\n  <div class="profile-image-wrapper">\n\n  	<div class="profile-image" [style.backgroundImage]="getProfileImageStyle()"></div>\n\n  </div>\n\n    \n\n  <div class="stats">\n\n    <table>\n\n      <tr>\n\n        <td>{{height}}ft</td>\n\n        <td>{{gym}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>{{weight}}lbs</td>\n\n        <td>{{location}}</td>\n\n      </tr>\n\n      <tr>\n\n      <tr>\n\n        <th on-click="goToCompeting();">{{competing}}</th>\n\n        <th on-click="goToCompetitors();">{{competitors}}</th>\n\n      </tr>\n\n      <tr>\n\n        <td on-click="goToCompeting();">Competing</td>\n\n        <td on-click="goToCompetitors();">Competitors</td>\n\n      </tr>\n\n      <tr>\n\n        <th on-click="goToRecords();">{{records}}</th>\n\n        <th on-click="goToGains();">{{gains}}</th>\n\n      </tr>\n\n      <tr>\n\n        <td on-click="goToRecords();">Records</td>\n\n        <td on-click="goToGains();">Gains</td>\n\n      </tr>\n\n    </table>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\friend-profile\friend-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Levels */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], FriendProfilePage);

//# sourceMappingURL=friend-profile.js.map

/***/ })

});
//# sourceMappingURL=23.js.map