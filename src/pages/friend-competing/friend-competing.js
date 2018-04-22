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
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
var FriendCompetingPage = /** @class */ (function () {
    function FriendCompetingPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.list = [];
        this.list = navParams.get('list');
        this.username = localStorage.getItem("username");
    }
    FriendCompetingPage.prototype.ionViewDidLoad = function () {
        console.log(this.list);
    };
    FriendCompetingPage.prototype.openItem = function (item) {
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    FriendCompetingPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        var check = true;
        this.list.forEach(function (value) {
            if (value.name == item.name) {
                _this.alreadyCompeting();
                check = false;
            }
        });
        if (check) {
            var competing = firebase.database().ref('/' + this.username + '/competing');
            competing.child(item.name).set(item);
            var competitors = firebase.database().ref('/' + item.name + '/competitors');
            competitors.child(this.username).set(this.username);
            this.playerAdded();
        }
    };
    FriendCompetingPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    FriendCompetingPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    FriendCompetingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-friend-competing',
            templateUrl: 'friend-competing.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], FriendCompetingPage);
    return FriendCompetingPage;
}());
export { FriendCompetingPage };
//# sourceMappingURL=friend-competing.js.map