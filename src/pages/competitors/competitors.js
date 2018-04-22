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
var CompetitorsPage = /** @class */ (function () {
    function CompetitorsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.list = [];
        this.competing = [];
        this.list = navParams.get('list');
        this.competing = navParams.get('competing');
        this.username = localStorage.getItem("username");
    }
    CompetitorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompetitorsPage');
    };
    CompetitorsPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        var check = true;
        this.competing.forEach(function (value) {
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
    CompetitorsPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    CompetitorsPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    CompetitorsPage.prototype.openItem = function (item) {
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    CompetitorsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-competitors',
            templateUrl: 'competitors.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], CompetitorsPage);
    return CompetitorsPage;
}());
export { CompetitorsPage };
//# sourceMappingURL=competitors.js.map