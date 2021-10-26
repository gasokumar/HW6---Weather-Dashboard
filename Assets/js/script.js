//  DEPENDNCIES ===================================
var citySearch = $("#city-search");
var searchButton = document.getElementById("search-button");
var cityName = $("#city-name");
var currentTemp = $("#temp");
var currentWind = $("wind");
var currentHumidity = $("#humidity");
var currentUV = $("#uv");
const APIKey = "00a458a5a4ee8e7d62edeb1913c60d1a";

// FUNCTIONS ===============================
// Store search in local storage

// Fetch API Data using form/after button click

function Weather(city) {
  var requestUrl =
    "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  //   fetch(requestUrl)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log("Fetch Response \n-------------");
  //       console.log(data);
  //     });
}

// Output API Data

// Current and future conditions for that city

//City name, the date, temp, humidity, wind speed, and UV index
// Same thing 6 times except in future conditions there's no UV or city name

searchButton.addEventListener("click", function () {
  console.log("You clicked the button");
});
searchButton.addEventListener("click", Weather());
