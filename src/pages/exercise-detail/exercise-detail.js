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
import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';
var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, navParams, items, records, user, levels, storage) {
        this.navCtrl = navCtrl;
        this.records = records;
        this.user = user;
        this.levels = levels;
        this.storage = storage;
        this.selectedValue = 0;
        this.segment = "set";
        this.loop = 0;
        this.checkRec = false;
        this.history = [];
        this.exercise = navParams.get('item');
    }
    ItemDetailPage.prototype.ionViewWillEnter = function () {
        this.records._records = [];
        this.records._chart = [];
        this.username = localStorage.getItem("username");
        this.getRecords();
    };
    ItemDetailPage.prototype.getRecords = function () {
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
        this.lineChart.makeChart2();
    };
    ItemDetailPage.prototype.showBar = function () {
        this.selectedValue = 1;
    };
    ItemDetailPage.prototype.showLine = function () {
        this.selectedValue = 2;
    };
    ItemDetailPage.prototype.hideCharts = function () {
        this.selectedValue = 0;
    };
    ItemDetailPage.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    __decorate([
        ViewChild(BarChartComponent),
        __metadata("design:type", BarChartComponent)
    ], ItemDetailPage.prototype, "barChart", void 0);
    __decorate([
        ViewChild(LineChartComponent),
        __metadata("design:type", LineChartComponent)
    ], ItemDetailPage.prototype, "lineChart", void 0);
    ItemDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-exercise-detail',
            templateUrl: 'exercise-detail.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Items,
            Records,
            User,
            Levels,
            Storage])
    ], ItemDetailPage);
    return ItemDetailPage;
}());
export { ItemDetailPage };
//# sourceMappingURL=exercise-detail.js.map