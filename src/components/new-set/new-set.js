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
var NewSetComponent = /** @class */ (function () {
    function NewSetComponent(navCtrl, navParams, user, levels, records, storage) {
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
        this.weight = 100;
        this.reps = 10;
        this.bool = false;
        this.points = false;
        this.checkRec = false;
        this.history = [];
        this.totalGains = [];
        this.myEvent = new EventEmitter();
        this.exercise = navParams.get('item');
    }
    NewSetComponent.prototype.ngOnInit = function () {
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
    NewSetComponent.prototype.setLevel = function () {
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
    NewSetComponent.prototype.addSet = function () {
        var _this = this;
        d3.selectAll("svg > *").remove();
        var date = new Date().toISOString();
        var newDate = date.replace(".", "-");
        //alert(newDate)
        var oneRM = (this.weight * this.reps * .033) + this.weight;
        if (this.reps == 1) {
            oneRM = this.weight;
        }
        this.g = 5;
        this.bool = false;
        this.points = true;
        this.checkRec = false;
        setTimeout(function () {
            _this.bool = false;
            _this.points = false;
        }, 2000);
        var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM };
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
                    val[key].history.push(set);
                }
                else {
                    val[key].history[newDate] = set;
                }
                _this.storage.set(_this.username + '/exercises', val).then(function () {
                    Object.keys(history).forEach(function (set) {
                        _this.checkRec = false;
                        _this.records._records.forEach(function (value, index) {
                            if (history[set].reps == value.reps) {
                                _this.checkRec = true;
                                if (history[set].weight > value.weight) {
                                    _this.records._records[index].weight = history[set].weight;
                                    _this.records._records[index].oneRM = history[set].oneRM;
                                    _this.records._records[index].records++;
                                    _this.g = 10;
                                    _this.bool = true;
                                }
                            }
                        });
                        if (_this.checkRec == false) {
                            _this.records._records.push({ reps: history[set].reps, weight: history[set].weight, oneRM: history[set].oneRM, records: 1 });
                            _this.g = 10;
                            _this.bool = true;
                        }
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
    NewSetComponent.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    NewSetComponent.prototype.getGains = function () {
        return this.storage.get(this.username + '/gains');
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NewSetComponent.prototype, "myEvent", void 0);
    NewSetComponent = __decorate([
        Component({
            selector: 'new-set',
            templateUrl: 'new-set.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            User,
            Levels,
            Records,
            Storage])
    ], NewSetComponent);
    return NewSetComponent;
}());
export { NewSetComponent };
//# sourceMappingURL=new-set.js.map