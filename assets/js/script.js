let timeDisplayEl = $("#date-display");
let cityName = $("#city-name")
let cityTemp = $("#temperature")
let cityHumidity = $("#humidty");
let cityWindSpeed = $("#wind-speed");
let cityUVIndex = $("#uv-index");

let searchBtn = $("#search-btn");

function displayTime() { 
    var rightNow = moment().subtract(10, 'days').calendar();
    timeDisplayEl.text(rightNow);
  }

setInterval(displayTime);

// searchBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("hello!");
// });

$("#search-btn").on("click", function (event) {
    event.preventDefault();
    console.log("hello!")
}); 


// get today's weather data by city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// function weatherToday() {
//     var cityName = 'Charlottesville'
//     var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${c670ee249f79219a0df9744ffc1fd9ba}&units=imperial`

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// }

// weatherToday();

