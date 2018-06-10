webpackJsonp([9],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DiscoverPageModule = (function () {
    function DiscoverPageModule() {
    }
    return DiscoverPageModule;
}());
DiscoverPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__discover__["a" /* DiscoverPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discover__["a" /* DiscoverPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
        ],
    })
], DiscoverPageModule);

//# sourceMappingURL=discover.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys_keys__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__ = __webpack_require__(588);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__["a" /* SortByGainsPipe */],
            __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__["a" /* SortByRepsPipe */],
            __WEBPACK_IMPORTED_MODULE_3__keys_keys__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__["a" /* SortByMinutesPipe */],
            __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__["a" /* CardioTimeConvertPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__["a" /* SortByGainsPipe */],
            __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__["a" /* SortByRepsPipe */],
            __WEBPACK_IMPORTED_MODULE_3__keys_keys__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__["a" /* SortByMinutesPipe */],
            __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__["a" /* CardioTimeConvertPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByGainsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortByGainsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortByGainsPipe = (function () {
    function SortByGainsPipe() {
    }
    SortByGainsPipe.prototype.transform = function (array, args) {
        //alert("What");
        array.sort(function (a, b) {
            if (a.gains < b.gains) {
                return -1;
            }
            else if (a.gains > b.gains) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array.reverse();
    };
    return SortByGainsPipe;
}());
SortByGainsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortByGains',
        pure: false
    })
], SortByGainsPipe);

//# sourceMappingURL=sort-by-gains.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByRepsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortByRepsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortByRepsPipe = (function () {
    function SortByRepsPipe() {
    }
    SortByRepsPipe.prototype.transform = function (array, args) {
        //alert("What");
        array.sort(function (a, b) {
            if (a.reps < b.reps) {
                return -1;
            }
            else if (a.reps > b.reps) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return SortByRepsPipe;
}());
SortByRepsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortByReps',
        pure: false
    })
], SortByRepsPipe);

//# sourceMappingURL=sort-by-reps.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        // create instance vars to store keys and final output
        var keyArr = Object.keys(value), dataArr = [];
        // loop through the object,
        // pushing values to the return array
        keyArr.forEach(function (key) {
            dataArr.push(value[key]);
        });
        // return the resulting array
        return dataArr;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'keys',
        pure: false
    })
], KeysPipe);

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByMinutesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortByMinutesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortByMinutesPipe = (function () {
    function SortByMinutesPipe() {
    }
    SortByMinutesPipe.prototype.transform = function (array, args) {
        //alert("What");
        array.sort(function (a, b) {
            if (a.max < b.max) {
                return -1;
            }
            else if (a.max > b.max) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return SortByMinutesPipe;
}());
SortByMinutesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortByMinutes',
        pure: false
    })
], SortByMinutesPipe);

//# sourceMappingURL=sort-by-minutes.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardioTimeConvertPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CardioTimeConvertPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CardioTimeConvertPipe = (function () {
    function CardioTimeConvertPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CardioTimeConvertPipe.prototype.transform = function (value) {
        // console.log(value)
        // let  temp = value * 60;
        // const hours = Math.floor((temp/3600));
        // const minutes: number = Math.floor((temp/ 60)/60);
        // console.log(minutes)
        // const seconds=Math.floor(temp % 3600 % 60);
        var hours = Math.floor(value / 60);
        var minutesLeftOver = value - (hours * 60);
        var minutes = Math.floor(minutesLeftOver);
        var secondsLeftOver = (minutesLeftOver - minutes) * 60;
        var seconds = Math.floor(secondsLeftOver);
        return hours + ':' + minutes + ':' + seconds;
    };
    return CardioTimeConvertPipe;
}());
CardioTimeConvertPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'cardioTimeConvert',
    })
], CardioTimeConvertPipe);

//# sourceMappingURL=cardio-time-convert.js.map

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

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers_user_providers_user__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_competing__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiscoverPage = (function () {
    function DiscoverPage(alertCtrl, navCtrl, navParams, user, userService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.userService = userService;
        this.currentItems = [];
        this.loop = 0;
        this.likelyFriends = [];
        this.competingFriends = [];
        this.competingFriendsOfFriends = [];
        this.show = true;
        this.segment = "discover_people";
    }
    DiscoverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.show = true;
        this.users = [];
        this.likelyFriends = [];
        this.competingFriends = [];
        this.competingFriendsOfFriends = [];
        this.username = this.userService.getUser().username;
        this.userId = this.userService.getUser().id;
        var query1 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/users");
        var query2 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competing');
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data;
            _this.show = false;
            _this.users.forEach(function (player) {
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
        // query2.once("value").then( snapshot => {
        //   snapshot.forEach( childSnapshot => {
        //     var competingFriend = childSnapshot.val();
        //     this.competingFriends.push(competingFriend.name);
        //     this.getFriendsOfFriends(competingFriend.name);
        //   });
        // });
    };
    // getFriendsOfFriends(friend) {
    //   var query = firebase.database().ref('/' + friend + '/competing');
    //   query.once("value").then( snapshot => {
    //     var loop = 0;
    //     snapshot.forEach( childSnapshot => {
    //       var competingFriendOfFriend = childSnapshot.val().name;
    //       if (!this.competingFriendsOfFriends.includes(competingFriendOfFriend) && !this.competingFriends.includes(competingFriendOfFriend)) {
    //         this.competingFriendsOfFriends.push(competingFriendOfFriend);
    //         var likelyFriend = {
    //           name: competingFriendOfFriend,
    //           profilePic: '',
    //           gains: 0,
    //         };
    //         var queryGains = firebase.database().ref('/' + competingFriendOfFriend + '/gains');
    //         var loop = 0;
    //         queryGains.once("value").then( snapshot => {
    //           loop++;
    //           var totalGains = 0;
    //           snapshot.forEach( childSnapshot => {
    //             var childData1 = childSnapshot.val();
    //             totalGains = totalGains + childData1.gains;
    //           });
    //           likelyFriend.gains = totalGains;
    //           var queryGains = firebase.database().ref('/users/' + competingFriendOfFriend + '/profilePic');
    //           queryGains.once("value").then( profilePic => {
    //             likelyFriend.profilePic = profilePic.val();
    //             console.log(likelyFriend);
    //             this.likelyFriends.push(likelyFriend);
    //             if (loop == snapshot.numChildren()) {
    //               this.show = false;
    //             }
    //           });
    //         });      
    //       }  
    //     });
    //   });
    // }
    DiscoverPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.users.filter(function (v) {
            if (v.username && val) {
                if (v.username.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(this.currentItems);
    };
    DiscoverPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        this.id = item.id;
        var competing = new __WEBPACK_IMPORTED_MODULE_5__models_competing__["a" /* CompetingModel */];
        competing.id = this.userId;
        competing.competingUser = this.id;
        console.log(competing);
        this.userService.addCompetingUser(competing).subscribe(function (data) {
            console.log(data);
            if (data === "already_exists") {
                _this.alreadyCompeting();
            }
            else {
                _this.playerAdded();
            }
        });
        // var check = true;
        ////////// needs work ////////
        // this.competingFriends.forEach( value => {
        //   if (value.name == item.name) {
        //     this.alreadyCompeting();
        //     check = false;
        //   } 
        // })
        ///////////////////
        // let user = this.username;
        // if(check){
        //   // var competing = firebase.database().ref('/' + this.username + '/competing');
        //   // competing.child(item.name).set(item);
        //   // var competitors = firebase.database().ref('/' + item.name + '/competitors');
        //   // competitors.child(this.username).set(this.username);
        //   // this.playerAdded();
        // }
    };
    // getGains(username): Promise<any> {
    //   var queryGains = firebase.database().ref('/' + username + '/gains');
    //   queryGains.once("value").then( snapshot => {
    //     var totalGains = 0;
    //     snapshot.forEach( childSnapshot => {
    //       var childData1 = childSnapshot.val();
    //       totalGains = totalGains + childData1.gains;
    //     });
    //     console.log(totalGains);
    //     return totalGains;
    //   });
    // }
    // getPic(username): Promise<any> {
    //   var queryGains = firebase.database().ref('/users/' + username + '/profilePic');
    //   queryGains.once("value").then( profilePic => {
    //     return profilePic.val()
    //   });
    // }
    DiscoverPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already competing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    DiscoverPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return DiscoverPage;
}());
DiscoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discover',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/discover/discover.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Discover</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div padding>\n    <!--\n    <ion-segment [(ngModel)]="segment">\n      <ion-segment-button  value="discover_people">\n        People\n      </ion-segment-button>\n    </ion-segment>\n    -->\n  </div>\n  \n  <div [ngSwitch]="segment">\n    <ion-list *ngSwitchCase="\'discover_people\'">\n      <ion-searchbar (ionInput)="getItems($event)" placeholder="search usernames to compete with friends"></ion-searchbar>\n      <ion-list>\n        <ion-item *ngFor="let item of currentItems">\n          \n          <ion-avatar item-start>\n              <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n              <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n          </ion-avatar>\n          \n          <h2>{{item.username}}\n            <button ion-button icon-only (click)="addToLeaderboard(item)">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </h2>\n            \n          <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <!--\n      <table>\n        <tr>\n          <td></td>\n          <td>Player</td>\n          <td>Gains</td>\n          <td></td>\n        </tr>\n        <tr *ngFor="let player of likelyFriends | sortByGains" [ngClass]="{red: player.name == username}">\n          <td>\n            <ion-item no-lines>\n              <ion-avatar>\n                <img *ngIf="player.profilePic != null" [src]="player.profilePic" />\n                <ion-icon class="default-img" *ngIf="player.profilePic == null" name="contact"></ion-icon>\n              </ion-avatar>\n            </ion-item>\n          </td>\n          <td>{{player.name}}</td>\n          <td>{{player.gains}}</td>\n\n          <td>\n            <button ion-button icon-only (click)="addToLeaderboard(player)">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n      -->\n    </ion-list>\n    <h3 *ngIf="show" id="loading">Loading</h3>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/discover/discover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* User */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */]])
], DiscoverPage);

//# sourceMappingURL=discover.js.map

/***/ })

});
//# sourceMappingURL=9.js.map