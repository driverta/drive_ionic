var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import firebase from 'firebase';
var SearchPage = /** @class */ (function () {
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
        this.players = [
            { name: "tom", level: 3, gains: 100, profilePic: "" }
        ];
    }
    SearchPage.prototype.addCompetitors = function () {
        this.navCtrl.push('AddCompetitorsPage');
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.username = this.user._user;
        this.players = [];
        this.timeFilter = "All Time";
        var queryPlayers = firebase.database().ref('/' + this.username + '/competing');
        queryPlayers.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                var data = { name: childData1.name, level: 0, gains: 0, profilePic: "" };
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
            var queryGains = firebase.database().ref('/' + value.name + '/gains');
            queryGains.once("value").then(function (snapshot) {
                _this.loop = 0;
                _this.gains = 0;
                snapshot.forEach(function (childSnapshot) {
                    _this.loop++;
                    var childData1 = childSnapshot.val();
                    var gains = childData1.gains;
                    _this.gains = _this.gains + gains;
                    if (snapshot.numChildren() == _this.loop) {
                        value.gains = _this.gains;
                        _this.setLevel(_this.gains, index);
                    }
                });
            });
        });
    };
    SearchPage.prototype.getPic = function () {
        this.players.forEach(function (value) {
            var queryGains = firebase.database().ref('/users');
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
        var xlevel = this.players[i].level;
        this.levels._levels.forEach(function (value) {
            if (gains > value.totalPoints) {
                _this.players[i].level = value.level;
            }
            if (xlevel < 10) {
                _this.rank = "Frail Body";
            }
            else if (xlevel >= 10 && xlevel < 20) {
                _this.rank = "Gym Rat";
            }
            else if (xlevel >= 20 && xlevel < 30) {
                _this.rank = "Bodybuilder";
            }
            else if (xlevel > 30) {
                _this.rank = "Olympian";
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
        if (ev == "All Time") {
            this.ionViewWillEnter();
        }
        else {
            this.players.forEach(function (value, index) {
                var queryGains = firebase.database().ref('/' + value.name + '/gains');
                queryGains.once("value").then(function (snapshot) {
                    _this.loop = 0;
                    _this.gains = 0;
                    snapshot.forEach(function (childSnapshot) {
                        _this.loop++;
                        var childData1 = childSnapshot.val();
                        var gains = childData1.gains;
                        var date = childData1.date;
                        var newDate = date.slice(0, 10);
                        //alert(newDate);
                        var testDate = new Date(newDate);
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
                        if (snapshot.numChildren() == _this.loop) {
                            value.gains = _this.gains;
                        }
                    });
                });
            });
        }
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
        var query1 = firebase.database().ref('/' + this.username + '/competing');
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
    SearchPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-leaderboard',
            templateUrl: 'leaderboard.html'
        }),
        __metadata("design:paramtypes", [AlertController, User, Levels, NavController, NavParams])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=leaderboard.js.map