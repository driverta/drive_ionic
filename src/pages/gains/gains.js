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
import { Storage } from '@ionic/storage';
var GainsPage = /** @class */ (function () {
    function GainsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gains = 0;
        this.allTime = 0;
        this.month = 0;
        this.week = 0;
        this.today = 0;
        this.username = localStorage.getItem("username");
    }
    GainsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var todaysDate = new Date().toISOString().slice(0, 10);
        var lastWeek = new Date();
        var lastMonth = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        lastMonth.setDate(lastMonth.getDate() - 30);
        this.allTime = 0;
        this.month = 0;
        this.week = 0;
        this.today = 0;
        this.getGains().then(function (val) {
            val.forEach(function (set) {
                var newDate = set.date.slice(0, 10);
                var testDate = new Date(newDate);
                _this.allTime = _this.allTime + set.gains;
                if (testDate > lastMonth) {
                    _this.month = _this.month + set.gains;
                }
                if (testDate > lastWeek) {
                    _this.week = _this.week + set.gains;
                }
                if (newDate == todaysDate) {
                    _this.today = _this.today + set.gains;
                }
            });
        });
    };
    GainsPage.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    GainsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-gains',
            templateUrl: 'gains.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Storage])
    ], GainsPage);
    return GainsPage;
}());
export { GainsPage };
//# sourceMappingURL=gains.js.map