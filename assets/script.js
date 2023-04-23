// 5 Day Weather Forecast API
var apiKey = 'a7fc7c3921309a588e45475792082481';
var apiId = '&appid=';

var searchBtn = document.getElementById('search-button');

// Function to get data
function getCoordinates() {

    var  city = document.getElementById('city-search').value;
    var searchHistoryBtn = document.getElementById('searchHistoryBtn');
    
    // Put the city search to local storage
    localStorage.setItem('City', city);

    // Retrieve the city from local storage and put it in search history button
    searchHistoryBtn.innerHTML = localStorage.getItem('City');



    // Geo Code API
    var geoCodingApi = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=20&appid=a7fc7c3921309a588e45475792082481";

    fetch(geoCodingApi)

    .then(function(response) {
        if(!response.ok) throw new Error('oops!');
        return response.json();
    })
    .then(function(data) {
        //console.log(data[0].lon);
        //console.log(data[0].lat);

        const latLon = {
            lat: data[0].lon,
            lon: data[0].lat
        }
        var weatherForecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}${apiId}${apiKey}&units=imperial`;
       
        fetch(weatherForecastApi)

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            // Render Data content to webpage
            var cityEl = document.getElementById('cityName');
            var dateEl = document.getElementById('currentDate');
            var iconEl = document.getElementById('iconImg1');
            var tempEl = document.getElementById('temp');
            var windEl = document.getElementById('wind');
            var humidityEl = document.getElementById('humidity');

            var cityName = data.city.name;
            var currentDate = data.list[0].dt_txt;
            var weatherIcon = data.list[0].weather[0].icon;
            var temp = data.list[0].main.temp;


            cityEl.innerHTML = cityName;
            dateEl.innerHTML = currentDate.substring(0, currentDate.length -8);
            iconEl.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            tempEl.innerHTML = `Temp: ${temp} ºF`;
        })


    })
};

// Click Event
searchBtn.addEventListener('click', function(event) {

    event.preventDefault();

    getCoordinates();

    document.getElementById('city-search').value = '';

})







