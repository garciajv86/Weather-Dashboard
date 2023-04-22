// 5 Day Weather Forecast API
var weatherForecastApi = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a7fc7c3921309a588e45475792082481';


var searchBtn = document.getElementById('search-button');

function getCoordinates()
 {
    var  city = document.getElementById('city-search').value;
    localStorage.setItem('City', city);
    
    // Geo Code API
    var geoCodingApi = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=20&appid=a7fc7c3921309a588e45475792082481";

    fetch(geoCodingApi)

    .then(function(response) {
        if(!response.ok) throw new Error('oops!');
        return response.json();
    })
    .then(function(data) {
        // console.log(data[0].lon);
        // console.log(data[0].lat);

        const latLon = {
            lat: data[0].lon,
            lon: data[0].lat
        }
        console.log(latLon);

        localStorage.setItem('coordinate',JSON.stringify(latLon));

    })
};


searchBtn.addEventListener('click', function(event) {

    event.preventDefault();
    getCoordinates();

})






