
const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&units=imperial&appid=f91237fb3b7de2e50a66bea388132150`

const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=f91237fb3b7de2e50a66bea388132150&units=imperial"

let weatherTemp = document.querySelector("#weatherTemp")
let weatherIcon = document.querySelector("#weatherIcon")
let weatherDesc = document.querySelector("#weatherDesc")
let humidity = document.querySelector("#humidity")
let weatherForecast = document.querySelector("#forecast")
let highTemp = document.querySelector("#highTemp")

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayResults(data)
            console.log(data)
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
    weatherTemp.innerHTML = `${parseInt(data.list[0].main.temp.toFixed(0))}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    let desc = data.list[0].weather[0].description
    humidity.innerHTML = `${data.list[0].main.humidity}% Humidity`
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", "Weather Icon")
    weatherDesc.textContent = `${desc}`
    forecast.innerHTML = `Tomorrow's Forecast: ${parseInt(data.list[1].main.temp.toFixed(0))}&deg;F`
    highTemp.innerHTML = `Today's High Temperature: ${parseInt(data.list[0].main.temp_max.toFixed(0))}&deg;F`
}

apiFetch()

// *********Forecast *************//
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

// ********* Weather Banner *********
function weatherBanner() {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");

    // // Set initial visibility
    const isBannerVisible = true;
    banner.classList.toggle("banner", isBannerVisible);
    banner.classList.toggle("banner-hide", !isBannerVisible);

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
    });
}
weatherBanner();