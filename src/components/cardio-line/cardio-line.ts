import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsLineChart } from '../../models/item';
import { Storage } from '@ionic/storage';

import { HistoryProvider, ProvidersUserProvider } from '../../providers/providers';
import { User } from '../../providers/providers';
import { CardioHistory } from '../../models/CardioHistory';

import firebase from 'firebase';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

@Component({
  selector: 'cardio-line',
  templateUrl: 'cardio-line.html'
})
export class CardioLineComponent {

  username: any;
  exercise: any;
  cardioHistory: CardioHistory[];

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
    private storage: Storage,
    private userService: ProvidersUserProvider
  	) {
  	
  	this.width2 = 1000 - this.margin2.left - this.margin2.right;
    this.height2 = 500 - this.margin2.top - this.margin2.bottom;
    this.exercise = navParams.get('exercise');
  }

  public makeChart2() {
  	this.userService.getCardioHistoryByIdAndExercise(this.exercise).subscribe(data =>{
      this.cardioHistory = data;
      console.log(this.cardioHistory);
      this.setChart2();
    })
    
  }

  setChart2() {
    //d3.select("#lineChart").remove();
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
    this.x2.domain(this.cardioHistory.map((d) => d.date));
    this.y2.domain([0, d3Array.max(this.cardioHistory, (d) => d.mph)]);
  }

  drawAxis() {
    console.log("Here")
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
        .text("MPH");
  }

  drawLine() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x2(d.date) )
        .y( (d: any) => this.y2(d.mph) );

    
    this.g2.append("path")
        .datum(this.cardioHistory)
        .attr("class", "line")
        .attr("d", this.line);
  }

  getExercises(): Promise<any> {
    return this.storage.get(this.username + '/exercises');
  }

}
