import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';
import { Storage } from '@ionic/storage';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps';
import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';

import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import firebase from 'firebase';

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.html'
})
export class BarChartComponent {

  cardioRecords = [];
  cardioHistory: CardioHistory[];
  liftingRecords = [];
  liftingHistory: LiftingHistory[];
	username: any;
  exercise:any;
  tempRec = [];
  muscleGroup: any;
  width: number;
  height: number;
  margin = {top: 20, right: 20, bottom: 80, left: 0};
  x: any;
  y: any;
  svg: any;
  g: any;
  user: any;
  loop = 0;
  checkRec = false;
  history = [];
  liftingBool = true;
  cardioBool = false;
  xAxisText = "";
  yAxisText = "";

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    private records: Records,
    private storage: Storage,
    private userService: ProvidersUserProvider
    ) {

  	this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
    this.user = navParams.get('user');
    if(this.user == null){
      this.user = userService.getUser();
    }
  }

  public makeBarChart() {
    if (this.muscleGroup == "Cardio") {
      this.tempRec = [
        {min: 0, max: 5, miles: 0, time: 0, mph: 0, records: 0},
        {min: 5, max: 10, miles: 0, time: 0, mph: 0, records: 0},
        {min: 10, max: 15, miles: 0, time: 0, mph: 0, records: 0},
        {min: 15, max: 20, miles: 0, time: 0, mph: 0, records: 0},
        {min: 20, max: 25, miles: 0, time: 0, mph: 0, records: 0},
        {min: 25, max: 30, miles: 0, time: 0, mph: 0, records: 0},
        {min: 30, max: 35, miles: 0, time: 0, mph: 0, records: 0},
        {min: 35, max: 40, miles: 0, time: 0, mph: 0, records: 0},
        {min: 40, max: 45, miles: 0, time: 0, mph: 0, records: 0},
        {min: 45, max: 50, miles: 0, time: 0, mph: 0, records: 0},
        {min: 50, max: 55, miles: 0, time: 0, mph: 0, records: 0},
        {min: 55, max: 60, miles: 0, time: 0, mph: 0, records: 0},
        {min: 60, max: 65, miles: 0, time: 0, mph: 0, records: 0},
        {min: 65, max: 70, miles: 0, time: 0, mph: 0, records: 0},
        {min: 70, max: 75, miles: 0, time: 0, mph: 0, records: 0},
        {min: 75, max: 80, miles: 0, time: 0, mph: 0, records: 0},
        {min: 80, max: 85, miles: 0, time: 0, mph: 0, records: 0},
        {min: 85, max: 90, miles: 0, time: 0, mph: 0, records: 0},
        {min: 90, max: 95, miles: 0, time: 0, mph: 0, records: 0},
        {min: 95, max: 100, miles: 0, time: 0, mph: 0, records: 0},
        {min: 100, max: 105, miles: 0, time: 0, mph: 0, records: 0},
        {min: 105, max: 110, miles: 0, time: 0, mph: 0, records: 0},
        {min: 110, max: 115, miles: 0, time: 0, mph: 0, records: 0},
        {min: 115, max: 120, miles: 0, time: 0, mph: 0, records: 0},
        {min: 120, max: 1000, miles: 0, time: 0, mph: 0, records: 0}
      ];
      this.cardioRecords = [];
      if (this.user == this.userService.getUser()){
        this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
          this.cardioHistory = data;
          this.cardioBool = true;
          this.liftingBool = false;
          this.getCardioRecords();
        })
      } else {
        this.userService.getCompetingUsersCardioHistoryByIdAndExercise(this.exercise, this.user.id).subscribe(data => {
          this.cardioHistory = data;
          this.cardioBool = true;
          this.liftingBool = false;
          this.getCardioRecords();
        })
      }
    } else {
      this.liftingRecords = [];
      if (this.user == this.userService.getUser()){
        this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
          this.liftingHistory = data;
          this.getLiftingRecords();
        })
      } else {
        this.userService.getCompetingUsersLiftingHistoryByIdAndExercise(this.exercise, this.user.id).subscribe(data =>{
          this.liftingHistory = data;
          this.getLiftingRecords();
        })
      }
    }
  }

  getLiftingRecords() {
    for(let history of this.liftingHistory){
      this.checkRec =false;
      for(let record of this.liftingRecords){
        if(history.reps == record.reps){
          this.checkRec = true;
          if(history.weight > record.weight){
            record.weight = history.weight;
            record.oneRepMax = history.oneRepMax;
            record.records++;
          }
        }
      }
      if (this.checkRec == false){
        this.liftingRecords.push({reps: history.reps, weight: history.weight, oneRepMax: history.oneRepMax, records: 1})
      }
    }
    this.sortLiftingRecords();
  }
  getCardioRecords() {
    for(let history of this.cardioHistory){
      this.tempRec.forEach( (value, index) => {
        if (history.minutes >= value.min && history.minutes < value.max) {
          if (history.mph > value.mph) {
            this.tempRec[index].miles = history.miles;
            this.tempRec[index].mph = history.mph;
            this.tempRec[index].records++;
            this.tempRec[index].time = history.minutes;
          }
        }
      });
    }
    this.tempRec.forEach ((value) => {
      if (value.records > 0){
        this.cardioRecords.push(value)
      }
    })
    this.sortCardioRecords();
  }

  sortLiftingRecords() {
    this.liftingRecords.sort((a: any, b: any) => {
      if (a.reps < b.reps) {
        return -1;
      } else if (a.reps > b.reps) {
        return 1;
      } else {
        return 0;
      }
    });
    this.xAxisText = "1RM";
    this.xAxisText = "Reps";
    this.setLiftingChart();
  }

  sortCardioRecords() {
    this.cardioRecords.sort((a: any, b: any) => {
      if (a.reps < b.reps) {
        return -1;
      } else if (a.reps > b.reps) {
        return 1;
      } else {
        return 0;
      }
    });
    this.xAxisText = "MPH";
    this.xAxisText = "Max Minutes";
    this.setCardioChart();
  }

  setLiftingChart() {
    d3.select("#barChart").selectAll("svg > *").remove();
    this.initSvg()
    this.initLiftingAxis();
    this.drawAxis();
    this.drawLiftingBars();
  }

  setCardioChart() {
    d3.select("#barChart").selectAll("svg > *").remove();
    this.initSvg();
    this.initCardioAxis();
    this.drawAxis();
    this.drawCardioBars();
  }

  initSvg() {

    this.svg = d3.select("#barChart")
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 900 500');
    this.g = this.svg.append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
	}

	initLiftingAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.liftingRecords.map((d) => d.reps));
    this.y.domain([0, d3Array.max(this.liftingRecords, (d) => d.oneRepMax)]);
  }

  initCardioAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.cardioRecords.map((d) => d.max));
    this.y.domain([0, d3Array.max(this.cardioRecords, (d) => d.mph)]);
  }

  drawAxis() {
    this.g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3Axis.axisBottom(this.x))
        .append("text")
        .attr("class", "axis-title")
        .attr("y", 70)
        .attr("x", this.width / 2)
        .attr("text-anchor", "end")
        .text(this.xAxisText);
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
        .text(this.yAxisText);
  }

  drawLiftingBars() {
    this.g.selectAll(".bar")
      .data(this.liftingRecords)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => this.x(d.reps) )
      .attr("y", (d) => this.y(d.oneRepMax) )
      .attr("width", this.x.bandwidth())
      .attr("height", (d) => this.height - this.y(d.oneRepMax) );
  }

  drawCardioBars() {
    this.g.selectAll(".bar")
      .data(this.cardioRecords)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => this.x(d.max) )
      .attr("y", (d) => this.y(d.mph) )
      .attr("width", this.x.bandwidth())
      .attr("height", (d) => this.height - this.y(d.mph) );
  }

}
