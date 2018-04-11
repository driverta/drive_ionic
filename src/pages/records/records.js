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
import { Storage } from '@ionic/storage';
var RecordsPage = /** @class */ (function () {
    function RecordsPage(navCtrl, navParams, storage, actShtCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.actShtCtrl = actShtCtrl;
        this.lifts = {};
        this.setlifts = {};
        this.filter = "All";
        this.username = localStorage.getItem("username");
    }
    RecordsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.username);
        this.getExercises().then(function (val) {
            _this.setlifts = val;
            _this.lifts = _this.setlifts;
        });
    };
    RecordsPage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    RecordsPage.prototype.openItem = function (item) {
        if (item.muscle == "Cardio") {
            this.navCtrl.push('RecordCardioDetailPage', {
                item: item
            });
        }
        else {
            this.navCtrl.push('RecordDetailPage', {
                item: item
            });
        }
    };
    RecordsPage.prototype.filterExercises = function () {
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
    RecordsPage.prototype.executeFilter = function () {
        var _this = this;
        this.lifts = {};
        //alert(this.lifts["Bench Press-Barbell"].name)
        Object.keys(this.setlifts).forEach(function (key, index) {
            if (_this.setlifts[key].muscle == _this.filter) {
                _this.lifts[key] = _this.setlifts[key];
            }
        });
    };
    RecordsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-records',
            templateUrl: 'records.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Storage,
            ActionSheetController])
    ], RecordsPage);
    return RecordsPage;
}());
export { RecordsPage };
//# sourceMappingURL=records.js.map