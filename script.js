//document.getElementById('body').style.backgroundColor = 'rgb(150, 240, 255)';
let nav_button = document.getElementsByClassName('nav-button');

function changeColor(target) {
    target.style.backgroundColor = '#f5f5f5';    
}

nav_button.addEventListener('click', changeColor);