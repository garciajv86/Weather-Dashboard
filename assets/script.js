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

            // Render Data content to webpage for current day
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
            var wind = data.list[0].wind.speed;
            var humidity = data.list[0].main.humidity;


            cityEl.innerHTML = cityName;
            dateEl.innerHTML = currentDate.substring(0, currentDate.length -8);
            iconEl.src = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
            tempEl.innerHTML = `Temp: ${temp} ºF`;
            windEl.innerHTML = `Wind: ${wind} MPH`;
            humidityEl.innerHTML = `Humidity: ${humidity}%`;

            // Render Data content to webpage for 5 days
            var fiveDaySection = document.getElementById(`fiveDaySection`);
            fiveDaySection.style.display = 'flex';

            var fiveDayTitle = document.getElementById(`5dayTitle`);
            fiveDayTitle.innerHTML = '5 Day Forecast:';

            var day1El = document.getElementById(`day1Date`);
            var day2El = document.getElementById(`day2Date`);
            var day3El = document.getElementById(`day3Date`);
            var day4El = document.getElementById(`day4Date`);
            var day5El = document.getElementById(`day5Date`);

            var day1IconEl = document.getElementById(`iconImg2`);
            var day2IconEl = document.getElementById(`iconImg3`);
            var day3IconEl = document.getElementById(`iconImg4`);
            var day4IconEl = document.getElementById(`iconImg5`);
            var day5IconEl = document.getElementById(`iconImg6`);

            var day1TempEl = document.getElementById(`day1Temp`);
            var day2TempEl = document.getElementById(`day2Temp`);
            var day3TempEl = document.getElementById(`day3Temp`);
            var day4TempEl = document.getElementById(`day4Temp`);
            var day5TempEl = document.getElementById(`day5Temp`);

            var day1HumidityEl = document.getElementById(`day1Humidity`);
            var day2HumidityEl = document.getElementById(`day2Humidity`);
            var day3HumidityEl = document.getElementById(`day3Humidity`);
            var day4HumidityEl = document.getElementById(`day4Humidity`);
            var day5HumidityEl = document.getElementById(`day5Humidity`);

            // Grab Data 
            var day1Date = data.list[6].dt_txt;
            var day2Date = data.list[14].dt_txt;
            var day3Date = data.list[22].dt_txt;
            var day4Date = data.list[30].dt_txt;
            var day5Date = data.list[38].dt_txt;

            var day1Icon = data.list[6].weather[0].icon;
            var day2Icon = data.list[14].weather[0].icon;
            var day3Icon = data.list[22].weather[0].icon;
            var day4Icon = data.list[30].weather[0].icon;
            var day5Icon = data.list[38].weather[0].icon;

            var day1Temp = data.list[6].main.temp;
            var day2Temp = data.list[14].main.temp;
            var day3Temp = data.list[22].main.temp;
            var day4Temp = data.list[30].main.temp;
            var day5Temp = data.list[38].main.temp;

            var day1Humidity = data.list[6].main.humidity;
            var day2Humidity = data.list[14].main.humidity;
            var day3Humidity = data.list[22].main.humidity;
            var day4Humidity = data.list[30].main.humidity;
            var day5Humidity = data.list[38].main.humidity;

            // Render Content 
            day1El.innerHTML = day1Date.substring(0, day1Date.length -8);
            day2El.innerHTML = day2Date.substring(0, day2Date.length -8);
            day3El.innerHTML = day3Date.substring(0, day3Date.length -8);
            day4El.innerHTML = day4Date.substring(0, day4Date.length -8);
            day5El.innerHTML = day5Date.substring(0, day5Date.length -8);

            day1IconEl.src = `http://openweathermap.org/img/wn/${day1Icon}@4x.png`;
            day2IconEl.src = `http://openweathermap.org/img/wn/${day2Icon}@4x.png`;
            day3IconEl.src = `http://openweathermap.org/img/wn/${day3Icon}@4x.png`;
            day4IconEl.src = `http://openweathermap.org/img/wn/${day4Icon}@4x.png`;
            day5IconEl.src = `http://openweathermap.org/img/wn/${day5Icon}@4x.png`;

            day1TempEl.innerHTML = `Temp: ${day1Temp} ºF`;
            day2TempEl.innerHTML = `Temp: ${day2Temp} ºF`;
            day3TempEl.innerHTML = `Temp: ${day3Temp} ºF`;
            day4TempEl.innerHTML = `Temp: ${day4Temp} ºF`;
            day5TempEl.innerHTML = `Temp: ${day5Temp} ºF`;

            day1HumidityEl.innerHTML = `Humidity: ${day1Humidity}%`;
            day2HumidityEl.innerHTML = `Humidity: ${day2Humidity}%`;
            day3HumidityEl.innerHTML = `Humidity: ${day3Humidity}%`;
            day4HumidityEl.innerHTML = `Humidity: ${day4Humidity}%`;
            day5HumidityEl.innerHTML = `Humidity: ${day5Humidity}%`;
                



             
         })


    })
};

// Click Event
searchBtn.addEventListener('click', function(event) {

    event.preventDefault();

    getCoordinates();

    document.getElementById('city-search').value = '';

})







