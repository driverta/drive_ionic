import { Component, OnInit, ViewChild } from '@angular/core';
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

import { FriendCardioProfileBarComponent } from '../../components/friend-cardio-profile-bar/friend-cardio-profile-bar';
import { FriendCardioProfileRecordsComponent } from '../../components/friend-cardio-profile-records/friend-cardio-profile-records';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-friend-cardio-record-detail',
  templateUrl: 'friend-cardio-record-detail.html',
})
export class FriendCardioRecordDetailPage {

  exercise: any;
  username: any;
  checkRec = false;
  tempRec = [];
  loop = 0;

  width: number;
  height: number;
  margin = {top: 20, right: 20, bottom: 80, left: 0};
  x: any;
  y: any;
  svg: any;
  g: any;
  history = [];

  @ViewChild(FriendCardioProfileBarComponent) barChart: FriendCardioProfileBarComponent
  @ViewChild(FriendCardioProfileRecordsComponent) recordsTable: FriendCardioProfileRecordsComponent

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public records: Records,
    private storage: Storage
  	) {
  	this.exercise = navParams.get('item');
    this.username = navParams.get("username");
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ionViewWillEnter() {
  	this.tempRec = this.records._cardio;

    this.records._cardioRecords = [
      
    ];
    this.records._cardioRecords = [
      
    ];
    
    
    this.getRecords();
  }

  getRecords() {
    var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    queryHistory.once("value").then( snapshot => {
    	this.loop = 0;
      snapshot.forEach( childSnapshot => {
      	this.loop++
        var childData1 = childSnapshot.val();
        this.tempRec.forEach( (value, index) => {
            
          if (childData1.minutes >= value.min && childData1.minutes < value.max) {
            //alert("in")
            if (childData1.mph > value.mph) {
              this.tempRec[index].miles = childData1.miles;
              this.tempRec[index].time = childData1.time;
              this.tempRec[index].mph = childData1.mph;
              this.tempRec[index].records++;
            }
          }
        });
        if ( snapshot.numChildren() == this.loop ) {
          this.tempRec.forEach ((value) => {
            if (value.records > 0){
              this.records._cardioRecords.push(value)
              console.log(this.records._cardioRecords)
              this.sortRecords();
            }
          })
        }
      });
    });
    //this.barChart.makeChart();
    //this.recordsTable.makeTable();
  }

  sortRecords() {
    this.records._cardioRecords.sort((a: any, b: any) => {
    
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
}
