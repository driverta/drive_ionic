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
import firebase from 'firebase';
var AddCompetitorsPage = /** @class */ (function () {
    function AddCompetitorsPage(alertCtrl, navCtrl, navParams, user) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.currentItems = [];
        this.users = [];
        this.players = [];
        this.loop = 0;
    }
    AddCompetitorsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.users = [];
        this.username = this.user._user;
        var query1 = firebase.database().ref("/users");
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                _this.users.push(childData1);
                //alert(this.user._user);      
            });
        });
    };
    AddCompetitorsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.users.filter(function (v) {
            if (v.name && val) {
                if (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AddCompetitorsPage.prototype.addToLeaderboard = function (item) {
        var _this = this;
        var check = true;
        this.users.forEach(function (value) {
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
    AddCompetitorsPage.prototype.alreadyCompeting = function () {
        var alert = this.alertCtrl.create({
            title: 'You are already Cometing with this player!',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddCompetitorsPage.prototype.playerAdded = function () {
        var alert = this.alertCtrl.create({
            title: 'Player added to your leaderboard!',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddCompetitorsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [AlertController, NavController, NavParams, User])
    ], AddCompetitorsPage);
    return AddCompetitorsPage;
}());
export { AddCompetitorsPage };
//# sourceMappingURL=search.js.map