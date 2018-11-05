import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';
import { Storage } from '@ionic/storage';

import { User, ProvidersUserProvider } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps'

import { CardioHistory } from '../../models/CardioHistory';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import firebase from 'firebase';

@Component({
  selector: 'cardio-profile-bar',
  templateUrl: 'cardio-profile-bar.html'
})
export class CardioProfileBarComponent {

  username: any;
  exercise:any;

  cardioHistory: CardioHistory[];
  cardioRecords = [];

  width: number;
  height: number;
  margin = {top: 20, right: 20, bottom: 80, left: 0};
  x: any;
  y: any;
  svg: any;
  g: any;
  loop = 0;
  checkRec = false;
  history = [];
  tempRec = [];

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public user: User,
    private records: Records,
    private storage: Storage,
    private userService: ProvidersUserProvider
    ) {

  	this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.exercise = navParams.get('exercise');
  }

  public makeChart() {
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
  
    ]
    this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.cardioHistory = data;
      this.getRecords();
    })
  }

  getRecords() {
    //console.log(this.records._cardioRecs)
    for(let history of this.cardioHistory){
  
      //this.checkRec =false;
      //console.log(this.tempRec)
      //for(let record of this.records._records){
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
    //console.log(this.records._cardioRecs)
    this.tempRec.forEach ((value) => {
      if (value.records > 0){
        this.cardioRecords.push(value)
      }
    })
    //this.records._cardioRecords = this.records._setToZero;
    this.sortRecords();
  }

  sortRecords() {
    //console.log(this.records._cardioRecs)
    this.tempRec.sort((a: any, b: any) => {
    
      if (a.reps < b.reps) {
        return -1;
      } else if (a.reps > b.reps) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setChart();
  }

  setChart() {
    d3.select("#barCardio").selectAll("svg > *").remove();
    this.initSvg()
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  initSvg() {

    this.svg = d3.select("#barCardio")
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 900 500');
    this.g = this.svg.append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
	}

	initAxis() {
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
  }

  drawBars() {
    this.g.selectAll(".bar")
        .data(this.cardioRecords)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x(d.max) )
        .attr("y", (d) => this.y(d.mph) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.mph) );
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

}
