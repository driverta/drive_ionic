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
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { Records } from '../../providers/providers';
import * as d3 from 'd3-selection';
var NewCardioComponent = /** @class */ (function () {
    function NewCardioComponent(navCtrl, navParams, user, levels, records, storage) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.levels = levels;
        this.records = records;
        this.storage = storage;
        this.xlevel = 1;
        this.xcurrent = 0;
        this.xtotal = 0;
        this.progress = 0;
        this.loop = 0;
        this.gains = 0;
        this.g = 0;
        this.miles = 2.5;
        this.hours = 0;
        this.minutes = 25;
        this.seconds = 0;
        this.bool = false;
        this.points = false;
        this.checkRec = false;
        this.history = [];
        this.totalGains = [];
        this.myEvent = new EventEmitter();
        this.exercise = navParams.get('item');
    }
    NewCardioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = localStorage.getItem("username");
        //alert(this.username);
        this.gains = 0;
        this.getGains().then(function (val) {
            //console.log('Your json is', val);
            val.forEach(function (value) {
                _this.gains = _this.gains + value.gains;
            });
        }).then(function () {
            _this.setLevel();
        });
    };
    NewCardioComponent.prototype.setLevel = function () {
        var _this = this;
        this.levels._levels.forEach(function (value, index) {
            if (_this.gains > value.totalPoints - 1) {
                _this.xcurrent = _this.gains - value.totalPoints;
                _this.xlevel = value.level;
                _this.xtotal = value.levelPoints;
                _this.progress = _this.xcurrent / _this.xtotal * 100;
            }
        });
    };
    NewCardioComponent.prototype.addSet = function () {
        var _this = this;
        d3.selectAll("svg > *").remove();
        var date = new Date().toISOString();
        var newDate = date.replace(".", "-");
        var time = this.hours + ":" + this.minutes + ":" + this.seconds;
        var newMinutes = this.minutes / 60;
        var newSeconds = this.seconds / 360;
        var totalHours = this.hours + newMinutes + newSeconds;
        var mph = this.miles / totalHours;
        var newHours = this.hours * 60;
        var minSec = this.seconds / 60;
        var recordTime = this.minutes + newHours + minSec;
        var minTime = this.minutes + newHours;
        this.g = minTime;
        this.bool = false;
        this.points = true;
        this.checkRec = false;
        setTimeout(function () {
            _this.bool = false;
            _this.points = false;
        }, 2000);
        var workout = { date: date, time: time, miles: this.miles, mph: mph, minutes: recordTime };
        this.getExercises().then(function (val) {
            //console.log('Your json is', val);
            var key = _this.exercise.name + '-' + _this.exercise.variation;
            var history = val[key].history;
            if (!history) {
                val[key].history = {};
                _this.storage.set(_this.username + '/exercises', val);
            }
        }).then(function () {
            _this.getExercises().then(function (val) {
                var key = _this.exercise.name + '-' + _this.exercise.variation;
                var history = val[key].history;
                if (Array.isArray(history)) {
                    val[key].history.push(workout);
                }
                else {
                    val[key].history[newDate] = workout;
                }
                _this.storage.set(_this.username + '/exercises', val).then(function () {
                    Object.keys(history).forEach(function (workout) {
                        _this.records._cardio.forEach(function (value, index) {
                            if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
                                if (history[workout].mph > value.mph) {
                                    _this.records._cardio[index].miles = history[workout].miles;
                                    _this.records._cardio[index].time = history[workout].time;
                                    _this.records._cardio[index].mph = history[workout].mph;
                                    _this.records._cardio[index].records++;
                                    _this.g = minTime + 100;
                                    _this.bool = true;
                                }
                            }
                        });
                    });
                }).then(function () {
                    _this.myEvent.emit(null);
                    var g = { date: date, gains: _this.g, muscle: _this.exercise.muscle, exercise: _this.exercise.name + '/' + _this.exercise.variation };
                    _this.getGains().then(function (val) {
                        //console.log('Your json is', val);
                        _this.totalGains = val;
                        _this.totalGains.push(g);
                        _this.storage.set(_this.username + '/gains', _this.totalGains).then(function () {
                            _this.ngOnInit();
                        });
                    });
                });
            });
        });
    };
    NewCardioComponent.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    NewCardioComponent.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NewCardioComponent.prototype, "myEvent", void 0);
    NewCardioComponent = __decorate([
        Component({
            selector: 'new-cardio',
            templateUrl: 'new-cardio.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            User,
            Levels,
            Records,
            Storage])
    ], NewCardioComponent);
    return NewCardioComponent;
}());
export { NewCardioComponent };
//# sourceMappingURL=new-cardio.js.map