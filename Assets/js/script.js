//  DEPENDNCIES ===================================
var citySearch = document.getElementById("city-search"); //Search input
var searchButton = document.getElementById("search-button");
var cityNameEl = document.getElementById("city-name");
// var icon = $("#icon");
var currentTempEl = document.getElementById("temp");
var currentWindEl = document.getElementById("wind");
var currentHumidityEl = document.getElementById("humidity");
var currentUVel = document.getElementById("uv");
var list = document.getElementById("history");
const APIKey = "00a458a5a4ee8e7d62edeb1913c60d1a";

// FUNCTIONS ===============================
// Store search in local storage

// Fetch API Data using form/after button click for current conditions

//This function gets the current weather for a city
function currentWeather(city) {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  fetch(requestUrl) // fetch (path to data)
    .then(function (response) {
      // turning that data into json for us to use
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // Putting name of city + current date in card
      var currentDate = moment().format("l");
      cityNameEl.innerHTML = data.name + " " + currentDate;

      //   console.log(data.weather[0].icon); Need this to add icon next to cityNameEl

      //Outputting selected data to corresponding html elements
      currentTempEl.innerHTML = "Temperature: " + data.main.temp;
      currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity;
      currentWindEl.innerHTML = "Wind Speed: " + data.wind.speed;

      // Not in this data set, will need lat and long coordinates + another API
      currentUVel.innerHTML = "UV Index: ";

      //Saving the city's data to local storage and setting the key as the city name
      var City = {
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };

      //Creating a button for each search item
      localStorage.setItem(City.name, JSON.stringify(City));
      var entry = document.createElement("button");
      entry.setAttribute("class", "btn btn-secondary col-3");
      entry.setAttribute("id", City.name);
      entry.appendChild(document.createTextNode(City.name));
      list.appendChild(entry);
      //   entry.addEventListener("click", currentWeather(entry.id));
    });
}

// Fetch API Data for 5 day forecast

//City name, the date, temp, humidity, wind speed, and UV index

// Local Storage for search history

searchButton.addEventListener("click", function () {
  var city = citySearch.value;
  currentWeather(city);
  //   for (var i = 0; i < localStorage.length; i++) {
});
