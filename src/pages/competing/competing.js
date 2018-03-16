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
var CompetingPage = /** @class */ (function () {
    function CompetingPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.list = [];
        this.list = navParams.get('list');
        this.username = localStorage.getItem("username");
    }
    CompetingPage.prototype.ionViewDidLoad = function () {
        console.log(this.list);
    };
    CompetingPage.prototype.openItem = function (item) {
        this.navCtrl.push('FriendProfilePage', {
            item: item
        });
    };
    CompetingPage.prototype.presentConfirm = function (x) {
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
    CompetingPage.prototype.deleteSet = function (x) {
        var _this = this;
        var set = x;
        var query1 = firebase.database().ref('/' + this.username + '/competing');
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                if (x.name == childData1.name) {
                    childSnapshot.getRef().remove().then(function () {
                        console.log('Write succeeded!');
                        _this.list.forEach(function (val, index) {
                            if (val.name == childData1.name) {
                                _this.list.splice(index, 1);
                                _this.ionViewDidLoad();
                            }
                        });
                    });
                }
            });
        });
    };
    CompetingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-competing',
            templateUrl: 'competing.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], CompetingPage);
    return CompetingPage;
}());
export { CompetingPage };
//# sourceMappingURL=competing.js.map