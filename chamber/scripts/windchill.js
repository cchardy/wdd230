// Weather for Chamber
const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.94&lon=-112.84&units=imperial&appid=f91237fb3b7de2e50a66bea388132150`
const baseURL = "https://cchardy.github.io/wdd230/chamber//"
const forcastURL = "https://cchardy.github.io/wdd230/chamber/data/forcast.json"

const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const weatherForcast = document.querySelector("#forcast");
const windSpeed = document.querySelector("#windspeed");
const windChill = document.querySelector("#windchill");

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