var songs = document.getElementsByClassName('song');

for (var i = 0; i < songs.length; i++) {
    songs[i].onended = function() {
        songs[i + 1].play();
    } 
}