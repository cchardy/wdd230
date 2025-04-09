const apiKey = "f91237fb3b7de2e50a66bea388132150";

// Cozumel, Mexico
const lat = 20.51;
const lon = -86.93;

const urlOpenWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude={hourly,minutely,alerts}&appid=${apiKey}`;

async function apiFetchOpenWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayOneCallResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
apiFetchOpenWeather(urlOpenWeather);

function displayOneCallResults(data) {
    // console.log(data);
    const results = data.daily;
    const weatherBanner = document.querySelector(".weather-container");
    const weather = document.createElement("div");
    weather.classList.add("weather");
    const weatherGroup = document.querySelector(".weatherGroup");

    // Current day high temperature
    const dailyHigh = document.querySelector(".tempHigh");
    dailyHigh.innerHTML = Math.round(results[0].temp.max);

    // Current temperature
    const currentTemp = Math.round(data.current.temp);
    // Current humidity
    const currentHumidity = data.current.humidity;
    // Current weather description
    const currentDescription = data.current.weather[0].description;
    // Current weather icon
    const currentIcon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;

    weather.innerHTML = `
    <article class="weatherGroup">
    <span>
        <div>Currently</div>
            <div class="temp-day">
            <div class="tempDiv"><span><img src=${currentIcon} alt=${currentDescription}></span><span>${currentDescription}</span></div>
            <div class="temp-group">
                <span>${currentTemp}&deg;F</span>
                <span>${currentHumidity}%</span>
            </div>
        </div>
    </span>
</article>
`;
    weatherBanner.appendChild(weather);

    // Filter the results to get the next 5 days
    const dailyResults = results.slice(1, 5);

    dailyResults.forEach((day) => {
        const timestamp = day.dt * 1000;
        let weekday = dayOfTheWeek(timestamp);

        // Future temperature
        const futureTemp = Math.round(day.temp.day);
        // Future humidity
        const futureHumidity = day.humidity;
        // Future weather description
        const futureDescription = day.weather[0].description;
        // Future weather icon
        const futureIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

        const futureDay = document.createElement("article");
        futureDay.classList.add("weatherGroup");

        futureDay.innerHTML = `
    <span>
        <div>${weekday}</div>
            <div class="temp-day">
                <div class="tempDiv"><span><img src=${futureIcon} alt=${futureDescription}></span><span>${futureDescription}</span></div>
                <div class="temp-group">
                        <span>${futureTemp}&deg;F</span>
                        <span>${futureHumidity}%</span>
                    </div>
            </div>
    </span>
`;
        weather.appendChild(futureDay);
        weatherBanner.appendChild(weather);
    });
}

function dayOfTheWeek(timestamp) {
    const options = {
        weekday: "long",
    };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", options);
}

function dateFormate(timestamp) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "America/Phoenix",
        timeZoneName: "short",
    };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", options);
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