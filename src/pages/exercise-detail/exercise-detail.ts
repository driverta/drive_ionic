import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';
import  { StatsLineChart } from '../../models/item';

import { Items } from '../../providers/providers';
import { BarChartComponent } from '../../components/bar-chart/bar-chart';


import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html'
})
export class ItemDetailPage {
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

  showBar() {
    this.selectedValue = 1;
  }

  showLine() {
    this.selectedValue = 2;
  }

  hideCharts() {
    this.selectedValue = 0;
  }

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.width2 = 1000 - this.margin2.left - this.margin2.right;
    this.height2 = 500 - this.margin2.top - this.margin2.bottom;
  }

  ionViewDidLoad() {
    this.initSvg()
    this.initAxis();
    this.drawAxis();
    this.drawBars();
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
    this.x.domain(StatsBarChart.map((d) => d.reps));
    this.y.domain([0, d3Array.max(StatsBarChart, (d) => d.oneRM)]);

    this.x2 = d3Scale.scaleBand().rangeRound([0, this.width2]).padding(0.1);
    this.y2 = d3Scale.scaleLinear().rangeRound([this.height2, 0]);
    this.x2.domain(StatsLineChart.map((d) => d.date));
    this.y2.domain([0, d3Array.max(StatsLineChart, (d) => d.oneRM)]);
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
        .data(StatsBarChart)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x(d.reps) )
        .attr("y", (d) => this.y(d.oneRM) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.oneRM) );

    this.g2.selectAll(".bar")
        .data(StatsLineChart)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x2(d.date) )
        .attr("y", (d) => this.y2(d.oneRM) )
        .attr("width", this.x2.bandwidth())
        .attr("height", (d) => this.height2 - this.y2(d.oneRM) );
  }

}
