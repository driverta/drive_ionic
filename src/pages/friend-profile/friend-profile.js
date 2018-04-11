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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Levels } from '../../providers/providers';
import firebase from 'firebase';
var FriendProfilePage = /** @class */ (function () {
    function FriendProfilePage(navCtrl, navParams, levels) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.levels = levels;
        this.rank = "Frail Body";
        this.weight = 195;
        this.height = 6.1;
        this.gym = "xSport";
        this.location = "Fairfax";
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
        this.user = navParams.get('item');
        this.username = this.user.name;
    }
    FriendProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var queryGains = firebase.database().ref('/' + this.username + '/gains');
        queryGains.once("value").then(function (snapshot) {
            _this.loop = 0;
            _this.gains = 0;
            _this.records = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                var gains = childData1.gains;
                _this.gains = _this.gains + gains;
                if (gains == 10) {
                    _this.records++;
                }
                if (snapshot.numChildren() == _this.loop)
                    _this.setLevel();
            });
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
                        competing: _this.competingList,
                    });
                }
            });
        });
    };
    FriendProfilePage.prototype.goToRecords = function () {
        this.navCtrl.push('FriendRecordsPage', {
            username: this.username
        });
    };
    FriendProfilePage.prototype.goToGains = function () {
        this.navCtrl.push('FriendGainsPage', {
            username: this.username
        });
    };
    FriendProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-friend-profile',
            templateUrl: 'friend-profile.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Levels])
    ], FriendProfilePage);
    return FriendProfilePage;
}());
export { FriendProfilePage };
//# sourceMappingURL=friend-profile.js.map