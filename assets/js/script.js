//global variables
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var city = 'London';
var apiKey = '&appid=56983c8d4b843493cded7cc811106a23';
var units = '&units=imperial';



let weather = {
    myKey: "b220da5617847bf30789df166df8a1aa",

    //fetch weather
    fetchWeather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/' + city + '&units=imperial&appid=' + this.myKey
        )
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
        this.fetchWeather(document.querySelector(".inputValue").value);
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





