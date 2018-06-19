webpackJsonp([34],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_providers_user__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FcmProvider = (function () {
    function FcmProvider(firebaseNative, afs, platform, userService) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
        this.userService = userService;
    }
    // Get permission from the user
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        console.log(token);
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    // Save the token to firestore
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        if (!token)
            return;
        var devicesRef = this.afs.collection('devices');
        var platform;
        if (this.platform.is('android')) {
            platform = 'android';
        }
        else {
            platform = 'ios';
        }
        var docData = {
            token: token,
            userId: this.userService.getUser().username,
            platform: platform
        };
        return devicesRef.doc(token).set(docData);
    };
    // Save the token to firestore
    FcmProvider.prototype.sendCompetingNotification = function (userId, competingId) {
        return __awaiter(this, void 0, void 0, function () {
            var devicesRef, docData;
            return __generator(this, function (_a) {
                devicesRef = this.afs.collection('subscribers');
                docData = {
                    userId: userId,
                    competingId: competingId,
                };
                return [2 /*return*/, devicesRef.doc(userId).set(docData)];
            });
        });
    };
    // Listen to incoming FCM messages
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    return FcmProvider;
}());
FcmProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_providers_user__["a" /* ProvidersUserProvider */]])
], FcmProvider);

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthProvider = (function () {
    function AuthProvider(httpClient, storage, jwtHelper) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.jwtHelper = jwtHelper;
        this.jwtTokenName = 'jwt_token';
        this.authUser = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        // private url = "http://Driveapi-pic.uvrytrqbjh.us-east-1.elasticbeanstalk.com/";
        this.url = "http://localhost:8080/api";
    }
    AuthProvider.prototype.checkLogin = function () {
        var _this = this;
        this.storage.get(this.jwtTokenName).then(function (jwt) {
            if (jwt && !_this.jwtHelper.isTokenExpired(jwt)) {
                _this.httpClient.get(_this.url + "/authenticate")
                    .subscribe(function () { return _this.authUser.next(jwt); }, function (err) { return _this.storage.remove(_this.jwtTokenName).then(function () { return _this.authUser.next(null); }); });
                // OR
                // this.authUser.next(jwt);
            }
            else {
                _this.storage.remove(_this.jwtTokenName).then(function () { return _this.authUser.next(null); });
            }
        });
    };
    AuthProvider.prototype.login = function (values) {
        var _this = this;
        return this.httpClient.post(this.url + "/login", values)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (jwt) { return _this.handleJwtResponse(jwt); }));
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        this.storage.remove(this.jwtTokenName).then(function () { return _this.authUser.next(null); });
    };
    AuthProvider.prototype.signup = function (values) {
        var _this = this;
        alert(this.url + "/signup");
        return this.httpClient.post(this.url + "/signup", values)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (jwt) {
            alert('here');
            if (jwt !== 'EXISTS') {
                return _this.handleJwtResponse(jwt);
            }
            return jwt;
        }));
    };
    AuthProvider.prototype.handleJwtResponse = function (jwt) {
        var _this = this;
        return this.storage.set(this.jwtTokenName, jwt)
            .then(function () { return _this.authUser.next(jwt); })
            .then(function () { return jwt; });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__["b" /* JwtHelperService */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mocks_providers_items__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_records__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_levels__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_providers_user__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fcm_fcm__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__records_records__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__levels_levels__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__history_history__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__providers_user_providers_user__["a"]; });
/* unused harmony reexport FcmProvider */
/* unused harmony reexport AuthProvider */









//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* unused harmony export LoginPage */
/* unused harmony export TutorialPage */
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
var LoginPage = 'LoginPage';
var TutorialPage = 'TutorialPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
var Tab4Root = 'DiscoverPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cardio-record-detail/cardio-record-detail.module": [
		577,
		33
	],
	"../pages/cardio/cardio.module": [
		579,
		0
	],
	"../pages/cards/cards.module": [
		578,
		32
	],
	"../pages/competing/competing.module": [
		580,
		20
	],
	"../pages/competitors/competitors.module": [
		581,
		19
	],
	"../pages/content/content.module": [
		582,
		31
	],
	"../pages/custom-records/custom-records.module": [
		583,
		30
	],
	"../pages/discover/discover.module": [
		584,
		8
	],
	"../pages/edit-profile/edit-profile.module": [
		585,
		29
	],
	"../pages/exercise-create/item-create.module": [
		586,
		17
	],
	"../pages/exercise-detail/exercise-detail.module": [
		587,
		1
	],
	"../pages/exercises/exercises.module": [
		588,
		9
	],
	"../pages/friend-cardio-record-detail/friend-cardio-record-detail.module": [
		590,
		7
	],
	"../pages/friend-competing/friend-competing.module": [
		589,
		18
	],
	"../pages/friend-gains/friend-gains.module": [
		598,
		3
	],
	"../pages/friend-profile/friend-profile.module": [
		591,
		16
	],
	"../pages/friend-record-detail/friend-record-detail.module": [
		592,
		4
	],
	"../pages/friend-records/friend-records.module": [
		593,
		11
	],
	"../pages/gains/gains.module": [
		594,
		2
	],
	"../pages/leaderboard/leaderboard.module": [
		595,
		10
	],
	"../pages/login/login.module": [
		596,
		14
	],
	"../pages/map/map.module": [
		607,
		28
	],
	"../pages/menu/menu.module": [
		597,
		27
	],
	"../pages/profile/profile.module": [
		599,
		26
	],
	"../pages/record-cardio-detail/record-cardio-detail.module": [
		600,
		6
	],
	"../pages/record-detail/record-detail.module": [
		601,
		5
	],
	"../pages/records/records.module": [
		602,
		12
	],
	"../pages/rules/rules.module": [
		603,
		25
	],
	"../pages/search/search.module": [
		604,
		15
	],
	"../pages/signup/signup.module": [
		606,
		13
	],
	"../pages/tabs/tabs.module": [
		605,
		24
	],
	"../pages/tutorial/tutorial.module": [
		608,
		23
	],
	"../pages/users/users.module": [
		609,
		22
	],
	"../pages/welcome/welcome.module": [
		610,
		21
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
webpackAsyncContext.id = 263;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__(515);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Records; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], Records);

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], Levels);

//# sourceMappingURL=levels.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_LiftingHistory__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_CardioHistory__ = __webpack_require__(338);
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
        this.liftingHistory = new __WEBPACK_IMPORTED_MODULE_2__models_LiftingHistory__["a" /* LiftingHistory */]();
        this.cardioHistory = new __WEBPACK_IMPORTED_MODULE_3__models_CardioHistory__["a" /* CardioHistory */]();
        this._history = [{ date: new Date(0), reps: 0, weight: 0, oneRM: 0 }];
        this._charts = [{ date: new Date(0), reps: 0, weight: 0, oneRM: 0 }];
        this._cardio = [{ date: new Date(0), miles: 0, time: 0, mph: 0 }];
        this._cardioCharts = [{ date: new Date(0), miles: 0, time: 0, mph: 0 }];
        // private url = "http://Driveapi-pic.uvrytrqbjh.us-east-1.elasticbeanstalk.com/";
        this.url = "http://localhost:8080/api/";
    }
    HistoryProvider.prototype.getLiftingHistoryByExercise = function (userId, exerciseId) {
        return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId);
    };
    HistoryProvider.prototype.getCardioHistoryByExercise = function (userId, exerciseId) {
        return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + '&exerciseId=' + exerciseId);
    };
    HistoryProvider.prototype.getCardioHistory = function (userId) {
        return this.http.get(this.url + "getCardioHistoryById?userId=" + userId);
    };
    HistoryProvider.prototype.getLiftingHistory = function (userId) {
        return this.http.get(this.url + "getUserLiftingHistory?userId=" + userId);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], HistoryProvider);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
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
    function ExerciseProvider(http) {
        this.http = http;
        // private url = "http://Driveapi-pic.uvrytrqbjh.us-east-1.elasticbeanstalk.com/";
        this.url = "http://localhost:8080/api/";
        console.log('Hello ExerciseProvider Provider');
    }
    ExerciseProvider.prototype.getExercisesByUserId = function (userId) {
        return this.http.get(this.url + "getExerciseByUserID?userID=" + userId);
    };
    ExerciseProvider.prototype.createExercise = function (userid, ex) {
        return this.http.post(this.url + "createExercise?userID=" + userid, ex);
    };
    ExerciseProvider.prototype.getAllMuscleGroups = function () {
        return this.http.get(this.url + "getAllMG");
    };
    return ExerciseProvider;
}());
ExerciseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], ExerciseProvider);

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 337:
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

/***/ 338:
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

/***/ 339:
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(460);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* unused harmony export jwtOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_records_records__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_levels_levels__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_history_history__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_feathers_feathers__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_providers_user_providers_user__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_exercise_exercise__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_firebase__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_firestore__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_fcm_fcm__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth0_angular_jwt__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_13__providers_providers__["f" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var firebase = {
    apiKey: "AIzaSyCBYJ0--a38rC2Uhd28z5g3B449Kkz-fJE",
    authDomain: "drive-cadf7.firebaseapp.com",
    databaseURL: "https://drive-cadf7.firebaseio.com",
    projectId: "drive-cadf7",
    storageBucket: "drive-cadf7.appspot.com",
    messagingSenderId: "564282992846"
};
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: function () { return storage.get('jwt_token'); },
        whitelistedDomains: ['localhost:8080']
    };
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
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase),
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cardio-record-detail/cardio-record-detail.module#CardioRecordDetailPageModule', name: 'CardioRecordDetailPage', segment: 'cardio-record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cardio/cardio.module#CardioPageModule', name: 'CardioPage', segment: 'cardio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/competing/competing.module#CompetingPageModule', name: 'CompetingPage', segment: 'competing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/competitors/competitors.module#CompetitorsPageModule', name: 'CompetitorsPage', segment: 'competitors', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/custom-records/custom-records.module#CustomRecordsPageModule', name: 'CustomRecordsPage', segment: 'custom-records', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/discover/discover.module#DiscoverPageModule', name: 'DiscoverPage', segment: 'discover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exercise-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exercise-detail/exercise-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'exercise-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exercises/exercises.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'exercises', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-competing/friend-competing.module#FriendCompetingPageModule', name: 'FriendCompetingPage', segment: 'friend-competing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-cardio-record-detail/friend-cardio-record-detail.module#FriendCardioRecordDetailPageModule', name: 'FriendCardioRecordDetailPage', segment: 'friend-cardio-record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-profile/friend-profile.module#FriendProfilePageModule', name: 'FriendProfilePage', segment: 'friend-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-record-detail/friend-record-detail.module#FriendRecordsPageModule', name: 'FriendRecordDetailPage', segment: 'friend-record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-records/friend-records.module#FriendRecordsPageModule', name: 'FriendRecordsPage', segment: 'friend-records', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gains/gains.module#GainsPageModule', name: 'GainsPage', segment: 'gains', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/leaderboard/leaderboard.module#SearchPageModule', name: 'SearchPage', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friend-gains/friend-gains.module#FriendGainsPageModule', name: 'FriendGainsPage', segment: 'friend-gains', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#SettingsPageModule', name: 'SettingsPage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record-cardio-detail/record-cardio-detail.module#RecordCardioDetailPageModule', name: 'RecordCardioDetailPage', segment: 'record-cardio-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record-detail/record-detail.module#RecordDetailPageModule', name: 'RecordDetailPage', segment: 'record-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/records/records.module#RecordsPageModule', name: 'RecordsPage', segment: 'records', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'AddCompetitorsPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_27__auth0_angular_jwt__["c" /* JwtModule */].forRoot({
                jwtOptionsProvider: {
                    provide: __WEBPACK_IMPORTED_MODULE_27__auth0_angular_jwt__["a" /* JWT_OPTIONS */],
                    useFactory: jwtOptionsFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]]
                }
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["f" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_records_records__["a" /* Records */],
            __WEBPACK_IMPORTED_MODULE_16__providers_levels_levels__["a" /* Levels */],
            __WEBPACK_IMPORTED_MODULE_17__providers_history_history__["a" /* HistoryProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_feathers_feathers__["a" /* FeathersProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_exercise_exercise__["a" /* ExerciseProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 515:
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(98);
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

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(101);
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
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, userService, fcm, toastCtrl, authProvider) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userService = userService;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
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
        this.initTranslate();
        this.tester = localStorage.getItem("stay");
        if (this.tester == "logged") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["b" /* MainPage */];
        }
        platform.ready().then(function () {
            // Get a FCM token
            if (_this.tester == "logged") {
                alert(_this.tester);
                fcm.getToken();
                // Listen to incoming messages
                fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["tap"])(function (msg) {
                    console.log("FIRST MESSAGE" + JSON.stringify(msg));
                    if (msg['tap'] == true) {
                        console.log("here");
                        // userService.getOneUser(msg['user'].split(' ')[0]).subscribe(user => {
                        //   this.nav.push(TabsPage).then(() => {
                        //     this.nav.push('FriendProfilePage', {
                        //       item: user
                        //     });
                        //   })
                        // })
                    }
                    // show a toast
                    var toast = toastCtrl.create({
                        message: msg['body'],
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }));
            }
        });
        // authProvider.checkLogin();
        // authProvider.authUser.subscribe(jwt => {
        //   if (jwt) {
        //     this.rootPage = MainPage;
        //   }
        //   else {
        //     this.rootPage = TutorialPage;
        //   }
        // });
    }
    // setUser() {
    //   this.email = localStorage.getItem("email");
    //   this.userService.getUserByEmail(this.email).subscribe(data =>{
    //     this.userService.setUser(data);
    //   })
    //   var query1 = firebase.database().ref("/users");
    //   query1.once("value").then( snapshot => {
    //     snapshot.forEach( childSnapshot => {
    //       var childData1 = childSnapshot.val();
    //       if (childData1.email == this.email) {
    //         localStorage.setItem("username",childData1.name);
    //         //this.rootPage = MainPage;
    //       }
    //       //alert(this.user._user);      
    //     });
    //   });
    // }
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
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["f" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["d" /* ProvidersUserProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_fcm_fcm__["a" /* FcmProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeathersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], FeathersProvider);

//# sourceMappingURL=feathers.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users__ = __webpack_require__(339);
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
        // private url = "http://Driveapi-pic.uvrytrqbjh.us-east-1.elasticbeanstalk.com/";
        this.url = "http://localhost:8080/api/";
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_users__["a" /* UserModel */]();
        console.log('Hello ProvidersUserProvider Provider');
    }
    ProvidersUserProvider.prototype.getAllUsers = function () {
        return this.http.get(this.url + "getUsers");
    };
    ProvidersUserProvider.prototype.getLeaderboardData = function (userId) {
        return this.http.get(this.url + "getLeaderboardData?userId=" + userId);
    };
    ProvidersUserProvider.prototype.getOneUser = function (username) {
        return this.http.get(this.url + "getUserByUsername?username=" + username);
    };
    ProvidersUserProvider.prototype.getProfilePic = function (username) {
        return this.http.get(this.url + "getUserProfilePic?username=" + username);
    };
    ProvidersUserProvider.prototype.uploadProfilePic = function (username, pic) {
        return this.http.post(this.url + "uploadUserProfilePic?username=" + username, pic);
    };
    ProvidersUserProvider.prototype.getUserByEmail = function (email) {
        return this.http.get(this.url + "getUserByEmail?email=" + email);
    };
    ProvidersUserProvider.prototype.getCompetingUsers = function (userId) {
        return this.http.get(this.url + "getUserCompeting?userId=" + userId);
    };
    ProvidersUserProvider.prototype.addCompetingUser = function (competing) {
        return this.http.post(this.url + "createCompeting", competing);
    };
    ProvidersUserProvider.prototype.removeCompetingUser = function (competing) {
        return this.http.post(this.url + "deleteCompeting?", competing);
    };
    ProvidersUserProvider.prototype.getCompetitors = function (userId) {
        return this.http.get(this.url + "getUserCompetitors?userId=" + userId);
    };
    ProvidersUserProvider.prototype.getExercises = function () {
        return this.http.get(this.url + "getUserExercises?id=" + this.user.id);
    };
    ProvidersUserProvider.prototype.getCompetingUsersExercises = function (userId) {
        return this.http.get(this.url + "getUserExercises?id=" + userId);
    };
    ProvidersUserProvider.prototype.addLiftingHistory = function (lf) {
        lf.user_id = this.user.id;
        return this.http.post(this.url + "addLiftingHistory", lf);
    };
    ProvidersUserProvider.prototype.getLiftingHistoryByIdAndExercise = function (ex) {
        return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id);
    };
    ProvidersUserProvider.prototype.getCompetingUsersLiftingHistoryByIdAndExercise = function (ex, userId) {
        return this.http.get(this.url + "getLiftingHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id);
    };
    ProvidersUserProvider.prototype.getCardioHistoryByIdAndExercise = function (ex) {
        return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + this.user.id + "&exerciseId=" + ex.id);
    };
    ProvidersUserProvider.prototype.getCompetingUsersCardioHistoryByIdAndExercise = function (ex, userId) {
        return this.http.get(this.url + "getCardioHistoryByExercise?userId=" + userId + "&exerciseId=" + ex.id);
    };
    ProvidersUserProvider.prototype.addCardioHistory = function (cardio) {
        cardio.user_id = this.user.id;
        console.log(cardio);
        return this.http.post(this.url + "addCardioHistory", cardio);
    };
    ProvidersUserProvider.prototype.getExercise = function (mgId, name, variation) {
        return this.http.get(this.url + "getExercise?muscleGroup=" + mgId + "&name=" + name.encodeURI() + "&variation=" + variation.encodeURI());
    };
    ProvidersUserProvider.prototype.getTotalGains = function (userId) {
        return this.http.get(this.url + "getUserGainsTotal?userId=" + userId);
    };
    ProvidersUserProvider.prototype.createUser = function (user) {
        return this.http.post(this.url + "createUser", user);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
], ProvidersUserProvider);

//# sourceMappingURL=providers-user.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map