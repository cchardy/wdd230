// Weather for Chamber
const url = "https://api.openweathermap.org/data/2.5/weather?lat=42.94&lon=-112.84&units=imperial&appid=f91237fb3b7de2e50a66bea388132150"
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=42.94&lon=-112.84&appid=f91237fb3b7de2e50a66bea388132150&units=imperial"

const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const weatherForecast = document.querySelector("#forecast");

const windspeed = document.querySelector("#windspeed");
let windchill = document.querySelector("#windchill");


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
    currentTemp.innerHTML = `${parseInt(data.main.temp.toFixed(0))}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Weather Icon");
    captionDesc.textContent = `${desc}`;
}

fetch(forecast)
    .then(response => response.json())
    .then(data => {
        // Process the data
        const forecastDays = [];
        for (let i = 0; i < data.list.length; i += 8) { // Get data for every 24 hours (8 intervals of 3 hours)
            forecastDays.push(data.list[i]);
        }
        displayForecast(forecastDays);
    })
    .catch(error => console.error('Error fetching weather data:', error));

function displayForecast(forecastDays) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    forecastDays.forEach(dayData => {
        const date = new Date(dayData.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temperature = dayData.main.temp;
        const description = dayData.weather[0].description;

        const dayElement = document.createElement('div');
        dayElement.classList.add('forecast-day');
        dayElement.innerHTML = `
            <h4>${dayName}</h4>
            <p>Temperature: ${temperature}&deg;F</p>
            <p>Conditions: ${description}</p>
            `;
        forecastContainer.appendChild(dayElement);
    });
}

apiFetch()