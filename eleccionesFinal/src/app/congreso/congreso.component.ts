import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-congreso',
  templateUrl: './congreso.component.html',
  styleUrls: ['./congreso.component.css']
})
export class CongresoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var margin = {top: 60, right: 100, bottom: 20, left: 80},
    width = 850 - margin.left - margin.right,
    height = 370 - margin.top - margin.bottom;

//parse date
var parseDate = d3.timeParse("%d/%m/%y");

// Set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Define the line
var valueLine = d3.line()
    .x(function(d) { return x(d.fecha); })
    .y(function(d) { return y(+d.votacioEfectiva); })

// Create the svg canvas in the "graph" div
var svg = d3.select("#graph")
        .append("svg")
        .style("width", width + margin.left + margin.right + "px")
        .style("height", height + margin.top + margin.bottom + "px")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "svg");


   // Import the CSV data
d3.csv("encuestas.csv", function(error, data) {
  if (error) throw error;

  var nest = d3.nest()
	  .key(function(d){
	    return d.Fruit;
	  })
	  .key(function(d){
	  	return d.Year;
	  })
	  .entries(data)


});
       



}

}
