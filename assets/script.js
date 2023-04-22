// 5 Day Weather Forecast API
var weatherForecastApi = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a7fc7c3921309a588e45475792082481';


var searchBtn = document.getElementById('search-button');

var latitudeLongitude = [];


// Function to get the coordinate and put them in local storage to retrieve
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

// Function to get the coordinates out of local storage and place them in an array
function retrieveCoordinates() {

    var coord = JSON.parse(localStorage.getItem('coordinate'));

    if(coord === null) {
        return
    }

    latitudeLongitude.push(coord.lat, coord.lon);
    console.log(latitudeLongitude);

};

// retrieveCoordinates();

// Click Event
searchBtn.addEventListener('click', function(event) {

    event.preventDefault();

    getCoordinates();
    retrieveCoordinates();

})







