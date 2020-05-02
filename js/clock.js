const clockcontainer = document.querySelector(".js-clock"),
    clockTitle = clockcontainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minuites = date.getMinutes();
    const secondes = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minuites < 10 ? `0${minuites}`:minuites}:${secondes < 10 ? `0${secondes}`:secondes}`;
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();