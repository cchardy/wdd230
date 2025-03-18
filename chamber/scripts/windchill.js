// Weather for Chamber
const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.94&lon=-112.84&units=imperial&appid=f91237fb3b7de2e50a66bea388132150`

let currentTemp = document.querySelector("#temperature");
let weatherIcon = document.querySelector("#weather-icon");
let captionDesc = document.querySelector('figcaption');

let weatherForecast = document.querySelector("#forecast");
let windSpeed = document.querySelector("#windspeed");
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