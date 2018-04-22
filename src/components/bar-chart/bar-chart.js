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
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent(navParams, navCtrl, user, records, storage) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.records = records;
        this.storage = storage;
        this.margin = { top: 20, right: 20, bottom: 80, left: 0 };
        this.loop = 0;
        this.checkRec = false;
        this.history = [];
        this.width = 1000 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.exercise = navParams.get('item');
    }
    BarChartComponent.prototype.makeChart = function () {
        var _this = this;
        this.username = localStorage.getItem("username");
        this.getExercises().then(function (val) {
            var keyOne = _this.exercise.name + '-' + _this.exercise.variation;
            var history = val[keyOne].history;
            _this.loop = 0;
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
                    if (_this.loop == _this.history.length) {
                        _this.sortRecords();
                    }
                });
            }
        });
    };
    BarChartComponent.prototype.sortRecords = function () {
        this.records._records.sort(function (a, b) {
            if (a.reps < b.reps) {
                return -1;
            }
            else if (a.reps > b.reps) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.setChart();
    };
    BarChartComponent.prototype.setChart = function () {
        //d3.selectAll("svg > *").remove();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
    };
    BarChartComponent.prototype.initSvg = function () {
        this.svg = d3.select("#barChart")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 900 500');
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    BarChartComponent.prototype.initAxis = function () {
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(this.records._records.map(function (d) { return d.reps; }));
        this.y.domain([0, d3Array.max(this.records._records, function (d) { return d.oneRM; })]);
    };
    BarChartComponent.prototype.drawAxis = function () {
        this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x))
            .append("text")
            .attr("class", "axis-title")
            .attr("y", 70)
            .attr("x", this.width / 2)
            .attr("text-anchor", "end")
            .text("Reps");
        this.g.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", -90)
            .attr("x", (this.height / -2) + 20)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("1RM");
    };
    BarChartComponent.prototype.drawBars = function () {
        var _this = this;
        this.g.selectAll(".bar")
            .data(this.records._records)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return _this.x(d.reps); })
            .attr("y", function (d) { return _this.y(d.oneRM); })
            .attr("width", this.x.bandwidth())
            .attr("height", function (d) { return _this.height - _this.y(d.oneRM); });
    };
    BarChartComponent.prototype.getExercises = function () {
        return this.storage.get(this.username + '/exercises');
    };
    BarChartComponent = __decorate([
        Component({
            selector: 'bar-chart',
            templateUrl: 'bar-chart.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            NavController,
            User,
            Records,
            Storage])
    ], BarChartComponent);
    return BarChartComponent;
}());
export { BarChartComponent };
//# sourceMappingURL=bar-chart.js.map