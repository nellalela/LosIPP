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

   // Set the margins
var margin = {top: 60, right: 100, bottom: 20, left: 80},
width = 850 - margin.left - margin.right,
height = 370 - margin.top - margin.bottom;

// Parse the month variable
var parseMonth = d3.timeParse("%d/%m/%y");
var formatMonth = d3.timeFormat("%b %d, '%y");

//array colores

var scaleColors = ["#8BA9D0", "#6A90C1", "#066CA9", "#004B8C"];


// Set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);


// Define the line
var valueLine = d3.line()
  .x(function(d) { return x(d.fecha); })
  .y(function(d) { return y(+d.votacionEfectiva); })

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
d3.csv("./assets/encuestas.csv", function(error, data) {
if (error) throw error;

 // Format the data
data.forEach(function(d) {
    d.fecha = parseMonth(d.fecha);
    d.votacionEfectiva = +d.votacionEfectiva;
    d.encuestadora = d.encuestadora;
    d.candidato = d.candidato;
});

var nest = d3.nest()
  .key(function(d){
    return d.encuestadora;
  })
  .key(function(d){
    return d.candidato;
  })
  .entries(data)

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.fecha; }));
y.domain([0, 100]);

// Set up the x axis
var xaxis = svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .attr("class", "x axis")
     .call(d3.axisBottom(x)
        .ticks(d3.timeMonth)
        .tickSize(0, 0)
        .tickFormat(d3.timeFormat("%d/%B/%y"))
        .tickSizeInner(0)
        .tickPadding(10));

// Add the Y Axis
 var yaxis = svg.append("g")
     .attr("class", "y axis")
     .call(d3.axisLeft(y)
        .ticks(5)
        .tickSizeInner(0)
        .tickPadding(6)
        .tickSize(0, 0));

// Add a label to the y axis
svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - 60)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Votación Efectiva")
      .attr("class", "y axis label");

// Create a dropdown
  var menu = d3.select("#dropdown")

  menu
  .append("select")
  .selectAll("option")
      .data(nest)
      .enter()
      .append("option")
      .attr("value", function(d){
          return d.key;
      })
      .text(function(d){
          return d.key;
      })



 // Function to create the initial graph
 var initialGraph = function(encuestadora){

   // Filter the data to include only fruit of interest
   var selectEncuestadora = nest.filter(function(d){
              return d.key == encuestadora;
            })

    var selectEncuestadoraGroups = svg.selectAll(".encuestadoraGroups")
      .data(selectEncuestadora, function(d){
        return d ? d.key : this.key;
      })
      .enter()
      .append("g")
      .attr("class", "encuestadoraGroups")

  var initialPath = selectEncuestadoraGroups.selectAll(".line")
    .data(function(d) { return d.values; })
    .enter()
    .append("path")
    .style("fill","none" )
    .style("stroke","#EF5285" )
    .style("stoke-width","2px" )

  initialPath
    .attr("d", function(d){
      return valueLine(d.values)
    })
    .attr("class", "line")

 }

 // Create initial graph
 initialGraph("El Financiero")


 // Update the data
 var updateGraph = function(encuestadora){

   // Filter the data to include only fruit of interest
   var selectEncuestadora = nest.filter(function(d){
              return d.key == encuestadora;
            })

   // Select all of the grouped elements and update the data
    var selectEncuestadoraGroups = svg.selectAll(".encuestadoraGroups")
      .data(selectEncuestadora)

      // Select all the lines and transition to new positions
          selectEncuestadoraGroups.selectAll("path.line")
             .data(function(d){
                return (d.values);
              })
              .transition()
                .duration(1000)
                .attr("d", function(d){
                  return valueLine(d.values)
                })


 }


 // Run update function when dropdown selection changes
 menu.on('change', function(){

   // Find which fruit was selected from the dropdown
   var selectedEncuestadora = d3.select(this)
          .select("select")
          .property("value")

      // Run update function with the selected fruit
      updateGraph(selectedEncuestadora)


  });



})


}
}
