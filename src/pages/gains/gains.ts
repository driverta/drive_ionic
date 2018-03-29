import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Shape from "d3-shape";
import * as d3Axis from "d3-axis";

@IonicPage()
@Component({
  selector: 'page-gains',
  templateUrl: 'gains.html',
})
export class GainsPage {

	username: string;
	gains = 0
	allTime = 0;
	month = 0;
	week = 0;
	today = 0;

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
    {axis:"Other",value:0.21},
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
  	public navParams: NavParams,
  	private storage: Storage) {

  	this.username = localStorage.getItem("username");
    this.width = Math.min(700, window.innerWidth - 10) - this.margin.left - this.margin.right,
    this.height = Math.min(this.width, window.innerHeight - this.margin.top - this.margin.bottom - 20);
    this.radarChartOptions.w = this.width;
    this.radarChartOptions.h = this.height;
    this.radarChartOptions.margin = this.margin;
  }

  ionViewDidLoad() {
    var todaysDate = new Date().toISOString().slice(0,10);
    var lastWeek = new Date();
    var lastMonth = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7)
    lastMonth.setDate(lastMonth.getDate() - 30)

    this.allTime = 0;
    this.month = 0;
    this.week = 0;
    this.today = 0;

    this.getGains().then((val) => {
      val.forEach((set) => {
      	var newDate = set.date.slice(0,10);
      	var testDate = new Date(newDate);

      	this.allTime = this.allTime + set.gains;

      	if(testDate > lastMonth) {
          this.month = this.month + set.gains;
        }

        if(testDate > lastWeek) {
          this.week = this.week + set.gains;
        }

        if(newDate == todaysDate) {
          this.today = this.today + set.gains;
        }

      })
    })

    this.radarChart("#gainsChart", this.data, this.radarChartOptions);
  }

  getGains(): Promise<any> {
    return this.storage.get(this.username + '/gains');
  }

  radarChart(id, data, options){
    //alert("HERE")
    console.log(id);
    console.log(data);
    console.log(options);
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
    console.log(maxValue)

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
       .attr("fill", "white")
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
      .style("stroke", "white")
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
