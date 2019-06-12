$(document).ready(function(){
    var location = "Minneapolis";
    var emptyArr = [];
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        location + ",USA&APPID=d1fe11bbbd89325017da7da0cffc0c2b&units=imperial";
        $.getJSON(queryURL,function(result){
            console.log( JSON.stringify(result, null, 2));
            var mainWeather = result.weather;
            var currentTemp = result.main.temp;
            var highTemp = result.main.temp_max;
            var lowTemp = result.main.temp_min;
            var desc = result.weather[0].description;
            console.log(desc)

            var icon= mainWeather[0].icon;
            console.log(icon);
            console.log(currentTemp + "°F")

            for (let i=0; i < mainWeather.length; i++){
                var weatherDiv = $("#weatherListDiv");
                emptyArr.push(mainWeather[i].main);
                // li.addClass('list-group-item');
                // li.text(mainWeather[i].main);
            }    
            var weatherDesc = emptyArr.join('/');
            
           $("#currentTemp").html('<div class="row"><div class="col-md-6 align-self-center">' + currentTemp + '°F' + '</div><div class="col-md-3 align-self-center">' + desc + '</div><div class="col-md-3 align-self-center"><img class="weatherIcon d-inline right w-80" src="https://openweathermap.org/img/w/' + icon + '.png"></div></div>');

        weatherDiv.html('<div class="row"><div class="h4 temp col-6 align-self-center"> High: ' + highTemp + '°F' + '</div><div class="col-6 align-self-center h4 temp"> Low: '+ lowTemp + '°F' +'</div></div>');
            // append('<li class="weatherLi list-group-item"></li>');
            
            // weatherDiv.append('<li class="weatherLi list-group-item">Desc: ' + weatherDesc + '</li>');

            
    
      
        });

});
