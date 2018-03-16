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
import { Records } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { CardioProfileBarComponent } from '../../components/cardio-profile-bar/cardio-profile-bar';
var RecordCardioDetailPage = /** @class */ (function () {
    function RecordCardioDetailPage(navCtrl, navParams, records, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = records;
        this.storage = storage;
        this.checkRec = false;
        this.tempRec = [];
        this.exercise = navParams.get('item');
    }
    RecordCardioDetailPage.prototype.ionViewWillEnter = function () {
        this.tempRec = this.records._cardio;
        this.records._cardioRecords = [];
        this.records._chart = [];
        this.username = localStorage.getItem("username");
        this.getRecords();
    };
    RecordCardioDetailPage.prototype.getRecords = function () {
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
    };
    RecordCardioDetailPage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    __decorate([
        ViewChild(CardioProfileBarComponent),
        __metadata("design:type", CardioProfileBarComponent)
    ], RecordCardioDetailPage.prototype, "cardioBar", void 0);
    RecordCardioDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-record-cardio-detail',
            templateUrl: 'record-cardio-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Records,
            Storage])
    ], RecordCardioDetailPage);
    return RecordCardioDetailPage;
}());
export { RecordCardioDetailPage };
//# sourceMappingURL=record-cardio-detail.js.map