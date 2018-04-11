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
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import firebase from 'firebase';
var FriendRecordsPage = /** @class */ (function () {
    function FriendRecordsPage(navCtrl, navParams, actShtCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actShtCtrl = actShtCtrl;
        this.lifts = {};
        this.setlifts = {};
        this.filter = "All";
        this.username = navParams.get("username");
    }
    FriendRecordsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var query1 = firebase.database().ref('/' + this.username + '/exercises');
        query1.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData1 = childSnapshot.val();
                var key = childSnapshot.key;
                _this.setlifts[key] = childData1;
                _this.lifts = _this.setlifts;
            });
        });
    };
    FriendRecordsPage.prototype.openItem = function (item) {
        if (item.muscle == "Cardio") {
            this.navCtrl.push('FriendCardioRecordDetailPage', {
                item: item,
                username: this.username
            });
        }
        else {
            this.navCtrl.push('FriendRecordDetailPage', {
                item: item,
                username: this.username
            });
        }
    };
    FriendRecordsPage.prototype.filterExercises = function () {
        var _this = this;
        var actionSheet = this.actShtCtrl.create({
            title: 'Filter Exercises By Muscle Group',
            buttons: [
                {
                    text: 'All',
                    handler: function () {
                        _this.lifts = _this.setlifts;
                    }
                }, {
                    text: 'Chest',
                    handler: function () {
                        _this.filter = "Chest";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Back',
                    handler: function () {
                        _this.filter = "Back";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Legs',
                    handler: function () {
                        _this.filter = "Legs";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Core',
                    handler: function () {
                        _this.filter = "Core";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Shoulders',
                    handler: function () {
                        _this.filter = "Shoulders";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Arms',
                    handler: function () {
                        _this.filter = "Arms";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Cardio',
                    handler: function () {
                        _this.filter = "Cardio";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Other',
                    handler: function () {
                        _this.filter = "Other";
                        _this.executeFilter();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FriendRecordsPage.prototype.executeFilter = function () {
        var _this = this;
        this.lifts = {};
        //alert(this.lifts["Bench Press-Barbell"].name)
        Object.keys(this.setlifts).forEach(function (key, index) {
            if (_this.setlifts[key].muscle == _this.filter) {
                _this.lifts[key] = _this.setlifts[key];
            }
        });
    };
    FriendRecordsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-friend-records',
            templateUrl: 'friend-records.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ActionSheetController])
    ], FriendRecordsPage);
    return FriendRecordsPage;
}());
export { FriendRecordsPage };
//# sourceMappingURL=friend-records.js.map