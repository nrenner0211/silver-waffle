//global variables
// var requestURL = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=39.526329&lon=-80.341248&appid=b220da5617847bf30789df166df8a1aa&units=imperial').then(function(response) {
//     response.json().then(function(data) {
//         console.log(data)
//     })
// });

var geocodingURL = 'https://api.openweathermap.org/geo/1.0/direct';
var searchBox;
var oneCall = 'https://api.openweathermap.org/data/2.5/onecall';

let weather = {
    myKey: "b220da5617847bf30789df166df8a1aa",

    //fetch weather
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.myKey)
            
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => console.log(error));
    },

    displayWeather: function (data) {
        var { name } = data;

        //no data if statement
        if (data.weather) {
            var { icon, description } = data.weather[0];
            var { temp, temp_min, temp_max, humidity } = data.main;

            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".temp").innerText = temp + "°F";
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".highLow").innerText = "High: " + temp_max + "°F Low: " + temp_min + "°F";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        } else {
            document.querySelector(".city").innerText = "No results found, please try again.";
        }
    },
    search: function () {
        this.fetchWeather(document.querySelector("#searchBtn").value);
    }
};

document.querySelector("#searchBtn").addEventListener("click", function () {
    weather.search();
});

//header emoji content
var iconArray = document.getElementById("iconArray");
var stormY = ["🌩️", "⛈️", "☀️", "🌨️", "🌧️", "☁️", "🌤️", "🌦️"];

iconArray.addEventListener("mouseover", () => {
    iconArray.innerText = stormY[Math.floor(Math.random() * stormY.length)]
});





