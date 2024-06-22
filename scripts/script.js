document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modification: ' + lastModified;

    const currentYearSpan = document.getElementById('currentyear');
    currentYearSpan.textContent = new Date().getFullYear();

    const temperature = 15; // in Celsius
    const windSpeed = 10; // in km/h

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    }

    document.getElementById('wind-chill').textContent = windChill;
});