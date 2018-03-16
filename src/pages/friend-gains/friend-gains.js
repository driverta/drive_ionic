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
import firebase from 'firebase';
var FriendGainsPage = /** @class */ (function () {
    function FriendGainsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gains = 0;
        this.allTime = 0;
        this.month = 0;
        this.week = 0;
        this.today = 0;
        this.username = navParams.get("username");
    }
    FriendGainsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //alert(this.username)
        var todaysDate = new Date().toISOString().slice(0, 10);
        var lastWeek = new Date();
        var lastMonth = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        lastMonth.setDate(lastMonth.getDate() - 30);
        this.allTime = 0;
        this.month = 0;
        this.week = 0;
        this.today = 0;
        var queryGains = firebase.database().ref('/' + this.username + '/gains');
        queryGains.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                var gains = childData1.gains;
                var newDate = childData1.date.slice(0, 10);
                var testDate = new Date(newDate);
                _this.allTime = _this.allTime + gains;
                if (testDate > lastMonth) {
                    _this.month = _this.month + gains;
                }
                if (testDate > lastWeek) {
                    _this.week = _this.week + gains;
                }
                if (newDate == todaysDate) {
                    _this.today = _this.today + gains;
                }
            });
        });
    };
    FriendGainsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-friend-gains',
            templateUrl: 'friend-gains.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FriendGainsPage);
    return FriendGainsPage;
}());
export { FriendGainsPage };
//# sourceMappingURL=friend-gains.js.map