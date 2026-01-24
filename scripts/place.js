const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");
const currentYear = new Date().getFullYear();

yearSpan.textContent = currentYear;
lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 28;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "N/A";
}