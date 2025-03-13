//function calculateWindChill(temperature, windSpeed) {
//    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
//}

//function updateWindChill() {

//const temperature = parseFloat(document.getElementById("temperature").value);
//const windSpeed = parseFloat(document.getElementById("windSpeed").value);

//if (temperature <= 50 && windSpeed > 3.0) {
//    const windChill = calculateWindChill(temperature, windSpeed);
//    document.getElementById("windchill").textContent = "Wind chill: " + Math.round(windChill * 100) / 100 + " °F";
//} else {
//document.getElementById("windchill").textContent = "Calculate wind chill above.";
//}
//}
//document.addEventListener("DOMContentLoaded", updateWindChill);

//document.getElementById("temperature").addEventListener("input", updateWindChill);
//document.getElementById("windSpeed").addEventListener("input", updateWindChill);

//document.getElementById("windchill").innerHTML = calculateWindChill(temperature, windSpeed);

// Weather for Chamber
const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.94&lon=-112.84&units=imperial&appid=f91237fb3b7de2e50a66bea388132150`

let currentTemp = document.querySelector("#temperature")
let weatherIcon = document.querySelector("#weatherIcon")
let currentConditions = document.querySelector("#currentConditions")
let weatherForcast = document.querySelector("#forcast")
let windSpeed = document.querySelector("#windpeed")
let windChill = document.querySelector("#windchill");

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayResults(data)
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${parseInt(data.main.temp.toFixed(0))}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description
    weatherForecast.innerHTML = '`${parseInt(data.list[1].main.temp.toFixed(0))}&deg;F | ${parseInt(data.list[2].main.temp.toFixed(0))}&deg;F | ${parseInt(data.list[3].main.temp.toFixed(0))}&deg;F`'
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", "Weather Icon")
    captionDesc.textContent = `${desc}`
}
apiFetch()