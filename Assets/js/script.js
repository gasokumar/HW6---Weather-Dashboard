//  DEPENDNCIES ===================================
var citySearch = $("#city-search"); //Search input
var searchButton = document.getElementById("search-button");
var cityNameEl = document.getElementById("city-name");
var icon = $("#icon");
var currentTempEl = document.getElementById("temp");
var currentWindEl = $("#wind");
var currentHumidityEl = $("#humidity");
var currentUVel = $("#uv");
const APIKey = "00a458a5a4ee8e7d62edeb1913c60d1a";

// FUNCTIONS ===============================
// Store search in local storage

// Fetch API Data using form/after button click for current conditions

function currentWeather() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    "london" +
    "&appid=" +
    APIKey +
    "&units=imperial";

  fetch(requestUrl) // fetch (path to data)
    .then(function (response) {
      // turning that data into json
      return response.json();
    })
    .then(function (data) {
      // Then console logging the json data
      console.log(data);
      var currentDate = moment().format("l");
      cityNameEl.innerHTML = data.name + " " + currentDate;
      //   console.log(data.weather[0].icon); Need this to add icon next to cityNameEl
      currentTempEl.innerHTML = "Temperature: " + data.main.temp;
      currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity;
      currentWindEl.innerHTML = "Wind Speed: " + data.wind.speed;

      // Not in this data set
      currentUVel.innerHTML = "UV Index: ";
    });
}

// Fetch API Data for 5 day forecast

//City name, the date, temp, humidity, wind speed, and UV index

searchButton.addEventListener("click", function () {
  console.log("You clicked the button");
});
searchButton.addEventListener("click", currentWeather());
