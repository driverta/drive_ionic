var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, Nav, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { Settings } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
//import { WelcomePage } from '../pages';
import firebase from 'firebase';
var SettingsPage = /** @class */ (function () {
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
    SettingsPage_1 = SettingsPage;
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
            var pic = firebase.database().ref('/users/' + _this.username + '/profilePic');
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
        var queryCompeting = firebase.database().ref('/' + this.username + '/competing');
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
        var queryCompetitors = firebase.database().ref('/' + this.username + '/competitors');
        queryCompetitors.once("value").then(function (snapshot) {
            _this.competitors = 0;
            _this.competitorsList = [];
            snapshot.forEach(function (childSnapshot) {
                _this.competitors++;
                var childData1 = childSnapshot.val();
                _this.competitorsList.push(childData1);
            });
        });
        var queryPic = firebase.database().ref('/users/' + this.username + '/profilePic');
        queryPic.once("value").then(function (snapshot) {
            var pic = snapshot.val();
            if (pic) {
                _this.form.patchValue({ 'profilePic': pic });
                _this.show = false;
            }
            //alert(this.form.controls['profilePic'].value)
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
        if (Camera['installed']()) {
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
            var queryPic = firebase.database().ref('/users/' + val + '/profilePic');
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
    __decorate([
        ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "fileInput", void 0);
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], SettingsPage.prototype, "nav", void 0);
    SettingsPage = SettingsPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Settings,
            FormBuilder,
            NavParams,
            ModalController,
            AlertController,
            TranslateService,
            Camera,
            User,
            Levels,
            Storage])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());
export { SettingsPage };
//# sourceMappingURL=profile.js.map