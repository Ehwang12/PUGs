$(document).ready(function () {
    let aValue = localStorage.getItem('newUser');
    let location = aValue.split(',')[3].split(':')[1].replace(/['"]+/g, '');
    if (location === "Location"){
        location = '55420';
    }
    var emptyArr = [];
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + ",us&APPID=d1fe11bbbd89325017da7da0cffc0c2b&units=imperial";

    $.getJSON(queryURL, function (result, err) {
        var mainWeather = result.weather;
        var currentTemp = Math.round(result.main.temp);
        var highTemp = result.main.temp_max;
        var lowTemp = result.main.temp_min;
        var desc = result.weather[0].description;
        var cityname = result.name;
        var icon = mainWeather[0].icon;
        for (let i = 0; i < mainWeather.length; i++) {
            var weatherDiv = $("#weatherListDiv");
            emptyArr.push(mainWeather[i].main);
        }
        $("#currentTemp").html('<div class="col-md-3 align-self-center m-0 h1">' + currentTemp + '°F' + '</div><div class="city col-md-6 h1 align-self-center white-text rounded mb-1 p-0">' + cityname + '</div><div class="col-md-3 align-self-center m-0 desc p-0">' + desc + '</div>');

        weatherDiv.html('<div class="row"><div class="h4 temp col-md-4 align-self-center"><i class="fal fa-temperature-high fa-sm"></i> High:<br> ' + highTemp + '°F' + '</div><div class="col-md-4 align-self-center"><img class="animated pulse infinite weatherIcon d-inline right w-80" width="60px" src="https://openweathermap.org/img/w/' + icon + '.png"></div><div class="col-md-4 align-self-center h4 temp"><i class="fal fa-temperature-low fa-sm"></i>Low:<br> ' + lowTemp + '°F' + '</div></div>');
    });

});