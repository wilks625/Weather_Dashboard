let timeDisplayEl = $("#date-display");
let cityName = $("#city-name")
let cityTemp = $("#temperature")
let cityHumidity = $("#humidty");
let cityWindSpeed = $("#wind-speed");
let cityUVIndex = $("#uv-index");

let userSearchInput = $("#search-input");
let searchBtn = $("#search-btn");
var usersContainer = document.getElementById('users'); // testing

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
    getWeatherApi();
}); 

//testing below
function getWeatherApi() {
    var cityName = userSearchInput
    console.log(cityName.textContent)
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=$c670ee249f79219a0df9744ffc1fd9ba&units=imperial`;
    // console.log(cityName.textContent)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          //Creating a h3 element and a p element
          var userName = document.createElement('h3');
          var userUrl = document.createElement('p');
  
          //Setting the text of the h3 element and p element.
          userName.textContent = data[i].login;
          userUrl.textContent = data[i].url;
  
          //Appending the dynamically generated html to the div associated with the id="users"
          //Append will attach the element as the bottom most child.
          usersContainer.append(userName);
          usersContainer.append(userUrl);
        }
      });
  }
//   searchBtn.addEventListener('click', getWeatherApi);
// $("#search-btn").on("click", function (event)
//   $("#search-btn").on("click", function (event) {












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

