let now = new Date();
let dayTime = document.querySelector("#day-time");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

dayTime.innerHTML = `<strong>${currentDay} ${hours}:${minutes}</strong>`;

function clickCelsius(event) {
  event.preventDefault();
  let tempDisplay = document.querySelector("#temp");
  tempDisplay.innerHTML = `25`;
}

function clickFahrenheit(event) {
  event.preventDefault();
  let tempDisplay = document.querySelector("#temp");
  tempDisplay.innerHTML = "77";
}
let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", clickFahrenheit);

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", clickCelsius);

let apiKey = "3142741447d5880e43db611ef8cca892";
let units = "metric";

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search");
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios
    .get(apiUrl)
    .then(showTemperature)
    .catch(function (error) {
      console.log(error);
    });
});
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  updateWeather(response);
}

function updateWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `${city} ${temperature}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}
function showPosition(position) {
  let apiKey = "c811269050a93d80430400dc5fd0bd21";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
