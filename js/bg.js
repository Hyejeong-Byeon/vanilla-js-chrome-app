const body = document.querySelector("body");

const IMG_NUM = 5;

function paintImage(imgNum) {
    const image = document.createElement("img");
    image.src = `../images/${imgNum + 1}.jpg`;
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();