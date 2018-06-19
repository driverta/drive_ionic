webpackJsonp([10],{

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaderboard__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(687);
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

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_by_gains_sort_by_gains__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_by_reps_sort_by_reps__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys_keys__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_by_minutes_sort_by_minutes__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cardio_time_convert_cardio_time_convert__ = __webpack_require__(692);
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

/***/ 688:
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

/***/ 689:
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

/***/ 690:
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

/***/ 691:
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

/***/ 692:
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

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_competing__ = __webpack_require__(835);
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
    function SearchPage(alertCtrl, levels, navCtrl, navParams, userService) {
        this.alertCtrl = alertCtrl;
        this.levels = levels;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.currentItems = [];
        this.timeFilter = "All Time";
        this.rank = "Frail Body";
        this.loop = 0;
        this.gains = 0;
        this.loop2 = 0;
        this.show = true;
        this.total = false;
        this.week = false;
        this.month = false;
        this.day = false;
        this.competingUsers = new Array();
        this.players = [
            { name: "tom", level: 3, gains: 100, profilePic: "", totalGains: [], rank: "Frail Body" }
        ];
        this.user = this.userService.getUser();
    }
    SearchPage.prototype.addCompetitors = function () {
        this.navCtrl.push('AddCompetitorsPage');
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.show = true;
        this.username = this.user.username;
        this.players = [];
        this.timeFilter = "All Time";
        this.userService.getLeaderboardData(this.userService.getUser().id).subscribe(function (data) {
            _this.competingUsers = data;
            _this.competingUsers.forEach(function (player) {
                _this.userService.getProfilePic(player.username).subscribe(function (pic) {
                    player.profilePic = "data:image/jpeg;base64," + pic['_body'];
                });
            });
            _this.show = false;
            _this.filterDay('All Time');
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
        this.competingUsers.forEach(function (user) {
            switch (ev) {
                case "Today":
                    user.gains = user.gainsToday;
                    break;
                case "Week":
                    user.gains = user.gainsWeek;
                    break;
                case "Month":
                    user.gains = user.gainsMonth;
                    break;
                default:
                    user.gains = user.gainsTotal;
                    break;
            }
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
                        _this.removeCompetingUser(x);
                    }
                }
            ]
        });
        alert.present();
    };
    SearchPage.prototype.removeCompetingUser = function (competingUser) {
        var _this = this;
        var competing = new __WEBPACK_IMPORTED_MODULE_3__models_competing__["a" /* CompetingModel */];
        competing.id = this.user.id;
        competing.competingUser = competingUser.id;
        this.userService.removeCompetingUser(competing).subscribe(function (data) {
            console.log(data);
            _this.ionViewWillEnter();
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
        selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/leaderboard/leaderboard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Leaderboard</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addCompetitors()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="timespan">\n    <ion-select (ngModelChange)="filterDay($event)" [(ngModel)]="timeFilter">\n      <ion-option>Today</ion-option>\n      <ion-option>Week</ion-option>\n      <ion-option>Month</ion-option>\n      <ion-option>All Time</ion-option>\n    </ion-select>\n\n    <ion-list class="no-margin">\n      <ion-item-sliding no-lines *ngFor="let item of competingUsers | sortByGains" >\n        <ion-item (click)="openItem(item)" no-lines [ngClass]="{red: item.name == username}">\n          <ion-avatar item-start>\n            <img *ngIf="item.profilePic != null" [src]="item.profilePic" />\n            <ion-icon *ngIf="item.profilePic == null" class="default-img" name="contact"></ion-icon>\n          </ion-avatar>\n          \n          <h1>{{item.username}}\n          \n            <div class="gains">{{item.gains}}</div>\n            <!-- <h3>{{item.rank}} {{item.level}}</h3> -->\n         \n          </h1>\n        </ion-item>\n      \n        <ion-item-options>\n          <button ion-button color="danger" (click)="presentConfirm(item)">\n            {{ \'Remove\' | translate }}\n          </button>\n        </ion-item-options>\n        \n      </ion-item-sliding>\n    </ion-list>\n    <h3 *ngIf="show" id="loading">Loading</h3>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/leaderboard/leaderboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* Levels */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* ProvidersUserProvider */]])
], SearchPage);

//# sourceMappingURL=leaderboard.js.map

/***/ })

});
//# sourceMappingURL=10.js.map