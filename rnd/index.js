var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var lineChartData = {
  labels : ["1-3-3014","2-3-2014","3-3-2014"],
  datasets : [
    {
      label: "My First dataset",
      fillColor : "rgba(220,220,220,0.2)",
      strokeColor : "rgba(2220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(220,220,220,1)",
      data : [30,40,60]
    }
  ]
}

/*service = {
  getData: function(){
   // $.ajax('http://10.134.125.181:8080/docs/output.json?callback=getJsonContent',{contentType: 'jsonp'}).done(function(data){
    //   $.ajax('http://10.134.125.181:8080/data.json?callback=getJsonContent',{contentType: 'jsonp'}).done(function(data){
      
    //  console.log(data)
    })
  }
}*/

function getJsonContent(data){
    console.log(data);
}

window.onload = function(){
  $("#dp-from").datepicker();
  $("#dp-to").datepicker();

  //service.getData();
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive: true
  });
}