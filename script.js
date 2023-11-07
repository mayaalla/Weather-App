const apiKey = "cf11070bb8f11247a293fc6e8ab6261d"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var lct = document.getElementById("location")
var rsc = document.getElementById("rsc")
var city = document.getElementById("city")
var temp = document.getElementById("temp")
var wndSpd = document.getElementById("wndSpd")
var umd = document.getElementById("umd")
var img = document.getElementById("img")
var err = document.getElementById("err")
async  function getWeatherData() {
    try{
    const response = await fetch(`${apiURL}${lct.value}&appid=${apiKey}`)
    var data = await response.json()
    data.name = lct.value.toUpperCase();
    city.innerHTML = data.name + " - " + data.sys.country
    console.log(data)
    temp.innerHTML = data.main.temp + "°C"
    wndSpd.innerHTML = data.wind.speed + " km/h"
    umd.innerHTML = data.main.humidity + "%"
    console.log(data.weather[0].main)
    var src = data.weather[0].main
 
    
    img.src = "image/" + src + ".png"
    lct.focus();
}catch(error){
   
    lct.focus();
}
}
rsc.onclick = function() {
    if(lct.value != "") {
      getWeatherData()
      lct.focus();
}
}
lct.focus();





// async function getWeatherData() {
//   const response = await fetch(`${apiURL}&appid=${apiKey}`)
//   var data = await response.json()
// }
// getWeatherData()
