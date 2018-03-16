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
import firebase from 'firebase';
var FriendCardioProfileBarComponent = /** @class */ (function () {
    function FriendCardioProfileBarComponent(navParams, navCtrl, user, records, storage) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.records = records;
        this.storage = storage;
        this.margin = { top: 20, right: 20, bottom: 80, left: 0 };
        this.loop = 0;
        this.checkRec = false;
        this.history = [];
        this.tempRec = [];
        this.width = 1000 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.exercise = navParams.get('item');
        this.username = navParams.get("username");
        this.tempRec = this.records._cardio;
    }
    FriendCardioProfileBarComponent.prototype.makeChart = function () {
        var _this = this;
        var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
        queryHistory.once("value").then(function (snapshot) {
            _this.loop = 0;
            snapshot.forEach(function (childSnapshot) {
                _this.loop++;
                var childData1 = childSnapshot.val();
                //alert(childData1.miles)
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
                if (_this.loop == snapshot.numChildren()) {
                    _this.tempRec.forEach(function (value) {
                        if (value.records > 0) {
                            _this.records._chart.push(value);
                        }
                    });
                    console.log(_this.records._chart);
                    _this.sortRecords();
                }
            });
        });
    };
    FriendCardioProfileBarComponent.prototype.sortRecords = function () {
        this.records._chart.sort(function (a, b) {
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
    FriendCardioProfileBarComponent.prototype.setChart = function () {
        //d3.selectAll("svg > *").remove();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
    };
    FriendCardioProfileBarComponent.prototype.initSvg = function () {
        this.svg = d3.select("#barCardio")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 900 500');
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    FriendCardioProfileBarComponent.prototype.initAxis = function () {
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(this.records._chart.map(function (d) { return d.max; }));
        this.y.domain([0, d3Array.max(this.records._chart, function (d) { return d.mph; })]);
    };
    FriendCardioProfileBarComponent.prototype.drawAxis = function () {
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
    FriendCardioProfileBarComponent.prototype.drawBars = function () {
        var _this = this;
        this.g.selectAll(".bar")
            .data(this.records._chart)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return _this.x(d.max); })
            .attr("y", function (d) { return _this.y(d.mph); })
            .attr("width", this.x.bandwidth())
            .attr("height", function (d) { return _this.height - _this.y(d.mph); });
    };
    FriendCardioProfileBarComponent = __decorate([
        Component({
            selector: 'friend-cardio-profile-bar',
            templateUrl: 'friend-cardio-profile-bar.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            NavController,
            User,
            Records,
            Storage])
    ], FriendCardioProfileBarComponent);
    return FriendCardioProfileBarComponent;
}());
export { FriendCardioProfileBarComponent };
//# sourceMappingURL=friend-cardio-profile-bar.js.map