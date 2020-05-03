const weather = document.querySelector(".js-weather"),
    weatherPlace = weather.querySelector(".place"),
    weatherTem = weather.querySelector(".temperature");
const API_KEY = "a8eee71838a02f4f14f9229300ba9512";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function (response) {
        return response.json();
    }).then(function (json) {
        const place = json.name;
        const temperature = json.main.temp;
        const celsius = "&#8451";
        weatherPlace.innerText = `${place}`;
        weatherTem.innerHTML = `${temperature}${celsius}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccese(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Error")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccese, handleGeoError)
}

function loadCoordes() {
    const loadedCoordes = localStorage.getItem(COORDS);
    if (loadedCoordes === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoordes);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoordes();
}

init();