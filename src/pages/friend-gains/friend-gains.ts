import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { User, ProvidersUserProvider, HistoryProvider } from '../../providers/providers';
import firebase from 'firebase';
import { CardioHistory } from '../../models/CardioHistory';
import { LiftingHistory } from '../../models/LiftingHistory';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Shape from "d3-shape";
import * as d3Axis from "d3-axis";

@IonicPage()
@Component({
  selector: 'page-friend-gains',
  templateUrl: 'friend-gains.html',
})
export class FriendGainsPage {

	user: any;
	gains = 0
	allTime = 0;

  exercises = {};
  xGains = 0

  sets = {};

  chest = 0;
  back = 0;
  legs = 0;
  shoulders = 0;
  arms = 0;
  core = 0;
  other = 0;
  cardio = 0;
  cardioHistory: CardioHistory[] = new Array<CardioHistory>();
  liftingHistory: LiftingHistory[] = new Array<LiftingHistory>();

  filter = "";

  margin = {top: 50, right: 110, bottom: 50, left: 45};
  width: number;
  height: number;

  data = [
    [//iPhone
    {axis:"Chest",value:0.12},
    {axis:"Back",value:0.18},
    {axis:"Legs",value:0.29},
    {axis:"Shoulders",value:0.17},
    {axis:"Arms",value:0.22},
    {axis:"Core",value:0.02},
    {axis:"Cardio",value:0.60}      
    ]
  ];

  radarChartOptions = {
    w: 0,
    h: 0,
    margin: {},
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: "#CC333F"
  };

  constructor(public navCtrl: NavController,
    public actShtCtrl: ActionSheetController,
    public navParams: NavParams,
    private userService: ProvidersUserProvider,
    private historyService: HistoryProvider) {

  	this.user = navParams.get("user");
    this.width = Math.min(700, window.innerWidth - 10) - this.margin.left - this.margin.right,
    this.height = Math.min(this.width, window.innerHeight - this.margin.top - this.margin.bottom - 20);
    this.radarChartOptions.w = this.width;
    this.radarChartOptions.h = this.height;
    this.radarChartOptions.margin = this.margin;
  }

  ionViewDidLoad() {
    this.data = [
      [//iPhone
      {axis:"Chest",value:0.12},
      {axis:"Back",value:0.18},
      {axis:"Legs",value:0.29},
      {axis:"Shoulders",value:0.17},
      {axis:"Arms",value:0.22},
      {axis:"Core",value:0.02},
      {axis:"Cardio",value:0.60}      
      ]
    ];
    
  	//alert(this.username)
    this.sets = {};
    this.allTime = 0;

    this.chest = 0;
    this.back = 0;
    this.legs = 0;
    this.shoulders = 0;
    this.arms = 0;
    this.core = 0;
    this.other = 0;
    this.cardio = 0;

    this.historyService.getCardioHistory(this.user.id).subscribe((cardioHistory) => {
      this.cardioHistory = cardioHistory;
      this.cardioHistory.forEach(ch => {
        this.cardio += ch.gains;
      });
      this.historyService.getLiftingHistory(this.user.id).subscribe((liftingHistory) => {
        this.liftingHistory = liftingHistory;
        this.liftingHistory.forEach(lh =>{
          switch(lh.exercise.MuscleGroup.muscleGroupName) {
            case "Chest":
              this.chest += lh.gains;
              break;
            case "Back":
              this.back += lh.gains;
              break;
            case "Legs":
              this.legs += lh.gains;
              break;
            case "Shoulders":
              this.shoulders += lh.gains;
              break;
            case "Arms":
              this.arms += lh.gains;
              break;
            case "Core":
              this.core += lh.gains;
              break;
          }
      });
      this.allTime = this.cardio + this.back + this.chest + this.arms + this.core + this.arms + this.shoulders + this.legs;
      this.data[0][0].value = this.chest / this.allTime;
      this.data[0][1].value = this.back / this.allTime;
      this.data[0][2].value = this.legs / this.allTime;
      this.data[0][3].value = this.shoulders / this.allTime;
      this.data[0][4].value = this.arms / this.allTime;
      this.data[0][5].value = this.core / this.allTime;
      this.data[0][6].value = this.cardio / this.allTime;
      this.radarChart("#gainsChart2", this.data, this.radarChartOptions);
      })
    })
  }

  filterGains(){
    let actionSheet = this.actShtCtrl.create({
      title: 'Filter Exercises By Muscle Group',
      buttons: [
        {
          text: 'All',
          handler: () => {
            this.ionViewDidLoad();
          }
        },{
          text: 'Chest',
          handler: () => {
            this.filter = "Chest";
            this.executeFilter()
          }
        },{
          text: 'Back',
          handler: () => {
            this.filter = "Back";
            this.executeFilter()          
          }
        },{
          text: 'Legs',
          handler: () => {
            this.filter = "Legs";
            this.executeFilter()          
          }
        },{
          text: 'Core',
          handler: () => {
            this.filter = "Core";
            this.executeFilter()          
          }
        },{
          text: 'Shoulders',
          handler: () => {
           this.filter = "Shoulders";
            this.executeFilter()
          }
        },{
          text: 'Arms',
          handler: () => {
            this.filter = "Arms";
            this.executeFilter()          
          }
        },{
          text: 'Cardio',
          handler: () => {
            this.filter = "Cardio";
            this.executeFilter()          
          }
        },{
          text: 'Other',
          handler: () => {
            this.filter = "Other";
            this.executeFilter()          
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  
  executeFilter(){
    this.data[0] = [];
    this.exercises = {};
    this.xGains = 0;
    
    if (this.filter == "Cardio"){
      this.cardioHistory.forEach(c =>{
        if (c.exercise.MuscleGroup.muscleGroupName == this.filter) {
          this.xGains += c.gains;
          if (this.exercises[c.exercise.exerciseName]){
            this.exercises[c.exercise.exerciseName] += c.gains;
          } else {
            this.exercises[c.exercise.exerciseName] = c.gains;
          }
        }
    });
    } else {
      this.liftingHistory.forEach(lf =>{
        if (lf.exercise.MuscleGroup.muscleGroupName == this.filter) {
          this.xGains += lf.gains;
          if (this.exercises[lf.exercise.exerciseName]){
            this.exercises[lf.exercise.exerciseName] += lf.gains;
          } else {
            this.exercises[lf.exercise.exerciseName] = lf.gains;
          }
        }
      });
    }
    Object.keys(this.exercises).forEach ( (key) => {
      var name = key
      var percent = this.exercises[key] / this.xGains;
      //onsole.log(percent)
      var d = {axis: name, value: percent}
      this.data[0].push(d)
      
    }) 
    this.radarChart("#gainsChart2", this.data, this.radarChartOptions);
  }
  

  radarChart(id, data, options){
    //alert("HERE")
    //console.log(id);
    //console.log(data);
    //console.log(options);
    var cfg = {
     w: 600,        //Width of the circle
     h: 600,        //Height of the circle
     margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
     levels: 3,        //How many levels or inner circles should there be drawn
     maxValue: 0,       //What is the value that the biggest circle will represent
     labelFactor: 1.25,   //How much farther than the radius of the outer circle should the labels be placed
     wrapWidth: 60,     //The number of pixels after which a label needs to be given a new line
     opacityArea: 0.35,   //The opacity of the area of the blob
     dotRadius: 4,       //The size of the colored circles of each blog
     opacityCircles: 0.1,   //The opacity of the circles of each blob
     strokeWidth: 2,     //The width of the stroke around each blob
     roundStrokes: false,  //If true the area and stroke will follow a round path (cardinal-closed)
     color: "red" 
    };
    
    //Put all of the options into a variable called cfg
    if('undefined' !== typeof options){
      for(var i in options){
      if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
      }//for i
    }//if
    
    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    //var maxValue = Math.max(cfg.maxValue, d3Array.max(data, function(i){console.log(i); return d3Array.max(i.map(function(o){ console.log(o); return o.value;}))}));
    var maxValue = options.maxValue

    var allAxis = (data[0].map((i, j) => {return i.axis})),  //Names of each axis
      total = allAxis.length,          //The number of different axes
      radius = Math.min(cfg.w/2, cfg.h/2),   //Radius of the outermost circle
      //Format = d3.format('%'),         //Percentage formatting
      angleSlice = Math.PI * 2 / total;    //The width in radians of each "slice"
    
    //Scale for the radius
    var rScale = d3Scale.scaleLinear()
      .range([0, radius])
      .domain([0, maxValue]);
      
    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////

    //Remove whatever chart with the same id/class was present before
    d3.select(id).select("svg").remove();
    
    //Initiate the radar chart SVG
    var svg = d3.select(id).append("svg")
        .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar"+id);
    //Append a g element    
    var g = svg.append("g")
        .attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");
    
    /////////////////////////////////////////////////////////
    ////////// Glow filter for some extra pizzazz ///////////
    /////////////////////////////////////////////////////////
    
    //Filter for the outside glow
    var filter = g.append('defs').append('filter').attr('id','glow'),
      feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
      feMerge = filter.append('feMerge'),
      feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
      feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

    /////////////////////////////////////////////////////////
    /////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////
    
    //Wrapper for the grid & axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");
    
    //Draw the background circles
    var x = [5,4,3,2,1]
    axisGrid.selectAll(".levels")
       .data(x)
       .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", function(d, i){return radius/cfg.levels*d;})
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", cfg.opacityCircles)
      .style("filter" , "url(#glow)");

    //Text indicating at what % each level is
    axisGrid.selectAll(".axisLabel")
       .data(x)
       .enter().append("text")
       .attr("class", "axisLabel")
       .attr("x", 4)
       .attr("y", function(d){return -d*radius/cfg.levels;})
       .attr("dy", "0.4em")
       .style("font-size", "10px")
       .attr("fill", "black")
       .text(function(d,i) { return (maxValue * d/cfg.levels)* 100 + "%" });
    
    /////////////////////////////////////////////////////////
    //////////////////// Draw the axes //////////////////////
    /////////////////////////////////////////////////////////
    
    //Create the straight lines radiating outward from the center
    var axis = axisGrid.selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");
    //Append the lines
    axis.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
      .attr("class", "line")
      .style("stroke", "black")
      .style("stroke-width", "2px");

    //Append the labels at each axis
    axis.append("text")
      .attr("class", "legend")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => { return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
      .text(function(d: any){ return d})
      .call(wrap, cfg.wrapWidth);

    /////////////////////////////////////////////////////////
    ///////////// Draw the radar chart blobs ////////////////
    /////////////////////////////////////////////////////////
    
    //The radial line function
    var radarLine = d3Shape.radialLine()
      .curve(d3Shape.curveLinearClosed)
      .radius(function(d: any) { return rScale(d.value); })
      .angle(function(d,i) {  return i*angleSlice; });
      
    if(cfg.roundStrokes) {
      radarLine.curve(d3Shape.curveCardinalClosed);
    }
          
    //Create a wrapper for the blobs  
    var blobWrapper = g.selectAll(".radarWrapper")
      .data(data)
      .enter().append("g")
      .attr("class", "radarWrapper");
        
    //Append the backgrounds  
    blobWrapper
      .append("path")
      .attr("class", "radarArea")
      .attr("d", function(d: any, i) { return radarLine(d); })
      .style("fill", function(d,i) { return cfg.color; })
      .style("fill-opacity", cfg.opacityArea)
      /*
      .on('mouseover', function (d,i){
        //Dim all blobs
        d3.selectAll(".radarArea")
          .transition().duration(200)
          .style("fill-opacity", 0.1); 
        //Bring back the hovered over blob
        d3.select(this)
          .transition().duration(200)
          .style("fill-opacity", 0.7);  
      })
      .on('mouseout', function(){
        //Bring back all blobs
        d3.selectAll(".radarArea")
          .transition().duration(200)
          .style("fill-opacity", cfg.opacityArea);
      });
      */
      
    //Create the outlines  
    blobWrapper.append("path")
      .attr("class", "radarStroke")
      .attr("d", function(d: any ,i) { return radarLine(d); })
      .style("stroke-width", cfg.strokeWidth + "px")
      .style("stroke", function(d,i) { return cfg.color; })
      .style("fill", "none")
      .style("filter" , "url(#glow)");    
    
    //Append the circles
    blobWrapper.selectAll(".radarCircle")
      .data(function(d: any,i) { return d; })
      .enter().append("circle")
      .attr("class", "radarCircle")
      .attr("r", cfg.dotRadius)
      .attr("cx", function(d: any,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("cy", function(d: any,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
      .style("fill", function(d,i,j) { return cfg.color; })
      .style("fill-opacity", 0.8);

    /////////////////////////////////////////////////////////
    //////// Append invisible circles for tooltip ///////////
    /////////////////////////////////////////////////////////
    
    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
      .data(data)
      .enter().append("g")
      .attr("class", "radarCircleWrapper");
      
    //Append a set of invisible circles on top for the mouseover pop-up
    /*
    blobCircleWrapper.selectAll(".radarInvisibleCircle")
      .data(function(d: any,i) { return d; })
      .enter().append("circle")
      .attr("class", "radarInvisibleCircle")
      .attr("r", cfg.dotRadius*1.5)
      .attr("cx", function(d: any ,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("cy", function(d: any,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", function(d: any,i) {
        var newX =  parseFloat(d3.select(this).attr('cx')) - 10;
        var newY =  parseFloat(d3.select(this).attr('cy')) - 10;
            
        tooltip
          .attr('x', newX)
          .attr('y', newY)
          .text(Format(d.value))
          .transition().duration(200)
          .style('opacity', 1);
      })
      .on("mouseout", function(){
        tooltip.transition().duration(200)
          .style("opacity", 0);
      });
      
    //Set up the small tooltip for when you hover over a circle
    var tooltip = g.append("text")
      .attr("class", "tooltip")
      .style("opacity", 0);
    */
    /////////////////////////////////////////////////////////
    /////////////////// Helper Function /////////////////////
    /////////////////////////////////////////////////////////

    //Taken from http://bl.ocks.org/mbostock/7555321
    //Wraps SVG text 
    
    function wrap(text, width) {
      text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
        
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        var node: SVGTSpanElement = <SVGTSpanElement>tspan.node(); 
        var hasGreaterWidth = node.getComputedTextLength() > width; 
        if (hasGreaterWidth) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
      });
    }//wrap
      
  }
}
