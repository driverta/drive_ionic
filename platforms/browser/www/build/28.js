webpackJsonp([28],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendProfilePageModule", function() { return FriendProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_profile__ = __webpack_require__(783);
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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers_user_providers_user__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function FriendProfilePage(navCtrl, navParams, levels, alertCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.levels = levels;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.players = [];
        this.rank = "Frail Body";
        this.weight = 0;
        this.height = "0";
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
        this.exercisesLength = 0;
        this.user = navParams.get('item');
        this.username = this.user.name;
        this.myUsername = this.userService.getUser().username;
    }
    FriendProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.weight = this.user.weight;
        this.height = this.user.height;
        this.gym = this.user.gym;
        this.location = this.user.location;
        //this.gym = data.gym;
        this.userService.getTotalGains(this.user.id).subscribe(function (totalGains) {
            console.log(totalGains);
            _this.gains = totalGains;
            _this.setLevel();
        });
        ;
        // var queryGains = firebase.database().ref('/' + this.username + '/gains');
        // queryGains.once("value").then( snapshot => {
        //   this.loop = 0;
        //   this.gains = 0;
        //   this.records = 0;
        //   snapshot.forEach( childSnapshot => {
        //     this.loop++
        //     var childData1 = childSnapshot.val();
        //     var gains = childData1.gains;
        //     this.gains = this.gains + gains
        //     if (gains == 10){
        //       this.records++;
        //     }
        //     if ( snapshot.numChildren() == this.loop )
        //       this.setLevel()
        //   })
        // })
        this.userService.getCompetingUsers(this.user.id).subscribe(function (data) {
            _this.competingList = data;
            console.log(_this.competingList);
            _this.competing = _this.competingList.length;
        });
        // var queryCompeting = firebase.database().ref('/' + this.username + '/competing');
        // queryCompeting.once("value").then( snapshot => {
        //   this.competing = 0;
        //   this.competingList = [];
        //   snapshot.forEach( childSnapshot => {
        //     var childData1 = childSnapshot.val();
        //     this.competingList.push(childData1)
        //     //console.log(this.competingList)
        //     this.competing++
        //     //console.log(this.competing)
        //   })
        // })
        this.userService.getCompetitors(this.user.id).subscribe(function (data) {
            _this.competitorsList = data;
            console.log(_this.competitorsList);
            _this.competitors = _this.competitorsList.length;
        });
        // var queryCompetitors = firebase.database().ref('/' + this.username + '/competitors');
        // queryCompetitors.once("value").then( snapshot => {
        //   this.competitors = 0;
        //   this.competitorsList = [];
        //   snapshot.forEach( childSnapshot => {
        //     this.competitors++
        //     var childData1 = childSnapshot.val();
        //     this.competitorsList.push(childData1);
        //   })
        // })
        // var queryWeight = firebase.database().ref('/users/' + this.username + '/weight');
        // queryWeight.once("value").then( snapshot => {
        //   var weight = snapshot.val();
        //   if (weight){
        //     this.weight = weight
        //   }
        // })
        // var queryHeight = firebase.database().ref('/users/' + this.username + '/height');
        // queryHeight.once("value").then( snapshot => {
        //   var height = snapshot.val();
        //   if (height){
        //     this.height = height
        //   }
        // })
        // var queryGym = firebase.database().ref('/users/' + this.username + '/gym');
        // queryGym.once("value").then( snapshot => {
        //   var gym = snapshot.val();
        //   if (gym){
        //     this.gym = gym
        //   }
        // })
        // var queryLocation = firebase.database().ref('/users/' + this.username + '/location');
        // queryLocation.once("value").then( snapshot => {
        //   var location = snapshot.val();
        //   if (location){
        //     this.location = location
        //   }
        // })
        this.userService.getCompetingUsersExercises(this.user.id).subscribe(function (exercises) {
            _this.exercisesLength = exercises.length;
        });
        // var query2 = firebase.database().ref("/" + this.username + '/competing');
        // query2.once("value").then( snapshot => {
        //   this.players = [];
        //   snapshot.forEach( childSnapshot => {
        //     var childData1 = childSnapshot.val();
        //     this.players.push(childData1)
        //     //alert(this.user._user);      
        //   });
        // });
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
        this.navCtrl.push('CompetitorsPage', {
            list: this.competitorsList
        });
        // this.realCompetitorsList = [];
        // console.log(this.competitorsList)
        // this.competitorsList.forEach((val) => {
        //   this.loop = 0;
        //   var queryPic = firebase.database().ref('/users/' + val + '/profilePic');
        //   queryPic.once("value").then( snapshot => {
        //     var pic = snapshot.val();
        //     this.realCompetitorsList.push({name: val, profilePic: pic})
        //     this.loop++
        //     if (this.loop == this.competitorsList.length){
        //       this.navCtrl.push('CompetitorsPage', {
        //         list: this.realCompetitorsList,
        //         competing: this.competingList,
        //       });
        //     }
        //   })
        // })
    };
    FriendProfilePage.prototype.goToRecords = function () {
        this.navCtrl.push('FriendRecordsPage', {
            user: this.user
        });
    };
    FriendProfilePage.prototype.goToGains = function () {
        this.navCtrl.push('FriendGainsPage', {
            user: this.user
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
            var competing = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/' + this.username + '/competing');
            competing.child(this.username).set(this.user);
            var competitors = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/' + this.username + '/competitors');
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
        selector: 'page-friend-profile',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/friend-profile/friend-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{user.username}}</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addToLeaderboard();">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="levels">\n      <h3>{{rank}} <span class="sick">{{xlevel}}</span> : <span class="sick">{{xcurrent}}</span> / <span class="sick">{{xtotal}}</span> GAINS</h3>\n    </div>\n    <div id="myProgress">\n    <div id="myBar" [ngStyle]="{\'width.%\' : progress}"></div>\n  </div>\n  <br>\n    \n  <div class="profile-image-wrapper">\n  	<div *ngIf="this.user.profilePic != null" class="profile-image" [style.backgroundImage]="getProfileImageStyle()"></div>\n    <ion-icon *ngIf="this.user.profilePic == null" class="profile-image icon-size" name="contact"></ion-icon> \n  </div>\n    \n  <div class="stats">\n    <table>\n      <tr>\n        <td>{{height}}ft</td>\n        <td>{{gym}}</td>\n      </tr>\n      <tr>\n        <td>{{weight}}lbs</td>\n        <td>{{location}}</td>\n      </tr>\n      <tr>\n      <tr>\n        <th on-click="goToCompeting();">{{competing}}</th>\n        <th on-click="goToCompetitors();">{{competitors}}</th>\n      </tr>\n      <tr>\n        <td on-click="goToCompeting();">Competing</td>\n        <td on-click="goToCompetitors();">Competitors</td>\n      </tr>\n      <tr>\n        <th on-click="goToRecords();">{{exercisesLength}}</th>\n        <th on-click="goToGains();">{{gains}}</th>\n      </tr>\n      <tr>\n        <td on-click="goToRecords();">Exercises</td>\n        <td on-click="goToGains();">Gains</td>\n      </tr>\n    </table>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/friend-profile/friend-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Levels */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */]])
], FriendProfilePage);

//# sourceMappingURL=friend-profile.js.map

/***/ })

});
//# sourceMappingURL=28.js.map