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

  selectedValue = 0;
  exercise: any;
  segment = "set";

  @ViewChild(BarChartComponent) barChart: BarChartComponent
  @ViewChild(LineChartComponent) lineChart: LineChartComponent

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    public user: User,
    private records: Records,
    public levels: Levels,
    private history: HistoryProvider) {

    this.exercise = navParams.get('item');
  }

  ionViewWillEnter() {
    this.makeCharts();
  }

  public makeCharts() {
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
