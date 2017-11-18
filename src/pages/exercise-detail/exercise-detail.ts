import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { StatsBarChart } from '../../models/item';
import  { StatsLineChart } from '../../models/item';

import { Items } from '../../providers/providers';
import { Records } from '../../providers/providers';
import { User } from '../../providers/providers';
import { Levels } from '../../providers/providers';
import { HistoryProvider } from '../../providers/providers';

import firebase from 'firebase';

import { BarChartComponent } from '../../components/bar-chart/bar-chart';
import { LineChartComponent } from '../../components/line-chart/line-chart';

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

  //history = [{date: 1, reps: 1, weight: 1, oneRM: 1}];
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

  @ViewChild(BarChartComponent) barChart: BarChartComponent
  @ViewChild(LineChartComponent) lineChart: LineChartComponent

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public user: User,
    private records: Records,
    public levels: Levels,
    private history: HistoryProvider) {

    this.exercise = navParams.get('item') || items.defaultItem;
    this.item = navParams.get('item') || items.defaultItem;
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.width2 = 1000 - this.margin2.left - this.margin2.right;
    this.height2 = 500 - this.margin2.top - this.margin2.bottom;
  }

  ionViewDidEnter() {
    this.username = this.user._user
    this.myRecords = [];
    this.history._history = [];
    
    this.barChart.makeChart();
    this.lineChart.makeChart2();

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
  
}
