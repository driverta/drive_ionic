var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HistoryProvider } from '../../providers/providers';
import { User } from '../../providers/providers';
import * as d3 from 'd3-selection';
var CardioHistoryComponent = /** @class */ (function () {
    function CardioHistoryComponent(navParams, user, history, alertCtrl, storage) {
        this.user = user;
        this.history = history;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.totalGains = [];
        this.myEvent2 = new EventEmitter();
        this.exercise = navParams.get('item');
    }
    CardioHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = localStorage.getItem("username");
        this.history._cardio = [];
        this.getExercises().then(function (val) {
            var keyOne = _this.exercise.name + '-' + _this.exercise.variation;
            var history = val[keyOne].history;
            //console.log(val[keyOne].history);
            if (history) {
                Object.keys(history).forEach(function (keyTwo) {
                    var workout = { date: history[keyTwo].date, miles: history[keyTwo].miles, time: history[keyTwo].time, mph: history[keyTwo].mph };
                    _this.history._cardio.push(workout);
                });
            }
        });
    };
    CardioHistoryComponent.prototype.presentConfirm = function (x) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete?',
            message: 'Do you want to delete this workout (' + x.miles + ' miles in ' + x.time + ') and loose these gains?',
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
    CardioHistoryComponent.prototype.deleteSet = function (x) {
        var _this = this;
        d3.selectAll("svg > *").remove();
        this.username = localStorage.getItem("username");
        this.history._cardio.forEach(function (val, index) {
            if (val.date == x.date) {
                _this.history._cardio.splice(index, 1);
                _this.getExercises().then(function (val) {
                    var key = _this.exercise.name + '-' + _this.exercise.variation;
                    val[key].history = _this.history._cardio;
                    _this.storage.set(_this.username + '/exercises', val).then(function () {
                        _this.ngOnInit();
                        _this.myEvent2.emit(null);
                    });
                });
                _this.getGains().then(function (gains) {
                    _this.totalGains = gains;
                    _this.totalGains.forEach(function (set, index2) {
                        if (val.date == set.date) {
                            _this.totalGains.splice(index2, 1);
                            _this.storage.set(_this.username + '/gains', _this.totalGains).then(function () {
                                _this.ngOnInit();
                            });
                        }
                    });
                });
            }
        });
    };
    CardioHistoryComponent.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    CardioHistoryComponent.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CardioHistoryComponent.prototype, "myEvent2", void 0);
    CardioHistoryComponent = __decorate([
        Component({
            selector: 'cardio-history',
            templateUrl: 'cardio-history.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            User,
            HistoryProvider,
            AlertController,
            Storage])
    ], CardioHistoryComponent);
    return CardioHistoryComponent;
}());
export { CardioHistoryComponent };
//# sourceMappingURL=cardio-history.js.map