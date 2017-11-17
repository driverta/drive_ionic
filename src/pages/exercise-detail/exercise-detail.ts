import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';
import  { StatsLineChart } from '../../models/item';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
//import { History } from '../../providers/providers';

import firebase from 'firebase';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';


import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";


@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {
  
  exercise: any;
  xlevel = 1;
	xcurrent = 25;
	xtotal = 100;
	progress = 75;
  weight = 100;
  reps = 10;
  gains = 0;
  username: any;
  segment = "set";
  loop = 0;
  bool = false;

  history = [{date: 1, reps: 1, weight: 1, oneRM: 1}];
  myRecords = [{reps: 1, weight: 1, oneRM: 1, records: 1}];

  item: any;

  selectedValue = 0;

  title = 'D3 Barchart with Ionic 3';

  width: number;
  height: number;
  margin = {top: 20, right: 20, bottom: 80, left: 0};
  x: any;
  y: any;
  svg: any;
  g: any;

  width2: number;
  height2: number;
  margin2 = {top: 20, right: 20, bottom: 80, left: 0};
  x2: any;
  y2: any;
  svg2: any;
  g2: any;

  line: d3Shape.Line<[number, number]>;

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public user: User,
    private records: Records,
    public levels: Levels) {

    this.exercise = navParams.get('item') || items.defaultItem;
    this.item = navParams.get('item') || items.defaultItem;
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.width2 = 1000 - this.margin2.left - this.margin2.right;
    this.height2 = 500 - this.margin2.top - this.margin2.bottom;
  }

  ionViewDidLoad() {
    this.username = this.user._user
    this.myRecords = [];
    this.history = [];

    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    queryHistory.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        this.history.push(childData1);     
      });
    });
    
    var queryGains = firebase.database().ref('/' + this.username + '/gains');
    queryGains.once("value").then( snapshot => {
      this.loop = 0;
      this.gains = 0;
      snapshot.forEach( childSnapshot => {
        this.loop++
        var childData2 = childSnapshot.val();
        var gains = childData2.gains;
        this.gains = this.gains + gains
        if ( snapshot.numChildren() == this.loop )
          this.setLevel()
      })
    })

    var count = 0; 
    var queryRecords = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/records');
    queryRecords.once("value").then( snapshot => {
      snapshot.forEach( childSnapshot => {
        var childData1 = childSnapshot.val();
        var r = {reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: childData1.records};
        this.records._records[count] = r;
        count++     
      });
    }); 

    this.initSvg()
    this.initAxis();
    this.drawAxis();
    this.drawBars();
    this.drawLine();

  }

  setLevel () {
    this.levels._levels.forEach( ( value, index) => {
      if (this.gains > value.totalPoints) {
        this.xcurrent = this.gains - value.totalPoints;
        this.xlevel = value.level;
        this.xtotal = value.levelPoints;
        this.progress = this.xcurrent / this.xtotal * 100
      }
    });
  }

  showBar() {
    this.selectedValue = 1;
  }

  showLine() {
    this.selectedValue = 2;
  }

  hideCharts() {
    this.selectedValue = 0;
  }

  initSvg() {

    this.svg = d3.select("#barChart")
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 900 500');
    this.g = this.svg.append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.svg2 = d3.select("#lineChart")
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 900 500');
    this.g2 = this.svg2.append("g")
        .attr("transform", "translate(" + this.margin2.left + "," + this.margin2.top + ")");
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.records._records.map((d) => d.reps));
    this.y.domain([0, d3Array.max(this.records._records, (d) => d.oneRM)]);

    this.x2 = d3Scale.scaleBand().rangeRound([0, this.width2]).padding(0.1);
    this.y2 = d3Scale.scaleLinear().rangeRound([this.height2, 0]);
    this.x2.domain(this.history.map((d) => d.date));
    this.y2.domain([0, d3Array.max(this.history, (d) => d.oneRM)]);
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

    this.g2.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + this.height2 + ")")
        .call(d3Axis.axisBottom(this.x2))
        .append("text")
        .attr("class", "axis-title")
        .attr("y", 70)
        .attr("x", this.width2 / 2)
        .attr("text-anchor", "end")
        .text("Date");
    this.g2.append("g")
        .attr("class", "axis axis--y")
        .call(d3Axis.axisLeft(this.y2))
        .append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("y", -90)
        .attr("x", (this.height2 / -2) + 20)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("1RM");
  }

  drawBars() {
    this.g.selectAll(".bar")
        .data(this.records._records)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x(d.reps) )
        .attr("y", (d) => this.y(d.oneRM) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.oneRM) );
  }

  drawLine() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x2(d.date) )
        .y( (d: any) => this.y2(d.oneRM) );

    this.g2.append("path")
        .datum(this.history)
        .attr("class", "line")
        .attr("d", this.line);
  }

  addSet() {
    var date = new Date().toISOString();
    var oneRM = this.weight / (1.0278- (this.reps * .0278));
    var gains = 5;
    this.bool = false;

    this.records._records.forEach( (value, index) => {
      if (this.reps == value.reps) {
        if (this.weight > value.weight) {
          this.records._records[index].weight = this.weight;
          this.records._records[index].oneRM = oneRM;
          this.records._records[index].records++;
          gains = 10;
          this.bool = true;
        }
      }
    });

    setTimeout(() => {
      this.bool = false;
    }, 2000);

    var set = { date: date, weight: this.weight, reps: this.reps, oneRM: oneRM, gains: gains};
    var g = { date: date, gains: gains};
    
    var history = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/history');
    history.push(set);

    var points = firebase.database().ref('/' + this.username + '/gains');
    points.push(g);

    var records = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '/records');
    records.set(this.records._records);

    this.ionViewDidLoad();
  }
}
