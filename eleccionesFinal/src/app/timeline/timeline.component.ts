import { Component, OnInit } from '@angular/core';

declare var Timeline: any;
declare var TL: any;
declare var timeline : any;


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {

    var options = {
      initial_zoom: 5,
      timenav_position: "top",
      marker_padding: 0,
      language: "es",
      start_at_end: false
    
    }
  var  timeline = new TL.Timeline('timeline-embed',
      'https://docs.google.com/spreadsheets/d/1TwLRmc5eA_1uolSS7Zo71BxP2WTCJZoJBLgjo4iH8KI/edit#gid=0', options);
  }

}
