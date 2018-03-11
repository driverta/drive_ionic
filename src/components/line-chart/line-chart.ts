import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsLineChart } from '../../models/item';
import { Storage } from '@ionic/storage';

import { HistoryProvider } from '../../providers/providers';
import { User } from '../../providers/providers';

import firebase from 'firebase';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

@Component({
  selector: 'line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartComponent {

	username: any;
  exercise: any;

	width2: number;
  height2: number;
  margin2 = {top: 20, right: 20, bottom: 80, left: 0};
  x2: any;
  y2: any;
  svg2: any;
  g2: any;
  loop = 0;

  line: d3Shape.Line<[number, number]>;

  constructor(
  	navParams: NavParams,
  	public user: User,
    private history: HistoryProvider,
    private storage: Storage
  	) {
  	
  	this.width2 = 1000 - this.margin2.left - this.margin2.right;
    this.height2 = 500 - this.margin2.top - this.margin2.bottom;
    this.exercise = navParams.get('item');
  }

  public makeChart2() {
  	this.username = localStorage.getItem("username");
  	this.history._charts = [];
    
    this.getExercises().then((val) => {
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach ( (keyTwo) => {
          var set = {date: history[keyTwo].date, reps: history[keyTwo].reps, weight: history[keyTwo].weight, oneRM: history[keyTwo].oneRM}
          this.history._charts.push(set)
        })
      }
    }).then(() => {
      this.setChart2()
    })
    
  }

  setChart2() {
  	this.initSvg()
    this.initAxis();
    this.drawAxis();
    this.drawLine();
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

  initAxis() {
    this.x2 = d3Scale.scaleBand().rangeRound([0, this.width2]).padding(0.1);
    this.y2 = d3Scale.scaleLinear().rangeRound([this.height2, 0]);
    this.x2.domain(this.history._charts.map((d) => d.date));
    this.y2.domain([0, d3Array.max(this.history._charts, (d) => d.oneRM)]);
  }

  drawAxis() {
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

  drawLine() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x2(d.date) )
        .y( (d: any) => this.y2(d.oneRM) );

    
    this.g2.append("path")
        .datum(this.history._charts)
        .attr("class", "line")
        .attr("d", this.line);
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

}
