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
import { ProfileBarComponent } from '../../components/profile-bar/profile-bar';
var RecordDetailPage = /** @class */ (function () {
    function RecordDetailPage(navCtrl, navParams, records, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = records;
        this.storage = storage;
        this.checkRec = false;
        this.exercise = navParams.get('item');
    }
    RecordDetailPage.prototype.ionViewWillEnter = function () {
        this.records._records = [];
        this.records._chart = [];
        this.username = localStorage.getItem("username");
        this.getRecords();
    };
    RecordDetailPage.prototype.getRecords = function () {
        var _this = this;
        this.getExercises().then(function (val) {
            var keyOne = _this.exercise.name + '-' + _this.exercise.variation;
            var history = val[keyOne].history;
            //console.log(val[keyOne].history);
            if (history) {
                Object.keys(history).forEach(function (set) {
                    _this.checkRec = false;
                    _this.records._records.forEach(function (value, index) {
                        if (history[set].reps == value.reps) {
                            _this.checkRec = true;
                            if (history[set].weight > value.weight) {
                                _this.records._records[index].weight = history[set].weight;
                                _this.records._records[index].oneRM = history[set].oneRM;
                                _this.records._records[index].records++;
                            }
                        }
                    });
                    if (_this.checkRec == false) {
                        _this.records._records.push({ reps: history[set].reps, weight: history[set].weight, oneRM: history[set].oneRM, records: 1 });
                    }
                });
            }
        });
        this.barChart.makeChart();
    };
    RecordDetailPage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    __decorate([
        ViewChild(ProfileBarComponent),
        __metadata("design:type", ProfileBarComponent)
    ], RecordDetailPage.prototype, "barChart", void 0);
    RecordDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-record-detail',
            templateUrl: 'record-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Records,
            Storage])
    ], RecordDetailPage);
    return RecordDetailPage;
}());
export { RecordDetailPage };
//# sourceMappingURL=record-detail.js.map