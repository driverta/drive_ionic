webpackJsonp([19],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* SettingsPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { WelcomePage } from '../pages';

var SettingsPage = SettingsPage_1 = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, modalCtrl, alertCtrl, translate, camera, user, levels, storage) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.camera = camera;
        this.user = user;
        this.levels = levels;
        this.storage = storage;
        this.xlevel = 1;
        this.xcurrent = 25;
        this.xtotal = 100;
        this.progress = 25;
        this.username = "test";
        this.rank = "Frail Body";
        this.weight = 0;
        this.height = 0;
        this.gym = "gym";
        this.location = "location";
        this.loop = 0;
        this.gains = 0;
        this.records = 0;
        this.competing = 0;
        this.competitors = 0;
        this.competingList = [];
        this.competitorsList = [];
        this.realCompetitorsList = [];
        this.show = true;
        this.load = true;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'Profile';
        this.subSettings = SettingsPage_1;
    }
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            profilePic: [''],
            option1: [this.options.option1],
            option2: [this.options.option2],
            option3: [this.options.option3]
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
            var pic = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + _this.username + '/profilePic');
            pic.set(_this.form.controls['profilePic'].value);
            console.log(group.profilePic);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.competitorsList = [];
        this.username = localStorage.getItem("username");
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.storage.get(this.username + '/gains').then(function (val) {
            _this.gains = 0;
            _this.records = 0;
            //console.log('Your json is', val);
            if (val) {
                val.forEach(function (value) {
                    _this.gains = _this.gains + value.gains;
                    if (value.gains == 10) {
                        _this.records++;
                    }
                });
            }
        }).then(function () {
            console.log(_this.gains);
            _this.setLevel();
        });
        var queryCompeting = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/' + this.username + '/competing');
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
        var queryCompetitors = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/' + this.username + '/competitors');
        queryCompetitors.once("value").then(function (snapshot) {
            _this.competitors = 0;
            _this.competitorsList = [];
            snapshot.forEach(function (childSnapshot) {
                _this.competitors++;
                var childData1 = childSnapshot.val();
                _this.competitorsList.push(childData1);
            });
        });
        var queryPic = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + this.username + '/profilePic');
        queryPic.once("value").then(function (snapshot) {
            var pic = snapshot.val();
            if (pic) {
                _this.form.patchValue({ 'profilePic': pic });
                _this.show = false;
            }
        });
        var queryWeight = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + this.username + '/weight');
        queryWeight.once("value").then(function (snapshot) {
            var weight = snapshot.val();
            if (weight) {
                _this.weight = weight;
            }
        });
        var queryHeight = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + this.username + '/height');
        queryHeight.once("value").then(function (snapshot) {
            var height = snapshot.val();
            if (height) {
                _this.height = height;
            }
        });
        var queryGym = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + this.username + '/gym');
        queryGym.once("value").then(function (snapshot) {
            var gym = snapshot.val();
            if (gym) {
                _this.gym = gym;
            }
        });
        var queryLocation = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + this.username + '/location');
        queryLocation.once("value").then(function (snapshot) {
            var location = snapshot.val();
            if (location) {
                _this.location = location;
            }
        });
    };
    SettingsPage.prototype.setLevel = function () {
        var _this = this;
        this.levels._levels.forEach(function (value, index) {
            if (_this.gains > value.totalPoints - 1) {
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
    SettingsPage.prototype.getPicture = function () {
        var _this = this;
        this.load = true;
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    SettingsPage.prototype.processWebImage = function (event) {
        var _this = this;
        //alert(event);
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            _this.imageData = readerEvent.target.result;
            _this.show = false;
            _this.form.patchValue({ 'profilePic': _this.imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    SettingsPage.prototype.getProfileImageStyle = function () {
        try {
            //this.noLoad();
            return 'url(' + this.form.controls['profilePic'].value + ')';
        }
        catch (err) {
        }
        finally {
        }
    };
    SettingsPage.prototype.noLoad = function () {
        this.load = false;
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.username = localStorage.getItem("username");
        this.ionViewDidLoad();
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SettingsPage.prototype.logOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout of ' + this.username + '?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.reallyLogOut();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.reallyLogOut = function () {
        localStorage.setItem("stay", "out");
        localStorage.setItem("email", "");
        window.location.reload();
        this.navCtrl.push("FirstRunPage");
    };
    SettingsPage.prototype.rules = function () {
        this.navCtrl.push('RulesPage');
    };
    SettingsPage.prototype.goToCompeting = function () {
        console.log(this.competingList);
        this.navCtrl.push('CompetingPage', {
            list: this.competingList
        });
    };
    SettingsPage.prototype.goToCompetitors = function () {
        var _this = this;
        this.realCompetitorsList = [];
        console.log(this.competitorsList);
        this.competitorsList.forEach(function (val) {
            _this.loop = 0;
            var queryPic = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users/' + val + '/profilePic');
            queryPic.once("value").then(function (snapshot) {
                var pic = snapshot.val();
                _this.realCompetitorsList.push({ name: val, profilePic: pic });
                _this.loop++;
                if (_this.loop == _this.competitorsList.length) {
                    _this.navCtrl.push('CompetitorsPage', {
                        list: _this.realCompetitorsList,
                        competing: _this.competingList
                    });
                }
            });
        });
    };
    SettingsPage.prototype.goToRecords = function () {
        this.navCtrl.push('RecordsPage');
    };
    SettingsPage.prototype.goToGains = function () {
        this.navCtrl.push('GainsPage');
    };
    SettingsPage.prototype.editProfile = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('EditProfilePage');
        addModal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        addModal.present();
    };
    return SettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], SettingsPage.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
], SettingsPage.prototype, "nav", void 0);
SettingsPage = SettingsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ username }}</ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="logOut()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="levels">\n\n      <h3>{{rank}} <span class="sick">{{xlevel}}</span> : <span class="sick">{{xcurrent}}</span> / <span class="sick">{{xtotal}}</span> GAINS</h3>\n\n    </div>\n\n    <div id="myProgress">\n\n    <div id="myBar" [ngStyle]="{\'width.%\' : progress}"></div>\n\n  </div>\n\n  <form [formGroup]="form" *ngIf="settingsReady" class="pic">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="show">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="!show"></div>\n\n    </div>\n\n  </form>\n\n  <div class="stats">\n\n    <table>\n\n      <tr>\n\n        <td>{{height}}ft</td>\n\n        <td>{{gym}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>{{weight}}lbs</td>\n\n        <td>{{location}}</td>\n\n      </tr>\n\n      <tr>\n\n        <th id="rules"><button on-click="rules()" ion-button type="button" color="primary" block>{{ "Rules" | translate }}</button></th>\n\n        <th id="edit"><button on-click="editProfile()" ion-button type="button" color="primary" block>{{ "Edit Profile" | translate }}</button></th>\n\n      <tr>\n\n        <th on-click="goToCompeting();">{{competing}}</th>\n\n        <th on-click="goToCompetitors();">{{competitors}}</th>\n\n      </tr>\n\n      <tr>\n\n        <td on-click="goToCompeting();">Competing</td>\n\n        <td on-click="goToCompetitors();">Competitors</td>\n\n      </tr>\n\n      <tr>\n\n        <th on-click="goToRecords();">{{records}}</th>\n\n        <th on-click="goToGains();">{{gains}}</th>\n\n      </tr>\n\n      <tr>\n\n        <td on-click="goToRecords();">Records</td>\n\n        <td on-click="goToGains();">Gains</td>\n\n      </tr>\n\n    </table>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Tommy\Desktop\Mom\drive_ionic\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["f" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["g" /* User */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["d" /* Levels */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=19.js.map