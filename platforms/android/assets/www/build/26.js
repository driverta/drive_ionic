webpackJsonp([26],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(903);
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

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers_user_providers_user__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SettingsPage = SettingsPage_1 = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, modalCtrl, alertCtrl, translate, camera, levels, storage, userService, domSanitizer, rec) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.camera = camera;
        this.levels = levels;
        this.storage = storage;
        this.userService = userService;
        this.domSanitizer = domSanitizer;
        this.rec = rec;
        this.xlevel = 1;
        this.xcurrent = 25;
        this.xtotal = 100;
        this.progress = 25;
        this.username = "test";
        this.rank = "Frail Body";
        this.weight = 0;
        this.height = "0";
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
        this.exercisesLength = 0;
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
        this.userData = this.userService.getUser();
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
            // console.log(group.profilePic);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.competitorsList = [];
        this.username = this.userService.getUser().username;
        this.userService.getOneUser(this.username).subscribe(function (data) {
            _this.weight = data.weight;
            _this.height = data.height;
            _this.gym = data.gym;
            _this.location = data.location;
            //this.gym = data.gym;
        });
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.userService.getTotalGains(this.userData.id).subscribe(function (totalGains) {
            console.log(totalGains);
            _this.gains = totalGains;
            _this.setLevel();
        });
        ;
        this.userService.getCompetingUsers(this.userData.id).subscribe(function (data) {
            _this.competingList = data;
            //console.log(this.competingList);
            _this.competing = _this.competingList.length;
        });
        this.userService.getCompetitors(this.userData.id).subscribe(function (data) {
            _this.competitorsList = data;
            console.log(_this.competitorsList);
            _this.competitors = _this.competitorsList.length;
        });
        this.userService.getProfilePic(this.userData.username).subscribe(function (data) {
            console.log(data);
            _this.form.patchValue({ "profilePic": "data:image/jpeg;base64," + data['_body'] });
            if (data['_body'] != "NahNigga") {
                _this.show = false;
            }
        });
        this.userService.getExercises().subscribe(function (exercises) {
            _this.exercisesLength = exercises.length;
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
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                alert("here");
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement;
            this.fileInput.nativeElement.click();
        }
    };
    SettingsPage.prototype.processWebImage = function (event) {
        var _this = this;
        //alert(event);
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            _this.imageData = readerEvent.target.result;
            console.log(_this.imageData);
            _this.userService.uploadProfilePic(_this.userData.username, _this.imageData).subscribe(function (data) {
                _this.show = false;
                _this.form.patchValue({ 'profilePic': _this.imageData });
            });
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
        this.navCtrl.push('CompetitorsPage', {
            list: this.competitorsList
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
            _this.userService.getOneUser(_this.username).subscribe(function (data) {
                _this.weight = data.weight;
                _this.height = data.height;
                _this.gym = data.gym;
                _this.location = data.location;
            });
        });
        addModal.present();
    };
    return SettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], SettingsPage.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Nav */])
], SettingsPage.prototype, "nav", void 0);
SettingsPage = SettingsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dromazmj/Documents/drive_ionic/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ username }}</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="levels">\n      <h3>{{rank}} <span class="sick">{{xlevel}}</span> : <span class="sick">{{xcurrent}}</span> / <span class="sick">{{xtotal}}</span> GAINS</h3>\n    </div>\n    <div id="myProgress">\n    <div id="myBar" [ngStyle]="{\'width.%\' : progress}"></div>\n  </div>\n  <form [formGroup]="form" *ngIf="settingsReady" class="pic">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="show">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="!show"></div>\n    </div>\n  </form>\n  <div class="stats">\n    <table>\n      <tr>\n        <td>{{height}}ft</td>\n        <td>{{gym}}</td>\n      </tr>\n      <tr>\n        <td>{{weight}}lbs</td>\n        <td>{{location}}</td>\n      </tr>\n      <tr>\n        <th id="rules"><button on-click="rules()" ion-button type="button" color="primary" block>{{ "Rules" | translate }}</button></th>\n        <th id="edit"><button on-click="editProfile()" ion-button type="button" color="primary" block>{{ "Edit Profile" | translate }}</button></th>\n      <tr>\n        <th on-click="goToCompeting();">{{competing}}</th>\n        <th on-click="goToCompetitors();">{{competitors}}</th>\n      </tr>\n      <tr>\n        <td on-click="goToCompeting();">Competing</td>\n        <td on-click="goToCompetitors();">Competitors</td>\n      </tr>\n      <tr>\n        <th on-click="goToRecords();">{{exercisesLength}}</th>\n        <th on-click="goToGains();">{{gains}}</th>\n      </tr>\n      <tr>\n        <td on-click="goToRecords();">Exercises</td>\n        <td on-click="goToGains();">Gains</td>\n      </tr>\n    </table>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/dromazmj/Documents/drive_ionic/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["f" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* Levels */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__providers_providers_user_providers_user__["a" /* ProvidersUserProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* Records */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=26.js.map