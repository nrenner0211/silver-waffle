function weatherBalloon( cityID ) {
    var key = '56983c8d4b843493cded7cc811106a23';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon( 6167865 );
  }

//header emoji content
const iconArray = document.getElementById("iconArray");
const stormY = ["🌩️", "⛈️", "☀️", "🌨️", "🌧️", "☁️", "🌤️", "🌦️"];

iconArray.addEventListener("mouseover", () => {
    iconArray.innerText = stormY[Math.floor(Math.random() * stormY.length)]
});



