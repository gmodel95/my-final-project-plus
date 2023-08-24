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

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let city = document.querySelector("#search");
  cityElement.innerHTML = `<strong>${city.value}</strong>`;
}

let cityInput = document.querySelector("#search-form");
cityInput.addEventListener("submit", search);
