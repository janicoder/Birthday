//Declaring variables and assigning elements to them
const body = document.getElementById('body');
const alert = document.getElementById('alert');
const color_button = document.getElementById('color-button');
var alertColor = alert.backgroundColor;
var alertFontColor = alert.style.color;

//Functions for Color Button
function makeLight() {
    //Background Color of page is set to Light Blue
    body.style.backgroundColor = 'rgba(0, 217, 255, 0.856)';
    //Background Color of Alert is set to Black
    alert.style.backgroundColor = 'rgba(0, 0, 0, 0.856)';
    alert.style.color = 'rgb(255, 255, 255)';
    //alertColor is set to the background color of the alert
    alertColor = alert.backgroundColor;
    //Color Button Text is changed to Darken
    color_button.innerHTML = 'Darken';
    //Old listener is removed and new listener is added
    color_button.removeEventListener('click', makeLight);
    color_button.addEventListener('click', makeDark);
};

function makeDark() {
    //Background Color of page is set to Black
    body.style.backgroundColor = 'rgb(0, 0, 0)';
    //Background Color of Alert is set to Light Blue
    alert.style.backgroundColor = 'rgba(0, 217, 255, 0.856)';
    alert.style.color = 'rgb(0, 0, 0)';
    //alertColor is set to the background color of the alert
    alertColor = alert.backgroundColor;
    //Color Button Text is changed to Lighten
    color_button.innerHTML = 'Lighten';
    //Old listener is removed and new listener is added
    color_button.removeEventListener('click', makeDark);
    color_button.addEventListener('click', makeLight);
};

//Event Listener for Color Button is initialized
color_button.addEventListener('click', makeLight);
color_button.addEventListener('mouseover', function name() {
    color_button.style.cursor = 'pointer';
})


//Alert

//Functions for Alert
function hideAlert() {
    //Alert is hidden
    alert.style.display = 'none';
    //Listener is removed
    alert.removeEventListener('click', hideAlert);
    alert.removeEventListener('mouseenter', hoverAlertAdd);
    alert.removeEventListener('mouseleave', hoverAlertReset);
}

function hoverAlertAdd() {
    //Alert's current color is stored for later use
    alertColor = alert.style.backgroundColor;
    alertFontColor = alert.style.color;
    //Alert color changes when mouse hovers over it
    alert.style.backgroundColor = 'rgb(220,200,260)';
    alert.style.color = 'rgb(0, 0, 0)';
    //Mouse is changed to a hand when it hovers over the alert
    alert.style.cursor = 'pointer';
    //Alert text is changed to 'Click to Hide'
    alert.innerHTML = '<h1>Click to hide</h1>';
    //Old listener is removed and new listener is added
    alert.removeEventListener('mouseenter', hoverAlertAdd);
    alert.addEventListener('mouseleave', hoverAlertReset);
}

function hoverAlertReset() {
    //Alert's color is set to the color it was before the mouse hovers over it
    alert.style.backgroundColor = alertColor;
    alert.style.color = alertFontColor;
    //Alert text is changed to the default text
    alert.innerHTML = '<h1>HAPPY BIRTHDAY BUBBA!!!</h1>';
    //Old listener is removed and new listener is added
    alert.removeEventListener('mouseleave', hoverAlertReset);
    alert.addEventListener('mouseenter', hoverAlertAdd);
}

//Intializing event listeners for Alert
alert.addEventListener('click', hideAlert);
alert.addEventListener('mouseenter', hoverAlertAdd);
