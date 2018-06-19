import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';

import { Records } from '../../providers/providers';

import { SortByRepsPipe } from '../../pipes/sort-by-reps/sort-by-reps'
import { ProvidersUserProvider } from '../../providers/providers';
import { LiftingHistory } from '../../models/LiftingHistory';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

import firebase from 'firebase';

@Component({
  selector: 'friend-profile-bar',
  templateUrl: 'friend-profile-bar.html'
})
export class FriendProfileBarComponent {

  user: any;
  exercise:any;

  liftingHistory: LiftingHistory[];

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

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    private userService: ProvidersUserProvider,
    private records: Records
    ) {

  	this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.exercise = navParams.get('item');
    this.user = navParams.get('user');
  }

  public makeChart() {
    this.records._records = [
      
    ];
    this.records._chart = [
      
    ];
    console.log("data")
    this.userService.getCompetingUsersLiftingHistoryByIdAndExercise(this.exercise, this.user.id).subscribe(data =>{
      this.liftingHistory = data;
      
      this.getRecords();
    })
    // console.log(this.exercise);
    
    // var queryHistory = firebase.database().ref('/' + this.username + '/exercises/' + this.exercise.name + '-' + this.exercise.variation + '/history');
    
    // queryHistory.once("value").then( snapshot => {
    //   this.loop = 0;
    //   console.log(snapshot)
    //   snapshot.forEach( childSnapshot => {
    //     this.loop++;
    //     var childData1 = childSnapshot.val();
    //     this.checkRec = false;
    //     this.records._records.forEach( (value, index) => {
    //       if (childData1.reps == value.reps) {
    //         this.checkRec = true;
    //         if (childData1.weight > value.weight) {
    //           this.records._records[index].weight = childData1.weight;
    //           this.records._records[index].oneRM = childData1.oneRM;
    //           this.records._records[index].records++;
    //         }
    //       }
    //     });
    //     if (this.checkRec == false){
    //       this.records._records.push({reps: childData1.reps, weight: childData1.weight, oneRM: childData1.oneRM, records: 1})
    //     }
    //     console.log(snapshot.numChildren())
    //     console.log(this.loop)
    //     if ( snapshot.numChildren() == this.loop ) {
          
    //       this.records._records.sort((a: any, b: any) => {
      
    //         if (a.reps < b.reps) {
    //           return -1;
    //         } else if (a.reps > b.reps) {
    //           return 1;
    //         } else {
    //           return 0;
    //         }
    //       });
    //       this.setChart()
    //     }
    //   });
    // });
  }

  getRecords() {

    for(let history of this.liftingHistory){
      //console.log("here");
  
      this.checkRec =false;
      for(let record of this.records._records){
        if(history.reps == record.reps){
          this.checkRec = true;
          if(history.weight > record.weight){
            record.weight = history.weight;
            record.oneRepMax = history.oneRepMax;
            record.records++;
          }
          //console.log(this.checkRec);
        }
      }
      if (this.checkRec == false){

        this.records._records.push({reps: history.reps, weight: history.weight, oneRepMax: history.oneRepMax, records: 1})
      }
      console.log(this.records._records);
      this.records._records.sort((a: any, b: any) => {
        if (a.reps < b.reps) {
          return -1;
        } else if (a.reps > b.reps) {
          return 1;
        } else {
          return 0;
        }
      });
      this.setChart()
    }
  }

  setChart() {
    d3.selectAll("svg > *").remove();
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
	}

	initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.records._records.map((d) => d.reps));
    this.y.domain([0, d3Array.max(this.records._records, (d) => d.oneRepMax)]);
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
  }

  drawBars() {
    this.g.selectAll(".bar")
        .data(this.records._records)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x(d.reps) )
        .attr("y", (d) => this.y(d.oneRepMax) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.oneRepMax) );
  }
}
