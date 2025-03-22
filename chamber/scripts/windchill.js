function calculateWindchill(temperature, windspeed) {
    if (windspeed > 3 && temperature <= 50) {
        let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
        return windchill.toFixed(0);
    } else {
        return "N/A";
    }
}
function updateWindchill() {
    let temperature = 47;
    let windSpeed = 10;
    let windchill = calculateWindchill(temperature, windSpeed);
    document.getElementById("windchill").innerHTML = `Windchill: ${windchill}&deg;F`;

}
window.onload = updateWindchill;
