import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';
import { Storage } from '@ionic/storage';

import { User } from '../../providers/providers';
import { Records } from '../../providers/providers';

import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps'

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import firebase from 'firebase';

@Component({
  selector: 'cardio-bar',
  templateUrl: 'cardio-bar.html'
})
export class CardioBarComponent {

  username: any;
  exercise:any;

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
    private storage: Storage
    ) {

  	this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.exercise = navParams.get('item');
    this.tempRec = this.records._cardio;
  }

  public makeChart() {
    this.username = localStorage.getItem("username");
    this.getExercises().then((val) => {
      var keyOne = this.exercise.name + '-' + this.exercise.variation
      var history = val[keyOne].history;
      this.loop = 0;
      //console.log(val[keyOne].history);
      if (history) {
        Object.keys(history).forEach ( (workout) => {
          
          this.tempRec.forEach( (value, index) => {
            if (history[workout].minutes >= value.min && history[workout].minutes < value.max) {
              
              if (history[workout].mph > value.mph) {
                this.tempRec[index].miles = history[workout].miles;
                this.tempRec[index].time = history[workout].time;
                this.tempRec[index].mph = history[workout].mph;
                this.tempRec[index].records++;
                this.records._cardioRecords.push(this.tempRec[index])
              }
            }
          });
          
          if (this.loop == this.history.length){
          	console.log(this.records._cardioRecords)
            this.sortRecords();
          }
          
        })
      }
    })
  }

  sortRecords() {
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
    //d3.selectAll("svg > *").remove();
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
    this.x.domain(this.records._cardioRecords.map((d) => d.max));
    this.y.domain([0, d3Array.max(this.records._cardioRecords, (d) => d.mph)]);
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
        .data(this.records._cardioRecords)
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
