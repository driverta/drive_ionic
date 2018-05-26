webpackJsonp([9],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaderboard__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(579);
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
            __WEBPACK_IMPORTED_MODULE_3__leaderboard__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__leaderboard__["a" /* SearchPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__leaderboard__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=leaderboard.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys_keys__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__ = __webpack_require__(583);
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
            __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__["a" /* SortByMinutesPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__["a" /* SortByGainsPipe */],
            __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__["a" /* SortByRepsPipe */],
            __WEBPACK_IMPORTED_MODULE_3__keys_keys__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__["a" /* SortByMinutesPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 580:
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

/***/ 581:
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

/***/ 582:
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

/***/ 583:
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

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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





var SearchPage = (function () {
    function SearchPage(alertCtrl, user, levels, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.user = user;
        this.levels = levels;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentItems = [];
        this.timeFilter = "All Time";
        this.rank = "Frail Body";
        this.loop = 0;
        this.gains = 0;
        this.loop2 = 0;
        this.show = true;
        this.players = [
            { name: "tom", level: 3, gains: 100, profilePic: "", totalGains: [], rank: "Frail Body" }
        ];
    }
    SearchPage.prototype.addCompetitors = function () {
        this.navCtrl.push('AddCompetitorsPage');
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.show = true;
        this.username = localStorage.getItem("username");
        this.players = [];
        this.timeFilter = "All Time";
        var queryPlayers = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competing');
        queryPlayers.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                var data = { name: childData1.name, level: 0, gains: 0, profilePic: "", totalGains: [], rank: "Frail Body" };
                _this.players.push(data);
                if (snapshot.numChildren() == _this.loop) {
                    _this.getGains();
                    _this.getPic();
                }
            });
        });
    };
    SearchPage.prototype.getGains = function () {
        var _this = this;
        this.players.forEach(function (value, index) {
            var queryGains = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + value.name + '/gains');
            queryGains.once("value").then(function (snapshot) {
                _this.loop = 0;
                _this.gains = 0;
                snapshot.forEach(function (childSnapshot) {
                    _this.loop++;
                    var childData1 = childSnapshot.val();
                    _this.players[index].totalGains.push(childData1);
                    var gains = childData1.gains;
                    _this.gains = _this.gains + gains;
                    if (snapshot.numChildren() == _this.loop) {
                        _this.show = false;
                        value.gains = _this.gains;
                        _this.setLevel(_this.gains, index);
                    }
                });
            });
        });
    };
    SearchPage.prototype.getPic = function () {
        this.players.forEach(function (value) {
            var queryGains = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users');
            queryGains.once("value").then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childData1 = childSnapshot.val();
                    if (childData1.name == value.name) {
                        value.profilePic = childData1.profilePic;
                    }
                });
            });
        });
    };
    SearchPage.prototype.setLevel = function (gains, i) {
        var _this = this;
        this.levels._levels.forEach(function (value) {
            if (gains > value.totalPoints) {
                _this.players[i].level = value.level;
                var xlevel = _this.players[i].level;
            }
            if (xlevel < 10) {
                _this.players[i].rank = "Frail Body";
            }
            else if (xlevel >= 10 && xlevel < 20) {
                _this.players[i].rank = "Gym Rat";
            }
            else if (xlevel >= 20 && xlevel < 30) {
                _this.players[i].rank = "Bodybuilder";
            }
            else if (xlevel > 30) {
                _this.players[i].rank = "Olympian";
            }
        });
    };
    SearchPage.prototype.filterDay = function (ev) {
        var _this = this;
        var todaysDate = new Date().toISOString().slice(0, 10);
        var lastWeek = new Date();
        var lastMonth = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        lastMonth.setDate(lastMonth.getDate() - 30);
        this.players.forEach(function (value, index) {
            _this.gains = 0;
            value.totalGains.forEach(function (childData1) {
                _this.loop++;
                var gains = childData1.gains;
                var date = childData1.date;
                var newDate = date.slice(0, 10);
                //alert(newDate);
                var testDate = new Date(newDate);
                if (ev == "All Time") {
                    _this.gains = _this.gains + gains;
                }
                //alert(testDate);
                if (ev == "Today") {
                    if (newDate == todaysDate) {
                        _this.gains = _this.gains + gains;
                    }
                }
                if (ev == "Week") {
                    if (testDate > lastWeek) {
                        _this.gains = _this.gains + gains;
                    }
                }
                if (ev == "Month") {
                    if (testDate > lastMonth) {
                        _this.gains = _this.gains + gains;
                    }
                }
                value.gains = _this.gains;
            });
        });
    };
    SearchPage.prototype.presentConfirm = function (x) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete?',
            message: 'Do you want to remove ' + x.name + ' from your leaderboard?',
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
                        _this.deleteSet(x);
                    }
                }
            ]
        });
        alert.present();
    };
    SearchPage.prototype.deleteSet = function (x) {
        var _this = this;
        var set = x;
        var query1 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/' + this.username + '/competing');
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                if (x.name == childData1.name) {
                    childSnapshot.getRef().remove().then(function () {
                        console.log('Write succeeded!');
                        _this.ionViewWillEnter();
                    });
                }
            });
        });
    };
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-leaderboard',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\leaderboard\leaderboard.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Leaderboard</ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="addCompetitors()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="timespan">\n\n    <ion-select (ngModelChange)="filterDay($event)" [(ngModel)]="timeFilter">\n\n      <ion-option>Today</ion-option>\n\n      <ion-option>Week</ion-option>\n\n      <ion-option>Month</ion-option>\n\n      <ion-option>All Time</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-list>\n\n      <ion-item-sliding no-lines *ngFor="let item of players | sortByGains" >\n\n        <ion-item (click)="openItem(item)" no-lines [ngClass]="{red: item.name == username}">\n\n          <ion-avatar item-start>\n\n            <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n\n          </ion-avatar>\n\n          \n\n          <h1>{{item.name}}\n\n            <div id="gains">{{item.gains}}</div>\n\n            <h3>{{item.rank}} {{item.level}}</h3>\n\n          </h1>\n\n        </ion-item>\n\n      \n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="presentConfirm(item)">\n\n            {{ \'Remove\' | translate }}\n\n          </button>\n\n        </ion-item-options>\n\n        \n\n      </ion-item-sliding>\n\n    </ion-list>\n\n    <h3 *ngIf="show" id="loading">Loading</h3>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\leaderboard\leaderboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* User */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Levels */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=leaderboard.js.map

/***/ })

});
//# sourceMappingURL=9.js.map