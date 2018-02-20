import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import { states } from './states';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-senadoresmap',
  templateUrl: './senadoresmap.component.html',
  styleUrls: ['./senadoresmap.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class SenadoresmapComponent implements OnInit {




  constructor() { }

  
    

  ngOnInit() {

    var mymap = L.map('mapid', { 
      maxZoom: 5.5,
          minZoom: 2.5,
          zoomSnap: 0,
          zoomDelta: 0.25,
<<<<<<< HEAD
          maxBoundsViscosity: 1.0,
          
  }).setView([28.132442, -100.852647], 5);
  
//tile layer supplier
L.tileLayer('https://api.mapbox.com/styles/v1/nellalela/cjduomucm53gq2rqspd6i7vla/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVsbGFsZWxhIiwiYSI6ImNqY25wdGkydjFtYmozM3J3bmFtM3J4OTIifQ.8bjGPz0lsuXKQO41g3dhsA', {
=======
          maxBoundsViscosity: 0.9,
          
  }).setView([23.132442, -100.852647], 5);
  
//tile layer supplier
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVsbGFsZWxhIiwiYSI6ImNqY25wdGkydjFtYmozM3J3bmFtM3J4OTIifQ.8bjGPz0lsuXKQO41g3dhsA', {
>>>>>>> 01bb528ffaa2de11a56ba139641e76ac748654f5
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',

}).addTo(mymap);

function highlight(e) {
  var layer = e.target;
  $('.perfil').html(info.update(layer.feature.properties));


  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}


//mouseout
 function resetHighlight(e) {
  geojson.resetStyle(e.target);
  
 
}


//filtrar por coalicion o partido





//funcion que agrega efecto a cada feauter
function onEachFeature(feature, layer){
      layer.on({
        click: highlight,
        mouseout: resetHighlight,
      });



<<<<<<< HEAD
      layer.bindPopup("<h4>" + feature.properties.estado + "</h4>" + "<h6>" + feature.properties.PorMexico[0].coalicion +"</h6>" + "<img src="+ feature.properties.PorMexico[0].logo +" class= 'logo'>"+ " "+"<a href='#p1'>" + feature.properties.PorMexico[0].nombre + "</a><br>" + "<img src="+ feature.properties.PorMexico[1].logo +" class= 'logo'>"+ " " + "<a href='#p2'>" + feature.properties.PorMexico[1].nombre
=======
      layer.bindPopup("<h6><b>" + feature.properties.estado + "</b></h6>" + "<h6>" + feature.properties.PorMexico[0].coalicion +"</h6>" + "<img src="+ feature.properties.PorMexico[0].logo +" class= 'logo'>"+ " "+"<a href='#p1'>" + feature.properties.PorMexico[0].nombre + "</a><br>" + "<img src="+ feature.properties.PorMexico[1].logo +" class= 'logo'>"+ " " + "<a href='#p2'>" + feature.properties.PorMexico[1].nombre
>>>>>>> 01bb528ffaa2de11a56ba139641e76ac748654f5
     +"</a>" +"<br><br>" + "<h6>" + feature.properties.TodosporMexico[0].coalicion  + "</h6>"  + "<img src="+ feature.properties.TodosporMexico[0].logo +" class= 'logo'>"+ " "+"<a href='#p3'>" + feature.properties.TodosporMexico[0].nombre + "</a><br>" + "<img src="+ feature.properties.TodosporMexico[1].logo +" class= 'logo'>"+ " "+"<a href='#p4'>" + feature.properties.TodosporMexico[1].nombre
      + "</a><br><br>" + "<h6>" +  feature.properties.JuntosHaremos[0].coalicion + "</h6>"+ "<img src="+ feature.properties.JuntosHaremos[0].logo +" class= 'logo'>"+ " " +"<a href='#p5'>" + feature.properties.JuntosHaremos[0].nombre + "</a><br>"+ "<img src="+ feature.properties.JuntosHaremos[1].logo +" class= 'logo'>"+ " " +"<a href='#p6'>" + feature.properties.JuntosHaremos[1].nombre,{
        maxWidth : 500, 
        minWidth : 230,
<<<<<<< HEAD
        autoPan: false,
=======
>>>>>>> 01bb528ffaa2de11a56ba139641e76ac748654f5
      });
      



    }

   



   var geojson = L.geoJson(states, {
  onEachFeature: onEachFeature
}).addTo(mymap);



var info = L.control();

//crear div xq yolo

info.onAdd = function (mymap) {
  this._div = L.DomUtil.create('div', 'info'); 
  this.update();
  return this._div;
};

//metodo que sirve para actualizar el controlador basado en la info que le pasamos



info.update =  function(props){








return (props ? "<div class='target'>"+ "<div id='p1'>" + "<h4>"+ props.PorMexico[0].nombre + "</h4>"  + props.estado + "<br><br>"+"<img class='fotos' src='" + props.PorMexico[0].foto +"'>" + "<br><br>" + "<h6>Partido</h6>" + "<img class= 'partidos' src='" + props.PorMexico[0].logo + "'>"+ " " +  props.PorMexico[0].partido + "<br><br>" +"<h6>Trayectoria</h6>" +props.PorMexico[0].trayectoria + "<br><br>" + "<h6>Comentarios</h6>" + props.PorMexico[0].comentarios +"</div>" 
+ "<div id='p2'>" + "<h4>"+ props.PorMexico[1].nombre + "</h4>"  + props.estado + "<br><br>"+"<img class='fotos' src='" + props.PorMexico[1].foto +"'>" + "<br><br>" + "<h6>Partido</h6>" + "<img class= 'partidos' src='" + props.PorMexico[1].logo + "'>"+ " " +  props.PorMexico[1].partido + "<br><br>" +"<h6>Trayectoria</h6>" +props.PorMexico[1].trayectoria + "<br><br>" + "<h6>Comentarios</h6>" + props.PorMexico[1].comentarios +"</div>"
+ "<div id='p3'>" + "<h4>"+ props.TodosporMexico[0].nombre + "</h4>"  + props.estado + "<br><br>"+"<img class='fotos' src='" + props.TodosporMexico[0].foto +"'>" + "<br><br>" + "<h6>Partido</h6>" + "<img class= 'partidos' src='" + props.TodosporMexico[0].logo + "'>"+ " " +  props.TodosporMexico[0].partido + "<br><br>" +"<h6>Trayectoria</h6>" +props.TodosporMexico[0].trayectoria + "<br><br>" + "<h6>Comentarios</h6>" + props.TodosporMexico[0].comentarios +"</div>" 
+ "<div id='p4'>" + "<h4>"+ props.TodosporMexico[1].nombre + "</h4>"  + props.estado + "<br><br>"+"<img class='fotos' src='" + props.TodosporMexico[1].foto +"'>" + "<br><br>" + "<h6>Partido</h6>" + "<img class= 'partidos' src='" + props.TodosporMexico[1].logo + "'>"+ " " +  props.TodosporMexico[1].partido + "<br><br>" +"<h6>Trayectoria</h6>" +props.TodosporMexico[1].trayectoria + "<br><br>" + "<h6>Comentarios</h6>" + props.TodosporMexico[1].comentarios +"</div>"
+ "<div id='p5'>" + "<h4>"+ props.JuntosHaremos[0].nombre + "</h4>"  + props.estado + "<br><br>"+"<img class='fotos' src='" + props.JuntosHaremos[0].foto +"'>" + "<br><br>" + "<h6>Partido</h6>" + "<img class= 'partidos' src='" + props.JuntosHaremos[0].logo + "'>"+ " " +  props.JuntosHaremos[0].partido + "<br><br>" +"<h6>Trayectoria</h6>" +props.JuntosHaremos[0].trayectoria + "<br><br>" + "<h6>Comentarios</h6>" + props.JuntosHaremos[1].comentarios +"</div>"  
+ "<div id='p6'>" + "<h4>"+ props.JuntosHaremos[1].nombre + "</h4>"  + props.estado + "<br><br>"+"<img class='fotos' src='" + props.JuntosHaremos[1].foto +"'>" + "<br><br>" + "<h6>Partido</h6>" + "<img class= 'partidos' src='" + props.JuntosHaremos[1].logo + "'>"+ " " +  props.JuntosHaremos[1].partido + "<br><br>" +"<h6>Trayectoria</h6>" +props.JuntosHaremos[1].trayectoria + "<br><br>" + "<h6>Comentarios</h6>" + props.JuntosHaremos[1].comentarios +"</div>"
<<<<<<< HEAD
+"</div>"  : ' Da click en el estado');
=======
+"</div>"  :'seleccione')
>>>>>>> 01bb528ffaa2de11a56ba139641e76ac748654f5
}
    
  }
  }
