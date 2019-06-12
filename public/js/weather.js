
$(document).ready(function(){
    let aValue = localStorage.getItem('newUser');
    let location= aValue.split(',')[3].split(':')[1].replace(/['"]+/g, '');
    if (aValue === undefined){
        location = "Minneapolis";
    }
    var emptyArr = [];
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip="+ location + ",us&APPID=d1fe11bbbd89325017da7da0cffc0c2b&units=imperial";

        //   $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip="+ locationZip + ",us&APPID=d1fe11bbbd89325017da7da0cffc0c2b",function(result)
    
        $.getJSON(queryURL,function(result){
            console.log(JSON.stringify(result.name, null, 2))
            var mainWeather = result.weather;
            var currentTemp = result.main.temp;
            var highTemp = result.main.temp_max;
            var lowTemp = result.main.temp_min;
            var desc = result.weather[0].description;
            var cityname =result.name;
            var icon= mainWeather[0].icon;

            for (let i=0; i < mainWeather.length; i++){
                var weatherDiv = $("#weatherListDiv");
                emptyArr.push(mainWeather[i].main);
            }                
           $("#currentTemp").html('<div class="col-md-4 align-self-center h1">' + currentTemp + '°F' + '</div><div class="col-md-4 h1 d-block white rounded heavy-rain-gradient black-text mb-1">'+ cityname + '</div><div class="col-md-4 align-self-center desc p-0">' + desc + '</div>');

        weatherDiv.html('<div class="row"><div class="h4 temp col-md-4 align-self-center"> High: ' + highTemp + '°F' + '</div><div class="col-md-4 align-self-center"><img class="animated pulse infinite weatherIcon d-inline right w-80" width="60px" src="https://openweathermap.org/img/w/' + icon + '.png"></div><div class="col-md-4 align-self-center h4 temp"> Low: '+ lowTemp + '°F' +'</div></div>');
            
    
      
        });

});

