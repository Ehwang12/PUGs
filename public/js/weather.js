
$(document).ready(function(){
    let aValue = localStorage.getItem('newUser');
    let location= aValue.split(',')[3].split(':')[1].replace(/['"]+/g, '');
    // console.log(location.split('"')[1]);
    if (aValue === undefined){
        location = "Minneapolis";
    }
    var cityName;
    var emptyArr = [];
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        location + ",USA&APPID=d1fe11bbbd89325017da7da0cffc0c2b&units=imperial";
    
        $.getJSON(queryURL,function(result){
            var mainWeather = result.weather;
            var currentTemp = result.main.temp;
            var highTemp = result.main.temp_max;
            var lowTemp = result.main.temp_min;
            var desc = result.weather[0].description;

            var icon= mainWeather[0].icon;

            for (let i=0; i < mainWeather.length; i++){
                var weatherDiv = $("#weatherListDiv");
                emptyArr.push(mainWeather[i].main);
                // li.addClass('list-group-item');
                // li.text(mainWeather[i].main);
            }    
            // var weatherDesc = emptyArr.join('/');
            
           $("#currentTemp").html('<div class="col-md-4 align-self-center">' + currentTemp + '°F' + '</div><div class="col-md-4 align-self-center">' + desc + '</div><div class="col-md-4 align-self-center"><img class="animated pulse infinite weatherIcon d-inline right w-80" width="60px" src="https://openweathermap.org/img/w/' + icon + '.png"></div>');

        weatherDiv.html('<div class="row"><div class="h4 temp col-6 align-self-center"> High: ' + highTemp + '°F' + '</div><div class="col-6 align-self-center h4 temp"> Low: '+ lowTemp + '°F' +'</div></div>');
            
    
      
        });

});
