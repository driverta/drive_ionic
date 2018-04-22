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
import { Records } from '../../providers/providers';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import { FriendCardioProfileBarComponent } from '../../components/friend-cardio-profile-bar/friend-cardio-profile-bar';
import { FriendCardioProfileRecordsComponent } from '../../components/friend-cardio-profile-records/friend-cardio-profile-records';
import firebase from 'firebase';
var FriendCardioRecordDetailPage = /** @class */ (function () {
    function FriendCardioRecordDetailPage(navCtrl, navParams, records, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = records;
        this.storage = storage;
        this.checkRec = false;
        this.tempRec = [];
        this.loop = 0;
        this.margin = { top: 20, right: 20, bottom: 80, left: 0 };
        this.history = [];
        this.exercise = navParams.get('item');
        this.username = navParams.get("username");
        this.width = 1000 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    FriendCardioRecordDetailPage.prototype.ionViewWillEnter = function () {
        this.tempRec = this.records._cardio;
        this.records._cardioRecords = [];
        this.records._cardioRecords = [];
        this.getRecords();
    };
    FriendCardioRecordDetailPage.prototype.getRecords = function () {
        var _this = this;
        var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
        queryHistory.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                _this.tempRec.forEach(function (value, index) {
                    if (childData1.minutes >= value.min && childData1.minutes < value.max) {
                        //alert("in")
                        if (childData1.mph > value.mph) {
                            _this.tempRec[index].miles = childData1.miles;
                            _this.tempRec[index].time = childData1.time;
                            _this.tempRec[index].mph = childData1.mph;
                            _this.tempRec[index].records++;
                        }
                    }
                });
                if (snapshot.numChildren() == _this.loop) {
                    _this.tempRec.forEach(function (value) {
                        if (value.records > 0) {
                            _this.records._cardioRecords.push(value);
                            console.log(_this.records._cardioRecords);
                            _this.sortRecords();
                        }
                    });
                }
            });
        });
        //this.barChart.makeChart();
        //this.recordsTable.makeTable();
    };
    FriendCardioRecordDetailPage.prototype.sortRecords = function () {
        this.records._cardioRecords.sort(function (a, b) {
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
    FriendCardioRecordDetailPage.prototype.setChart = function () {
        //d3.selectAll("svg > *").remove();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
    };
    FriendCardioRecordDetailPage.prototype.initSvg = function () {
        this.svg = d3.select("#barCardio")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 900 500');
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    FriendCardioRecordDetailPage.prototype.initAxis = function () {
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(this.records._cardioRecords.map(function (d) { return d.max; }));
        this.y.domain([0, d3Array.max(this.records._cardioRecords, function (d) { return d.mph; })]);
    };
    FriendCardioRecordDetailPage.prototype.drawAxis = function () {
        this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x))
            .append("text")
            .attr("class", "axis-title")
            .attr("y", 70)
            .attr("x", this.width / 2)
            .attr("text-anchor", "end")
            .text("Max Minutes");
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
            .text("MPH");
    };
    FriendCardioRecordDetailPage.prototype.drawBars = function () {
        var _this = this;
        this.g.selectAll(".bar")
            .data(this.records._cardioRecords)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return _this.x(d.max); })
            .attr("y", function (d) { return _this.y(d.mph); })
            .attr("width", this.x.bandwidth())
            .attr("height", function (d) { return _this.height - _this.y(d.mph); });
    };
    __decorate([
        ViewChild(FriendCardioProfileBarComponent),
        __metadata("design:type", FriendCardioProfileBarComponent)
    ], FriendCardioRecordDetailPage.prototype, "barChart", void 0);
    __decorate([
        ViewChild(FriendCardioProfileRecordsComponent),
        __metadata("design:type", FriendCardioProfileRecordsComponent)
    ], FriendCardioRecordDetailPage.prototype, "recordsTable", void 0);
    FriendCardioRecordDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-friend-cardio-record-detail',
            templateUrl: 'friend-cardio-record-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Records,
            Storage])
    ], FriendCardioRecordDetailPage);
    return FriendCardioRecordDetailPage;
}());
export { FriendCardioRecordDetailPage };
//# sourceMappingURL=friend-cardio-record-detail.js.map