
const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&units=imperial&appid=f91237fb3b7de2e50a66bea388132150`

const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=f91237fb3b7de2e50a66bea388132150&units=imperial"

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#icon');
const humidity = document.querySelector('#humidity');
const desc = document.querySelector('#description');
const forecastContainer = document.querySelector('#forecast');
const nextTemp = document.querySelector('#nextdayTemp');
const nextIcon = document.querySelector('#nextdayIcon');
const nextDesc = document.querySelector('#nextdayDescription');
const nextHumidity = document.querySelector('#nextdayHumidity');

async function apiFetch() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([fetch(url), fetch(forecast)]);


        if (currentResponse.ok && forecastResponse.ok) {
            const currentData = await currentResponse.json();
            const forecastData = await forecastResponse.json();
            console.log(currentData);
            console.log(forecastData);
            displayCurrentWeather(currentData);
            displayForecast(forecastData);
        }
    } catch (error) {
        console.log(error);
    }
}
function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    const weatherDesc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weatherDesc);
    desc.textContent = `${weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

function displayForecast(data) {

    const nextDayData = getNextDay3(data);

    if (nextDayData) {
        const nextDayTemp = Math.round(nextDayData.main.temp);
        const nextDayDesc = nextDayData.weather[0].description;
        const nextDayIcon = nextDayData.weather[0].icon;
        const nextDayIconSrc = `https://openweathermap.org/img/w/${nextDayIcon}.png`;
        const nextDayDate = nextDayData.dt_txt.split(' ')[0];

        nextTemp.innerHTML = `${nextDayTemp}&deg;F`;
        nextIcon.setAttribute('src', nextDayIconSrc);
        nextIcon.setAttribute('alt', nextDayDesc);
        nextDesc.textContent = nextDayDesc.charAt(0).toUpperCase() + nextDayDesc.slice(1);
        nextHumidity.textContent = `Humidity: ${nextDayData.main.humidity}%`;
        console.log("current temp is: " + nextDayTemp);
    }
}
function getNextDay3(data) {
    const currentTime = new Date();
    const currentDate = currentTime.toISOString().split('T')[0];

    console.log(data.list);


    for (let i = 0; i < data.list.length; i++) {
        const forecastTime = new Date(data.list[i].dt * 1000);
        const forecastDay = forecastTime.toISOString().split('T')[0];

        if (forecastDay > currentDate) {
            console.log("forecast day is: " + forecastDay);
            return data.list[i];
        }
    }
    return null;
}


apiFetch();