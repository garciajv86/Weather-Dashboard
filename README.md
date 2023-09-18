# Weather Dashboard

## Description
This website is a 5 day weather forecast site that allows the user to type in a city name to get the 5 day forecast for that city. It also includes a recent search button that can be clicked to  have a quick reference the previous searches. My most challenging part of this challenge was figuring out how to convert the city to coordinates so I could use the 5 day forecast api, to do so I used the geo coding api. I've learnt so much from this challenge, but my biggest take away was learning to use multiple api's and getting data from one and using it on the other.

## Link

Link to site: <a href=' https://garciajv86.github.io/Weather-Dashboard/' alt='Screenshot'>Weather Dashboard</a>

## ScreenShot

![screenshot](./assets/images/Screenshot%202023-04-24%20at%205.45.57%20PM.png)

## User Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Features
1. Allows users to type a city in the search bar to get a current and 5 day weather forecast
2. Saves the users previous search that is a click able button to allow quick search of the previous search
3. The previous search history will still be there on refresh or page reopen.

#### Author
Joshua V. Garcia
