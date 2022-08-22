const body = document.getElementById('body');
let color_button = document.getElementById('color-button');

function makeLight() {
    body.style.backgroundColor = 'rgb(150, 240, 255)';
    color_button.removeEventListener('click', makeLight);
    color_button.addEventListener('click', makeDark);
};

function makeDark() {
    body.style.backgroundColor = 'rgb(2, 92, 133)';
    color_button.removeEventListener('click', makeDark);
    color_button.addEventListener('click', makeLight);
};

color_button.addEventListener('click', makeLight);