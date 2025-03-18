function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

function updateWindChill() {

    const temperature = parseFloat(document.getElementById("temperature").value);
    const windSpeed = parseFloat(document.getElementById("windSpeed").value);

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("windChill").textContent = "Wind chill: " + Math.round(windChill * 100) / 100 + " °F";
    } else {
        document.getElementById("windChill").textContent = "Calculate wind chill above.";
    }
}
