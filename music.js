var song1 = document.getElementById('allOfMe');
var song2 = document.getElementById('duskTillDawn');

song1.onended = function() {
    song2.play();
}