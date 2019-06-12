import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { User } from '../../providers/providers';


import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import { LiftingHistory } from '../../models/LiftingHistory';
import { CardioHistory } from '../../models/CardioHistory';

@Component({
  selector: 'line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartComponent {
  @Input() historyService: HistoryProvider;
  liftingHistory: LiftingHistory[];
  cardioHistory: CardioHistory[];
	username: any;
  exercise: any;
  muscleGroup: any;
	width2: number;
  height2: number;
  margin2 = {top: 20, right: 20, bottom: 30, left: 0};
  x2: any;
  y2: any;
  svg2: any;
  g2: any;
  loop = 0;
  axisText = ""

  line: d3Shape.Line<[number, number]>;

  constructor(
  	navParams: NavParams,
  	public user: User,
    private storage: Storage,
    private userService: ProvidersUserProvider
  	) {
  	
  	this.width2 = 1000 - this.margin2.left - this.margin2.right;
    this.height2 = 500 - this.margin2.top - this.margin2.bottom;
    this.exercise = navParams.get('exercise');
    this.muscleGroup = navParams.get('muscleGroup');
  }
  ngAfterViewInit() {
    this.makeLineChart();
  }

  public makeLineChart() {
    if (this.muscleGroup == "Cardio") {
      //this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        this.cardioHistory = this.historyService.cardioHistory;
        this.axisText = "MPH"
        this.setCardioChart();
      //});
    } else {
      this.userService.getLiftingHistoryByIdAndExercise(this.exercise).subscribe(data =>{
        //this.liftingHistory = this.history.liftingHistory;
        this.liftingHistory = data;
        this.axisText = "1RM"
        this.setLiftingChart();
      })
    }
  }

  setCardioChart() {
  	this.initSvg()
    this.initCardioAxis();
    this.drawAxis();
    this.drawCardioLine();
  }

  setLiftingChart() {
  	this.initSvg()
    this.initLiftingAxis();
    this.drawAxis();
    this.drawLiftingLine();
  }

  initSvg() {
    this.svg2 = d3.select("#lineChart")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 900 500');
    this.g2 = this.svg2.append("g")
      .attr("transform", "translate(" + this.margin2.left + "," + this.margin2.top + ")");
  }

  initCardioAxis() {
    this.x2 = d3Scale.scaleBand().rangeRound([0, this.width2]).padding(0.1);
    this.y2 = d3Scale.scaleLinear().rangeRound([this.height2, 0]);
    this.x2.domain(this.cardioHistory.map((d) => d.date));
    this.y2.domain([0, d3Array.max(this.cardioHistory, (d) => d.mph)]);
  }

  initLiftingAxis() {
    this.x2 = d3Scale.scaleBand().rangeRound([0, this.width2]).padding(0.1);
    this.y2 = d3Scale.scaleLinear().rangeRound([this.height2, 0]);
    this.x2.domain(this.liftingHistory.map((d) => d.date));
    this.y2.domain([0, d3Array.max(this.liftingHistory, (d) => d.oneRepMax)]);
  }

  drawAxis() {
    this.g2.append("g")
      .attr("transform", "translate(0," + this.height2 + ")")
      .call(d3Axis.axisBottom(this.x2))
      .select(".domain")
      .attr("dx", "0.71em")
      .remove();

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
        .text(this.axisText);
  }

  drawCardioLine() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x2(d.date) )
        .y( (d: any) => this.y2(d.mph) );

    this.g2.append("path")
        .datum(this.cardioHistory)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", this.line);
  }

  drawLiftingLine() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x2(d.date) )
        .y( (d: any) => this.y2(d.oneRepMax) );

    this.g2.append("path")
        .datum(this.liftingHistory)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", this.line);
  }

}
