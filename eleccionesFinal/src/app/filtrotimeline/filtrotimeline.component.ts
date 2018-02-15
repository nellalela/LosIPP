import { Component, OnInit } from '@angular/core';
import { datos } from './datosmil';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-filtrotimeline',
  templateUrl: './filtrotimeline.component.html',
  styleUrls: ['./filtrotimeline.component.css']
})
export class FiltrotimelineComponent implements OnInit {

  datos: any= [];
  totalPropuestas: any;

  constructor() { }

  ngOnInit() {

  console.log(datos);

  var html = "<div class='scroll' style='overflow-y: scroll; height:600px;'><table id='theTable'>";
  "<tbody>"
for (var i= 0; i< datos.length; i++){
  html += "<tr class='props'>";
  html+="<td class='candidato'>"+ datos[i].Candidato+"</td>";
  html+="<td class='tema tema-space'>"+ datos[i].Tema+"</td>"
  html+="<td class='headline'><b>"+  datos[i].Headline+"</b></td>";
  html+="<td  class='text'>"+datos[i].Text+"</td>";
  html+="<td  class='fuente'>"+ "<a href='" + datos[i].Fuente + "'> Leer nota </a>" +"</td>";
  
     

      html+="</tr>";

}
"</tbody>"
html+="</table></div>";
document.getElementById("proposals").innerHTML = html;

$("#reset").click(function(){
  $("tbody tr").show();
  $( "input:checkbox:checked" ).prop( "checked", false );
});

$(".candidato,.tema").on("change", function () {
  var cand = $(".candidato:checked").map(function () {
      return $(this).val()
  }).get();
  var tem = $(".tema:checked").map(function () {
      return $(this).val()
  }).get();
  
  var all = $("tbody tr").hide();
  var temas = $(".tema").filter(function () {
      var tema = $(this).text(),
        index2 = $.inArray(tema, tem);
        return index2 >=0
  }).parent()
  if (!temas.length) temas = all
  var candidatos = $(".candidato").filter(function () {
      var candidato = $(this).text(),
          index = $.inArray(candidato, cand);
          
      return index >= 0
  }).parent()
  if (!candidatos.length) candidatos = all
  
  temas.filter(candidatos).show()
  
  console.log(temas,candidatos)


});

  }
