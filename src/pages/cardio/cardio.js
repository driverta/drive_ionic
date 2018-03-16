var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { CardioBarComponent } from '../../components/cardio-bar/cardio-bar';
import { CardioLineComponent } from '../../components/cardio-line/cardio-line';
var CardioPage = /** @class */ (function () {
    function CardioPage(navCtrl, navParams, items, records, user, levels, storage) {
        this.navCtrl = navCtrl;
        this.records = records;
        this.user = user;
        this.levels = levels;
        this.storage = storage;
        this.selectedValue = 0;
        this.segment = "workout";
        this.loop = 0;
        this.checkRec = false;
        this.history = [];
        this.tempRec = [];
        this.exercise = navParams.get('item');
    }
    CardioPage.prototype.ionViewWillEnter = function () {
        this.tempRec = this.records._cardio;
        this.records._cardioRecords = [];
        this.records._chart = [];
        this.username = localStorage.getItem("username");
        this.getRecords();
    };
    CardioPage.prototype.getRecords = function () {
        var _this = this;
        this.getExercises().then(function (val) {
            var keyOne = _this.exercise.name + '-' + _this.exercise.variation;
            var history = val[keyOne].history;
            //console.log(val[keyOne].history);
            if (history) {
                Object.keys(history).forEach(function (workout) {
                    //alert(history[workout].minutes)
                    _this.tempRec.forEach(function (value, index) {
                        if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
                            //alert("in")
                            if (history[workout].mph > value.mph) {
                                _this.tempRec[index].miles = history[workout].miles;
                                _this.tempRec[index].time = history[workout].time;
                                _this.tempRec[index].mph = history[workout].mph;
                                _this.tempRec[index].records++;
                            }
                        }
                    });
                });
            }
        }).then(function () {
            _this.tempRec.forEach(function (value) {
                if (value.records > 0) {
                    //alert(value.records)
                    _this.records._cardioRecords.push(value);
                }
            });
            //console.log(this.records._cardioRecords)  
        });
        this.cardioBar.makeChart();
        this.cardioLine.makeChart2();
    };
    CardioPage.prototype.showBar = function () {
        this.selectedValue = 1;
    };
    CardioPage.prototype.showLine = function () {
        this.selectedValue = 2;
    };
    CardioPage.prototype.hideCharts = function () {
        this.selectedValue = 0;
    };
    CardioPage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    __decorate([
        ViewChild(CardioBarComponent),
        __metadata("design:type", CardioBarComponent)
    ], CardioPage.prototype, "cardioBar", void 0);
    __decorate([
        ViewChild(CardioLineComponent),
        __metadata("design:type", CardioLineComponent)
    ], CardioPage.prototype, "cardioLine", void 0);
    CardioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cardio',
            templateUrl: 'cardio.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Items,
            Records,
            User,
            Levels,
            Storage])
    ], CardioPage);
    return CardioPage;
}());
export { CardioPage };
//# sourceMappingURL=cardio.js.map