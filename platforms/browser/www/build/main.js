webpackJsonp([34],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_users__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProvidersUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProvidersUserProvider = (function () {
    function ProvidersUserProvider(http) {
        this.http = http;
        this.url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
        //private url = "http://localhost:8080/api/";
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_users__["a" /* UserModel */]();
        console.log('Hello ProvidersUserProvider Provider');
    }
    ProvidersUserProvider.prototype.getAllUsers = function () {
        return this.http.get(this.url + "getUsers").map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getLeaderboardData = function (userId) {
        return this.http.get(this.url + "getLeaderboardData?userId=" + userId).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getOneUser = function (username) {
        return this.http.get(this.url + "getUserByUsername?username=" + username).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getProfilePic = function (username) {
        return this.http.get(this.url + "getUserProfilePic?username=" + username);
    };
    ProvidersUserProvider.prototype.uploadProfilePic = function (username, pic) {
        return this.http.post(this.url + "uploadUserProfilePic?username=" + username, pic);
    };
    ProvidersUserProvider.prototype.getUserByEmail = function (email) {
        return this.http.get(this.url + "getUserByEmail?email=" + email).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getCompetingUsers = function (userId) {
        return this.http.get(this.url + "getUserCompeting?userId=" + userId).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.addCompetingUser = function (competing) {
        return this.http.post(this.url + "createCompeting", competing).map(function (res) { return res.text(); });
    };
    ProvidersUserProvider.prototype.removeCompetingUser = function (competing) {
        return this.http.post(this.url + "deleteCompeting?", competing);
    };
    ProvidersUserProvider.prototype.getCompetitors = function (userId) {
        return this.http.get(this.url + "getUserCompetitors?userId=" + userId).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getExercises = function () {
        return this.http.get(this.url + "getUserExercises?id=" + this.user.id).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getCompetingUsersExercises = function (userId) {
        return this.http.get(this.url + "getUserExercises?id=" + userId).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.addLiftingHistory = function (lf) {
        lf.user_id = this.user.id;
        return this.http.post(this.url + "addLiftingHistory", lf);
    };
    ProvidersUserProvider.prototype.getLiftingHistoryByIdAndExercise = function (ex) {
        return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getCompetingUsersLiftingHistoryByIdAndExercise = function (ex, userId) {
        return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getCardioHistoryByIdAndExercise = function (ex) {
        return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getCompetingUsersCardioHistoryByIdAndExercise = function (ex, userId) {
        return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.addCardioHistory = function (cardio) {
        cardio.user_id = this.user.id;
        console.log(cardio);
        return this.http.post(this.url + "addCardioHistory", cardio);
    };
    ProvidersUserProvider.prototype.getExercise = function (mgId, name, variation) {
        return this.http.get(this.url + "getExercise?muscleGroup=" + mgId + "&name=" + name.encodeURI() + "&variation=" + variation.encodeURI()).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.getTotalGains = function (userId) {
        return this.http.get(this.url + "getUserGainsTotal?userId=" + userId).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.createUser = function (user) {
        return this.http.post(this.url + "createUser", user).map(function (res) { return res.json(); });
    };
    ProvidersUserProvider.prototype.removeExercise = function (exId) {
        return this.http.get(this.url + "removeExercise?userID=" + this.user.id + "&exID=" + exId);
    };
    ProvidersUserProvider.prototype.setUser = function (newUser) {
        this.user = newUser;
    };
    ProvidersUserProvider.prototype.getUser = function () {
        return this.user;
    };
    return ProvidersUserProvider;
}());
ProvidersUserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProvidersUserProvider);

//# sourceMappingURL=providers-user.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab4Root; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
var Tab4Root = 'DiscoverPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cardio-record-detail/cardio-record-detail.module": [
		473,
		33
	],
	"../pages/cardio/cardio.module": [
		474,
		0
	],
	"../pages/cards/cards.module": [
		475,
		32
	],
	"../pages/competing/competing.module": [
		476,
		16
	],
	"../pages/competitors/competitors.module": [
		477,
		15
	],
	"../pages/content/content.module": [
		478,
		31
	],
	"../pages/custom-records/custom-records.module": [
		479,
		30
	],
	"../pages/discover/discover.module": [
		480,
		9
	],
	"../pages/edit-profile/edit-profile.module": [
		481,
		29
	],
	"../pages/exercise-create/item-create.module": [
		482,
		13
	],
	"../pages/exercise-detail/exercise-detail.module": [
		483,
		1
	],
	"../pages/exercises/exercises.module": [
		484,
		12
	],
	"../pages/friend-cardio-record-detail/friend-cardio-record-detail.module": [
		485,
		7
	],
	"../pages/friend-competing/friend-competing.module": [
		486,
		14
	],
	"../pages/friend-gains/friend-gains.module": [
		487,
		3
	],
	"../pages/friend-profile/friend-profile.module": [
		488,
		28
	],
	"../pages/friend-record-detail/friend-record-detail.module": [
		489,
		4
	],
	"../pages/friend-records/friend-records.module": [
		490,
		10
	],
	"../pages/gains/gains.module": [
		491,
		2
	],
	"../pages/leaderboard/leaderboard.module": [
		492,
		8
	],
	"../pages/login/login.module": [
		493,
		27
	],
	"../pages/map/map.module": [
		494,
		26
	],
	"../pages/menu/menu.module": [
		495,
		25
	],
	"../pages/profile/profile.module": [
		496,
		24
	],
	"../pages/record-cardio-detail/record-cardio-detail.module": [
		497,
		6
	],
	"../pages/record-detail/record-detail.module": [
		498,
		5
	],
	"../pages/records/records.module": [
		499,
		11
	],
	"../pages/rules/rules.module": [
		500,
		23
	],
	"../pages/search/search.module": [
		501,
		22
	],
	"../pages/signup/signup.module": [
		502,
		17
	],
	"../pages/tabs/tabs.module": [
		503,
		21
	],
	"../pages/tutorial/tutorial.module": [
		504,
		20
	],
	"../pages/users/users.module": [
		505,
		19
	],
	"../pages/welcome/welcome.module": [
		506,
		18
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/getUsers';
    }
    Api.prototype.get = function () {
        return this.http.get(this.url);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Items = (function () {
    function Items(http) {
        this.http = http;
        this.lifts = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var lifts = [
            {
                "name": "Bench Press",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Chest"
            },
            {
                "name": "Squat",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Legs"
            },
            {
                "name": "Deadlift",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Back"
            },
            {
                "name": "Shoulder Press",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Shoulders"
            },
            {
                "name": "Incline Flyes",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Chest"
            },
            {
                "name": "Leg Press",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Legs"
            },
            {
                "name": "Curls",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Arms"
            }
        ];
        for (var _i = 0, lifts_1 = lifts; _i < lifts_1.length; _i++) {
            var item = lifts_1[_i];
            this.lifts.push(new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */](item));
        }
        var username = "bob";
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.lifts;
        }
        return this.lifts.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.lifts.push(item);
    };
    Items.prototype.delete = function (item) {
        this.lifts.splice(this.lifts.indexOf(item), 1);
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Records; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Records = (function () {
    function Records(http) {
        this.http = http;
        this._records = [];
        this._chart = [];
        this._cardio = [];
        this._setToZero = [
            { min: 0, max: 5, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 5, max: 10, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 10, max: 15, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 15, max: 20, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 20, max: 25, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 25, max: 30, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 30, max: 35, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 35, max: 40, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 40, max: 45, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 45, max: 50, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 50, max: 55, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 55, max: 60, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 60, max: 65, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 65, max: 70, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 70, max: 75, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 75, max: 80, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 80, max: 85, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 85, max: 90, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 90, max: 95, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 95, max: 100, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 100, max: 105, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 105, max: 110, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 110, max: 115, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 115, max: 120, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 120, max: 1000, miles: 0, time: 0, mph: 0, records: 0 }
        ];
        this._cardioRecs = [
            { min: 0, max: 5, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 5, max: 10, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 10, max: 15, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 15, max: 20, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 20, max: 25, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 25, max: 30, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 30, max: 35, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 35, max: 40, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 40, max: 45, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 45, max: 50, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 50, max: 55, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 55, max: 60, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 60, max: 65, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 65, max: 70, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 70, max: 75, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 75, max: 80, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 80, max: 85, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 85, max: 90, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 90, max: 95, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 95, max: 100, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 100, max: 105, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 105, max: 110, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 110, max: 115, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 115, max: 120, miles: 0, time: 0, mph: 0, records: 0 },
            { min: 120, max: 1000, miles: 0, time: 0, mph: 0, records: 0 }
        ];
        this._cardioRecords = [];
    }
    return Records;
}());
Records = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Records);

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LevelsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Levels = (function () {
    function Levels(http) {
        this.http = http;
        this._levels = [
            { level: 1, totalPoints: 0, levelPoints: 100 },
            { level: 2, totalPoints: 100, levelPoints: 200 },
            { level: 3, totalPoints: 300, levelPoints: 300 },
            { level: 4, totalPoints: 600, levelPoints: 400 },
            { level: 5, totalPoints: 1000, levelPoints: 500 },
            { level: 6, totalPoints: 1500, levelPoints: 600 },
            { level: 7, totalPoints: 2100, levelPoints: 700 },
            { level: 8, totalPoints: 2800, levelPoints: 800 },
            { level: 9, totalPoints: 3600, levelPoints: 900 },
            { level: 10, totalPoints: 4500, levelPoints: 1000 },
            { level: 11, totalPoints: 5500, levelPoints: 1100 },
            { level: 12, totalPoints: 6600, levelPoints: 1200 },
            { level: 13, totalPoints: 7800, levelPoints: 1300 },
            { level: 14, totalPoints: 9100, levelPoints: 1400 },
            { level: 15, totalPoints: 10500, levelPoints: 1500 },
            { level: 16, totalPoints: 12000, levelPoints: 1600 },
            { level: 17, totalPoints: 13600, levelPoints: 1700 },
            { level: 18, totalPoints: 15300, levelPoints: 1800 },
            { level: 19, totalPoints: 17100, levelPoints: 1900 },
            { level: 20, totalPoints: 19000, levelPoints: 2000 },
            { level: 21, totalPoints: 21000, levelPoints: 4000 },
            { level: 22, totalPoints: 25000, levelPoints: 8000 },
            { level: 23, totalPoints: 33000, levelPoints: 16000 },
            { level: 24, totalPoints: 49000, levelPoints: 32000 },
            { level: 25, totalPoints: 81000, levelPoints: 64000 },
            { level: 26, totalPoints: 145000, levelPoints: 128000 },
            { level: 27, totalPoints: 273000, levelPoints: 256000 },
            { level: 28, totalPoints: 529000, levelPoints: 512000 },
            { level: 29, totalPoints: 1041000, levelPoints: 1024000 },
            { level: 30, totalPoints: 2065000, levelPoints: 2048000 },
            { level: 31, totalPoints: 4113000, levelPoints: 4096000 },
            { level: 32, totalPoints: 8209000, levelPoints: 8192000 },
            { level: 33, totalPoints: 24593000, levelPoints: 16384000 },
            { level: 34, totalPoints: 40977000, levelPoints: 32768000 },
            { level: 35, totalPoints: 73745000, levelPoints: 65536000 },
            { level: 36, totalPoints: 139281000, levelPoints: 131072000 },
            { level: 37, totalPoints: 270353000, levelPoints: 262144000 },
            { level: 38, totalPoints: 532497000, levelPoints: 524288000 },
            { level: 39, totalPoints: 1056785000, levelPoints: 1048576000 },
            { level: 40, totalPoints: 2105361000, levelPoints: 2097152000 },
        ];
    }
    return Levels;
}());
Levels = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Levels);

//# sourceMappingURL=levels.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_LiftingHistory__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_CardioHistory__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HistoryProvider = (function () {
    function HistoryProvider(http) {
        this.http = http;
        this.liftingHistory = new __WEBPACK_IMPORTED_MODULE_3__models_LiftingHistory__["a" /* LiftingHistory */]();
        this.cardioHistory = new __WEBPACK_IMPORTED_MODULE_4__models_CardioHistory__["a" /* CardioHistory */]();
        this._history = [{ date: new Date(0), reps: 0, weight: 0, oneRM: 0 }];
        this._charts = [{ date: new Date(0), reps: 0, weight: 0, oneRM: 0 }];
        this._cardio = [{ date: new Date(0), miles: 0, time: 0, mph: 0 }];
        this._cardioCharts = [{ date: new Date(0), miles: 0, time: 0, mph: 0 }];
        this.url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
    }
    //private url = "http://localhost:8080/api/";
    HistoryProvider.prototype.getLiftingHistoryByExercise = function (userId, exerciseId) {
        return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId).map(function (res) { return res.json(); });
    };
    HistoryProvider.prototype.getCardioHistoryByExercise = function (userId, exerciseId) {
        return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId).map(function (res) { return res.json(); });
    };
    HistoryProvider.prototype.getCardioHistory = function (userId) {
        return this.http.get(this.url + "getCardioHistoryById?userId=" + userId).map(function (res) { return res.json(); });
    };
    HistoryProvider.prototype.getLiftingHistory = function (userId) {
        return this.http.get(this.url + "getUserLiftingHistory?userId=" + userId).map(function (res) { return res.json(); });
    };
    HistoryProvider.prototype.removeLiftingHistory = function (liftingHistory) {
        return this.http.post(this.url + "deleteLiftingHistory?", liftingHistory);
    };
    HistoryProvider.prototype.removeCardioHistory = function (cardioHistory) {
        return this.http.post(this.url + "deleteCardioHistory?", cardioHistory);
    };
    return HistoryProvider;
}());
HistoryProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HistoryProvider);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// if you've gone with the local installation approach, you'd use the following:

var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.init = function () {
        var config = {
            apiKey: "AIzaSyCBYJ0--a38rC2Uhd28z5g3B449Kkz-fJE",
            authDomain: "drive-cadf7.firebaseapp.com",
            databaseURL: "https://drive-cadf7.firebaseio.com",
            projectId: "drive-cadf7",
            storageBucket: "drive-cadf7.appspot.com",
            messagingSenderId: "564282992846"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp(config);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DataService);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ExerciseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExerciseProvider = (function () {
    //private url = "http://localhost:8080/api/";
    function ExerciseProvider(http) {
        this.http = http;
        this.url = "http://driveapi-env.y7mz5ppbve.us-east-2.elasticbeanstalk.com/";
        console.log('Hello ExerciseProvider Provider');
    }
    ExerciseProvider.prototype.getExercisesByUserId = function (userId) {
        return this.http.get(this.url + "getExerciseByUserID?userID=" + userId).map(function (res) { return res.json(); });
    };
    ExerciseProvider.prototype.createExercise = function (userid, ex) {
        return this.http.post(this.url + "createExercise?userID=" + userid, ex);
    };
    ExerciseProvider.prototype.getAllMuscleGroups = function () {
        return this.http.get(this.url + "getAllMG").map(function (res) { return res.json(); });
    };
    return ExerciseProvider;
}());
ExerciseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ExerciseProvider);

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiftingHistory; });
var LiftingHistory = (function () {
    function LiftingHistory() {
    }
    return LiftingHistory;
}());

//# sourceMappingURL=LiftingHistory.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardioHistory; });
var CardioHistory = (function () {
    function CardioHistory() {
    }
    return CardioHistory;
}());

//# sourceMappingURL=CardioHistory.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(321);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_api_firebase__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_records_records__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_levels_levels__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_history_history__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_feathers_feathers__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_providers_user_providers_user__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_exercise_exercise__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_aws_aws__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_13__providers_providers__["g" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cardio-record-detail/cardio-record-detail.module#CardioRecordDetailPageModule', name: 'CardioRecordDetailPage', segment: 'cardio-record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cardio/cardio.module#CardioPageModule', name: 'CardioPage', segment: 'cardio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/competing/competing.module#CompetingPageModule', name: 'CompetingPage', segment: 'competing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/competitors/competitors.module#CompetitorsPageModule', name: 'CompetitorsPage', segment: 'competitors', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/custom-records/custom-records.module#CustomRecordsPageModule', name: 'CustomRecordsPage', segment: 'custom-records', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/discover/discover.module#DiscoverPageModule', name: 'DiscoverPage', segment: 'discover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exercise-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exercise-detail/exercise-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'exercise-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exercises/exercises.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'exercises', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-cardio-record-detail/friend-cardio-record-detail.module#FriendCardioRecordDetailPageModule', name: 'FriendCardioRecordDetailPage', segment: 'friend-cardio-record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-competing/friend-competing.module#FriendCompetingPageModule', name: 'FriendCompetingPage', segment: 'friend-competing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-gains/friend-gains.module#FriendGainsPageModule', name: 'FriendGainsPage', segment: 'friend-gains', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-profile/friend-profile.module#FriendProfilePageModule', name: 'FriendProfilePage', segment: 'friend-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-record-detail/friend-record-detail.module#FriendRecordsPageModule', name: 'FriendRecordDetailPage', segment: 'friend-record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-records/friend-records.module#FriendRecordsPageModule', name: 'FriendRecordsPage', segment: 'friend-records', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gains/gains.module#GainsPageModule', name: 'GainsPage', segment: 'gains', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/leaderboard/leaderboard.module#SearchPageModule', name: 'SearchPage', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#SettingsPageModule', name: 'SettingsPage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record-cardio-detail/record-cardio-detail.module#RecordCardioDetailPageModule', name: 'RecordCardioDetailPage', segment: 'record-cardio-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record-detail/record-detail.module#RecordDetailPageModule', name: 'RecordDetailPage', segment: 'record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/records/records.module#RecordsPageModule', name: 'RecordsPage', segment: 'records', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'AddCompetitorsPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_15__providers_api_firebase__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["g" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_records_records__["a" /* Records */],
            __WEBPACK_IMPORTED_MODULE_17__providers_levels_levels__["a" /* Levels */],
            __WEBPACK_IMPORTED_MODULE_18__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_feathers_feathers__["a" /* FeathersProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_exercise_exercise__["a" /* ExerciseProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_aws_aws__["a" /* AwsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__["a" /* Push */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* unused harmony export StatsBarChart */
/* unused harmony export StatsLineChart */
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

var StatsBarChart = [
    { reps: 1, oneRM: 315 },
    { reps: 2, oneRM: 300 },
    { reps: 3, oneRM: 275 },
    { reps: 4, oneRM: 225 },
    { reps: 5, oneRM: 330 },
    { reps: 6, oneRM: 225 },
    { reps: 7, oneRM: 315 },
    { reps: 8, oneRM: 300 },
    { reps: 10, oneRM: 275 },
    { reps: 12, oneRM: 305 },
    { reps: 15, oneRM: 285 }
];
var StatsLineChart = [
    { date: "9-20", reps: 1, weight: 315, oneRM: 315 },
    { date: "9-21", reps: 10, weight: 215, oneRM: 300 },
    { date: "9-26", reps: 5, weight: 235, oneRM: 275 },
    { date: "9-27", reps: 3, weight: 205, oneRM: 225 },
    { date: "9-28", reps: 2, weight: 320, oneRM: 330 },
    { date: "10-2", reps: 5, weight: 185, oneRM: 225 },
    { date: "10-3", reps: 16, weight: 275, oneRM: 315 },
    { date: "10-9", reps: 1, weight: 300, oneRM: 300 },
    { date: "10-10", reps: 1, weight: 275, oneRM: 275 },
    { date: "10-15", reps: 4, weight: 285, oneRM: 305 },
    { date: "10-16", reps: 1, weight: 385, oneRM: 285 }
];
//# sourceMappingURL=item.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(151);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(214);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(http, api) {
        this.http = http;
        this.api = api;
    }
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* Api */]])
], User);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_firebase__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(translate, platform, user, settings, config, statusBar, splashScreen, data, userService, push, alertCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.user = user;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userService = userService;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* FirstRunPage */];
        this.tester = "";
        this.email = "";
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Cards', component: 'CardsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Map', component: 'MapPage' },
            { title: 'Exercises', component: 'ListMasterPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Profile', component: 'SettingsPage' },
            { title: 'Leaderboard', component: 'SearchPage' },
            { title: 'AddCompetitors', component: 'AddCompetitorsPage' }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initPushNotification();
        });
        this.initTranslate();
        data.init();
        this.tester = localStorage.getItem("stay");
        //alert(this.tester)
        if (this.tester == "logged") {
            this.setUser();
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_pages__["b" /* MainPage */];
        }
    }
    MyApp.prototype.setUser = function () {
        var _this = this;
        this.email = localStorage.getItem("email");
        this.userService.getUserByEmail(this.email).subscribe(function (data) {
            _this.userService.setUser(data);
        });
        var query1 = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.database().ref("/users");
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                if (childData1.email == _this.email) {
                    _this.user._user = childData1.name;
                    localStorage.setItem("username", childData1.name);
                    //this.rootPage = MainPage;
                }
                //alert(this.user._user);      
            });
        });
    };
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        var options = {
            android: {
                senderID: "564282992846"
            },
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log("device token:", data.registrationId);
            var alert = _this.alertCtrl.create({
                title: 'device token',
                subTitle: data.registrationId,
                buttons: ['OK']
            });
            alert.present();
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message', data.message);
            if (data.additionalData.foreground) {
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                            }
                        }]
                });
                confirmAlert.present();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'clicked on',
                    subTitle: "you clicked on the notification!",
                    buttons: ['OK']
                });
                alert_1.present();
                console.log("Push notification clicked");
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["h" /* User */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__providers_api_firebase__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["e" /* ProvidersUserProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeathersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FeathersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FeathersProvider = (function () {
    function FeathersProvider(http) {
        this.http = http;
        console.log('Hello FeathersProvider Provider');
    }
    return FeathersProvider;
}());
FeathersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], FeathersProvider);

//# sourceMappingURL=feathers.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AwsProvider = (function () {
    function AwsProvider(http) {
        this.http = http;
        this.apiUrl = 'http://127.0.0.1:5000/';
        // https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/
        this.randomString = function (length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
    }
    AwsProvider.prototype.getSignedUploadRequest = function (name, type) {
        return this.http.get(this.apiUrl + "aws/sign?file-name=" + name + "&file-type=" + type).map(function (res) { return res.json(); });
    };
    AwsProvider.prototype.getFileList = function () {
        return this.http.get(this.apiUrl + "aws/files")
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res['Contents'].map(function (val) { return val.Key; });
        });
    };
    AwsProvider.prototype.getSignedFileRequest = function (name) {
        return this.http.get(this.apiUrl + "aws/files/" + name).map(function (res) { return res.json(); });
    };
    AwsProvider.prototype.deleteFile = function (name) {
        return this.http.delete(this.apiUrl + "aws/files/" + name).map(function (res) { return res.json(); });
    };
    AwsProvider.prototype.uploadFile = function (url, file) {
        return this.http.put(url, file);
    };
    return AwsProvider;
}());
AwsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AwsProvider);

//# sourceMappingURL=aws.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__records_records__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels_levels__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_providers_user__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__records_records__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__levels_levels__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__history_history__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__providers_user_providers_user__["a"]; });









//# sourceMappingURL=providers.js.map

/***/ })

},[305]);
//# sourceMappingURL=main.js.map